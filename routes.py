from flask import Blueprint, render_template, request, redirect, url_for, flash, jsonify
from functools import wraps
from models import db, Department, Course, Teacher, Classroom, Allocation, TimetableEntry, User, DAYS, TIMESLOTS, LeaveRequest, Substitution, Message
from scheduler import Scheduler
from flask_login import login_user, logout_user, login_required, current_user
import csv
import io
import random
from datetime import datetime, date

main = Blueprint('main', __name__)

def admin_required(f):
    from functools import wraps
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if not current_user.is_authenticated or current_user.role != 'admin':
            flash('Access denied. Admin only.', 'danger')
            return redirect(url_for('main.dashboard'))
        return f(*args, **kwargs)
    return decorated_function


@main.route('/mailbox')
@login_required
def mailbox():
    messages = Message.query.filter_by(recipient_id=current_user.id).order_by(Message.timestamp.desc()).all()
    return render_template('mailbox.html', messages=messages)

@main.route('/mailbox/read/<int:id>')
@login_required
def read_message(id):
    msg = Message.query.get_or_404(id)
    if msg.recipient_id != current_user.id:
        flash('Access denied.', 'danger')
        return redirect(url_for('main.mailbox'))
    
    msg.is_read = True
    db.session.commit()
    return render_template('read_message.html', message=msg)

@main.route('/mailbox/clear', methods=['POST'])
@login_required
def clear_mailbox():
    try:
        num_deleted = Message.query.filter_by(recipient_id=current_user.id).delete()
        db.session.commit()
        flash(f'Mailbox cleared. {num_deleted} messages deleted.', 'success')
    except Exception as e:
        db.session.rollback()
        flash(f'Error clearing mailbox: {e}', 'danger')
    return redirect(url_for('main.mailbox'))

@main.route('/mailbox/send', methods=['GET', 'POST'])
@login_required
def compose_message():
    if current_user.role != 'admin':
        flash('Only admins can send messages.', 'danger')
        return redirect(url_for('main.mailbox'))

    if request.method == 'POST':
        recipient_id = request.form.get('recipient_id')
        recipient_group = request.form.get('recipient_group')
        subject = request.form.get('subject')
        body = request.form.get('body')

        if not subject or not body:
            flash('Subject and Body are required.', 'danger')
            return redirect(url_for('main.compose_message'))
        
        recipients = []
        if recipient_group:
            if recipient_group == 'all_teachers':
                recipients = User.query.filter_by(role='teacher').all()
            elif recipient_group == 'all_students':
                recipients = User.query.filter_by(role='student').all()
            elif recipient_group == 'everyone':
                recipients = User.query.filter(User.id != current_user.id).all()
        elif recipient_id:
             user = User.query.get(recipient_id)
             if user: recipients = [user]
        else:
            flash('Please select a recipient or a group.', 'danger')
            return redirect(url_for('main.compose_message'))

        count = 0
        for recipient in recipients:
            if recipient.id == current_user.id: continue
            msg = Message(
                recipient_id=recipient.id,
                sender_id=current_user.id,
                subject=subject,
                body=body,
                category='Admin Message'
            )
            db.session.add(msg)
            count += 1
            
        db.session.commit()
        flash(f'Message sent successfully to {count} users.', 'success')
        return redirect(url_for('main.mailbox'))

    users = User.query.filter(User.id != current_user.id).order_by(User.role, User.username).all()
    user_groups = [
        {'id': 'all_teachers', 'name': 'All Teachers'},
        {'id': 'all_students', 'name': 'All Students'},
        {'id': 'everyone', 'name': 'Everyone'}
    ]
    return render_template('compose_message.html', users=users, user_groups=user_groups)





@main.route('/')
def index():
    if not current_user.is_authenticated:
        return redirect(url_for('main.login'))
    return redirect(url_for('main.dashboard'))

@main.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        
        user = User.query.filter_by(username=username).first()
        if user:
            if user.password == password:
                login_user(user)
                flash(f'Welcome back, {username}!', 'success')
                return redirect(url_for('main.dashboard'))
            else:
                flash('pass is wrong', 'danger')
                return redirect(url_for('main.login'))
        
        if username == 'admin' and password == 'admin' and not User.query.filter_by(username='admin').first():
            new_admin = User(username='admin', password='admin', role='admin')
            db.session.add(new_admin)
            db.session.commit()
            login_user(new_admin)
            return redirect(url_for('main.dashboard'))

        flash('Invalid username or password', 'danger')
    return render_template('login.html')

@main.route('/logout')
@login_required
def logout():
    logout_user()
    flash('Logged out successfully.', 'success')
    return redirect(url_for('main.login'))

@main.route('/profile', methods=['GET', 'POST'])
@login_required
def profile():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        confirm_password = request.form.get('confirm_password')

        current_user.email = email

        if password:
            if password != confirm_password:
                flash('Passwords do not match.', 'danger')
                return redirect(url_for('main.profile'))
            current_user.password = password
            flash('Profile updated successfully (including password)!', 'success')
        else:
            flash('Profile details updated!', 'success')
            
        db.session.commit()
        return redirect(url_for('main.profile'))

    return render_template('profile.html')

@main.route('/register')
def register():
    return render_template('register.html')

@main.route('/register/student', methods=['GET', 'POST'])
def register_student():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        dept_id = request.form.get('dept_id')
        
        if User.query.filter_by(username=username).first():
            flash('Username already exists.', 'danger')
            return redirect(url_for('main.register_student'))
            
        new_user = User(username=username, password=password, role='student', dept_id=dept_id)
        db.session.add(new_user)
        db.session.commit()
        flash('Student account created! You can now login.', 'success')
        return redirect(url_for('main.login'))
        
    departments = Department.query.all()
    return render_template('register_form.html', role='student', departments=departments)

@main.route('/register/teacher', methods=['GET', 'POST'])
def register_teacher():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        teacher_id = request.form.get('teacher_id')
        
        if User.query.filter_by(username=username).first():
            flash('Username already exists.', 'danger')
            return redirect(url_for('main.register_teacher'))
            
        new_user = User(username=username, password=password, role='teacher', teacher_id=teacher_id)
        teacher_profile = Teacher.query.get(teacher_id)
        if teacher_profile:
            new_user.dept_id = teacher_profile.dept_id
            
        db.session.add(new_user)
        db.session.commit()
        flash('Teacher account created! You can now login.', 'success')
        return redirect(url_for('main.login'))
        
    registered_teacher_ids = [u.teacher_id for u in User.query.filter(User.teacher_id.isnot(None)).all()]
    teachers = Teacher.query.filter(~Teacher.id.in_(registered_teacher_ids)).all()
    return render_template('register_form.html', role='teacher', teachers=teachers)

@main.route('/dashboard')
@login_required
def dashboard():
    counts = {
        'departments': Department.query.count(),
        'teachers': Teacher.query.count(),
        'courses': Course.query.count(),
        'classrooms': Classroom.query.count()
    }
    return render_template('dashboard.html', counts=counts)

@main.route('/upload_csv', methods=['GET', 'POST'])
@login_required
@admin_required
def upload_csv():
    if request.method == 'POST':
        file_type = request.form.get('file_type')
        file = request.files.get('csv_file')
        
        if not file or not file.filename.endswith('.csv'):
            flash('Please upload a valid CSV file.', 'danger')
            return redirect(url_for('main.upload_csv'))
        
        stream = io.StringIO(file.stream.read().decode("UTF8"), newline=None)
        reader = csv.DictReader(stream)
        
        try:
            count = 0
            if file_type == 'teachers':
                for row in reader:
                    dept = Department.query.filter_by(code=row['DepartmentCode']).first()
                    teacher = Teacher(
                        name=row['TeacherName'],
                        dept_id=dept.id if dept else None,
                        workload_limit=int(row.get('MaxHoursPerWeek', 20)),
                        email=row.get('Email')
                    )
                    db.session.add(teacher)
                    count += 1
            
            elif file_type == 'subjects':
                for row in reader:
                    dept = Department.query.filter_by(code=row['DepartmentCode']).first()
                    course = Course(
                        name=row['Name'],
                        code=row['Code'],
                        dept_id=dept.id if dept else None,
                        hours_per_week=int(row['HoursPerWeek']),
                        type=row.get('Type', 'Theory')
                    )
                    db.session.add(course)
                    count += 1
                    
            elif file_type == 'classrooms':
                for row in reader:
                    room = Classroom(
                        name=row['Name'],
                        capacity=int(row['Capacity']),
                        type=row.get('Type', 'Classroom')
                    )
                    db.session.add(room)
                    count += 1
                    
            elif file_type == 'departments':
                for row in reader:
                    dept = Department(
                        name=row['Name'], 
                        code=row['Code'],
                        section=row.get('Section', 'A'),
                        semester=row.get('Semester', 'Semester 1')
                    )
                    db.session.add(dept)
                    count += 1
            
            elif file_type == 'allocations':
                for row in reader:
                    course = Course.query.filter_by(code=row.get('CourseCode')).first()
                    teacher = Teacher.query.filter_by(name=row.get('TeacherName')).first()
                    
                    if course and teacher:
                        alloc = Allocation(course_id=course.id, teacher_id=teacher.id)
                        db.session.add(alloc)
                        count += 1
            
            db.session.commit()
            flash(f'Successfully imported {count} items for {file_type}.', 'success')
        except Exception as e:
            db.session.rollback()
            flash(f'Error parsing CSV: {str(e)}', 'danger')
            
        return redirect(url_for('main.upload_csv'))
        
    return render_template('upload_csv.html')

@main.route('/departments', methods=['GET', 'POST'])
@login_required
def departments():
    if request.method == 'POST':
        if current_user.role != 'admin':
            flash('Admin only can add departments.', 'danger')
            return redirect(url_for('main.departments'))
        name = request.form.get('name')
        code = request.form.get('code')
        section = request.form.get('section', 'A')
        semester = request.form.get('semester', 'Semester 1')
        dept = Department(name=name, code=code, section=section, semester=semester)
        db.session.add(dept)
        db.session.commit()
        flash('Department added successfully!', 'success')
        return redirect(url_for('main.departments'))
    
    depts = Department.query.all()
    return render_template('resources/departments.html', departments=depts)

@main.route('/teachers', methods=['GET', 'POST'])
@login_required
def teachers():
    if request.method == 'POST':
        if current_user.role != 'admin':
            flash('Admin only can add teachers.', 'danger')
            return redirect(url_for('main.teachers'))
        name = request.form.get('name')
        dept_id = request.form.get('dept_id')
        if name and dept_id:
            teacher = Teacher(name=name, dept_id=dept_id)
            db.session.add(teacher)
            db.session.commit()
            flash('Teacher added!', 'success')
        return redirect(url_for('main.teachers'))

    teachers = Teacher.query.all()
    depts = Department.query.all()
    return render_template('resources/teachers.html', teachers=teachers, departments=depts)

@main.route('/classrooms', methods=['GET', 'POST'])
@login_required
def classrooms():
    if request.method == 'POST':
        if current_user.role != 'admin':
            flash('Admin only can add classrooms.', 'danger')
            return redirect(url_for('main.classrooms'))
        name = request.form.get('name')
        capacity = request.form.get('capacity')
        type = request.form.get('type')
        if name:
            room = Classroom(name=name, capacity=capacity, type=type)
            db.session.add(room)
            db.session.commit()
            flash('Classroom added!', 'success')
        return redirect(url_for('main.classrooms'))
    
    rooms = Classroom.query.all()
    return render_template('resources/classrooms.html', classrooms=rooms)

@main.route('/courses', methods=['GET', 'POST'])
@login_required
def courses():
    if request.method == 'POST':
        if current_user.role != 'admin':
            flash('Admin only can add subjects.', 'danger')
            return redirect(url_for('main.courses'))
        name = request.form.get('name')
        code = request.form.get('code')
        dept_id = request.form.get('dept_id')
        hours = request.form.get('hours_per_week')
        type = request.form.get('type')
        
        if name and code:
            course = Course(name=name, code=code, dept_id=dept_id, hours_per_week=hours, type=type)
            db.session.add(course)
            db.session.commit()
            flash('Course added!', 'success')
        return redirect(url_for('main.courses'))
    
    courses = Course.query.all()
    depts = Department.query.all()
    return render_template('resources/courses.html', courses=courses, departments=depts)

@main.route('/allocations', methods=['GET', 'POST'])
@login_required
def allocations():
    if request.method == 'POST':
        if current_user.role != 'admin':
            flash('Admin only can manage allocations.', 'danger')
            return redirect(url_for('main.allocations'))
        course_id = request.form.get('course_id')
        teacher_id = request.form.get('teacher_id')
        if course_id and teacher_id:
            alloc = Allocation(course_id=course_id, teacher_id=teacher_id)
            db.session.add(alloc)
            db.session.commit()
            flash('Allocation assigned!', 'success')
        return redirect(url_for('main.allocations'))
        
    allocs = Allocation.query.all()
    courses = Course.query.all()
    teachers = Teacher.query.all()
    return render_template('resources/allocations.html', allocations=allocs, courses=courses, teachers=teachers)

@main.route('/edit_department/<int:id>', methods=['GET', 'POST'])
@login_required
@admin_required
def edit_department(id):
    dept = Department.query.get_or_404(id)
    if request.method == 'POST':
        dept.name = request.form.get('name')
        dept.code = request.form.get('code')
        dept.section = request.form.get('section')
        dept.semester = request.form.get('semester')
        db.session.commit()
        flash('Department updated successfully!', 'success')
        return redirect(url_for('main.departments'))
    return render_template('resources/edit_department.html', dept=dept)

@main.route('/departments/delete/<int:id>')
@login_required
@admin_required
def delete_department(id):
    dept = Department.query.get_or_404(id)
    db.session.delete(dept)
    db.session.commit()
    flash('Department deleted!', 'warning')
    return redirect(url_for('main.departments'))

@main.route('/teachers/edit/<int:id>', methods=['GET', 'POST'])
@login_required
@admin_required
def edit_teacher(id):
    teacher = Teacher.query.get_or_404(id)
    if request.method == 'POST':
        teacher.name = request.form.get('name')
        teacher.dept_id = request.form.get('dept_id')
        db.session.commit()
        flash('Teacher updated!', 'success')
        return redirect(url_for('main.teachers'))
    depts = Department.query.all()
    return render_template('resources/edit_teacher.html', teacher=teacher, departments=depts)

@main.route('/teachers/delete/<int:id>')
@login_required
@admin_required
def delete_teacher(id):
    teacher = Teacher.query.get_or_404(id)
    db.session.delete(teacher)
    db.session.commit()
    flash('Teacher deleted!', 'warning')
    return redirect(url_for('main.teachers'))

@main.route('/classrooms/edit/<int:id>', methods=['GET', 'POST'])
@login_required
@admin_required
def edit_classroom(id):
    room = Classroom.query.get_or_404(id)
    if request.method == 'POST':
        room.name = request.form.get('name')
        room.capacity = request.form.get('capacity')
        room.type = request.form.get('type')
        db.session.commit()
        flash('Classroom updated!', 'success')
        return redirect(url_for('main.classrooms'))
    return render_template('resources/edit_classroom.html', room=room)

@main.route('/classrooms/delete/<int:id>')
@login_required
@admin_required
def delete_classroom(id):
    room = Classroom.query.get_or_404(id)
    db.session.delete(room)
    db.session.commit()
    flash('Classroom deleted!', 'warning')
    return redirect(url_for('main.classrooms'))

@main.route('/courses/edit/<int:id>', methods=['GET', 'POST'])
@login_required
@admin_required
def edit_course(id):
    course = Course.query.get_or_404(id)
    if request.method == 'POST':
        course.name = request.form.get('name')
        course.code = request.form.get('code')
        course.dept_id = request.form.get('dept_id')
        course.hours_per_week = request.form.get('hours_per_week')
        course.type = request.form.get('type')
        db.session.commit()
        flash('Course updated!', 'success')
        return redirect(url_for('main.courses'))
    depts = Department.query.all()
    return render_template('resources/edit_course.html', course=course, departments=depts)

@main.route('/courses/delete/<int:id>')
@login_required
@admin_required
def delete_course(id):
    course = Course.query.get_or_404(id)
    db.session.delete(course)
    db.session.commit()
    flash('Course deleted!', 'warning')
    return redirect(url_for('main.courses'))

@main.route('/allocations/delete/<int:id>')
@login_required
@admin_required
def delete_allocation(id):
    alloc = Allocation.query.get_or_404(id)
    db.session.delete(alloc)
    db.session.commit()
    flash('Allocation removed!', 'warning')
    return redirect(url_for('main.allocations'))

@main.route('/generate', methods=['POST'])
@login_required
@admin_required
def generate():
    scheduler = Scheduler()
    if not scheduler.requirements:
        flash('Failed: No subjects have teachers assigned. Please go to Allocations to link teachers with subjects.', 'danger')
        return redirect(url_for('main.allocations'))
        
    success = scheduler.generate_timetable()
    if success:
        flash('Timetable generated successfully!', 'success')
    else:
        flash('Failed to generate timetable. Check if you have enough classrooms or if teachers have exceeded their workload.', 'danger')
    return redirect(url_for('main.timetable'))

@main.route('/clear_timetable', methods=['POST'])
@login_required
@admin_required
def clear_timetable():
    try:
        num_deleted = TimetableEntry.query.delete()
        db.session.commit()
        flash(f'Successfully cleared {num_deleted} timetable entries.', 'success')
    except Exception as e:
        db.session.rollback()
        flash(f'Error clearing timetable: {e}', 'danger')
    return redirect(url_for('main.timetable'))

def check_conflict(day, timeslot, teacher_id, classroom_id, dept_id, ignore_entry_id=None):
    """
    Checks for conflicts and returns (conflict_found: bool, reason: str).
    """
    teacher_busy = TimetableEntry.query.filter(
        TimetableEntry.day == day,
        TimetableEntry.timeslot == timeslot,
        TimetableEntry.teacher_id == teacher_id,
        TimetableEntry.id != ignore_entry_id
    ).first()
    if teacher_busy:
        return True, f"Teacher {teacher_busy.teacher.name} is already teaching {teacher_busy.course.name} in Room {teacher_busy.classroom.name}."

    room_busy = TimetableEntry.query.filter(
        TimetableEntry.day == day,
        TimetableEntry.timeslot == timeslot,
        TimetableEntry.classroom_id == classroom_id,
        TimetableEntry.id != ignore_entry_id
    ).first()
    if room_busy:
        return True, f"Classroom {room_busy.classroom.name} is already occupied by {room_busy.course.name} ({room_busy.teacher.name})."

    dept_sessions = TimetableEntry.query.filter(
        TimetableEntry.day == day,
        TimetableEntry.timeslot == timeslot,
        TimetableEntry.dept_id == dept_id,
        TimetableEntry.id != ignore_entry_id
    ).all()
    
    if len(dept_sessions) >= 2:
        return True, "Department already has 2 concurrent sessions (Practical/Batch limit reached)."
    
    
    return False, None

def get_suggestions(entry, limit=5):
    """
    Finds alternative valid slots for the given entry.
    """
    suggestions = []
    classrooms = Classroom.query.all()
    
    all_days = list(DAYS)
    all_slots = list(TIMESLOTS)
    random.shuffle(all_days)
    random.shuffle(all_slots)
    preferred_room_type = entry.classroom.type

    for day in all_days:
        for slot in all_slots:
            if day == entry.day and slot == entry.timeslot:
                continue
                
            valid_room = None
            
            sorted_rooms = sorted(classrooms, key=lambda r: 0 if r.type == preferred_room_type else 1)
            
            for room in sorted_rooms:
                conflict, _ = check_conflict(day, slot, entry.teacher_id, room.id, entry.dept_id, entry.id)
                if not conflict:
                    dept_sessions_count = TimetableEntry.query.filter(
                        TimetableEntry.day == day,
                        TimetableEntry.timeslot == slot,
                        TimetableEntry.dept_id == entry.dept_id,
                        TimetableEntry.id != entry.id
                    ).count()
                    
                    is_practical = entry.course.type == 'Practical'
                    if is_practical:
                        if dept_sessions_count >= 2: continue
                    else:
                        if dept_sessions_count >= 1: continue

                    valid_room = room
                    break
            
            if valid_room:
                suggestions.append({
                    'day': day,
                    'timeslot': slot,
                    'classroom': valid_room
                })
                
            if len(suggestions) >= limit:
                return suggestions
                
    return suggestions

@main.route('/timetable/edit/<int:id>', methods=['GET', 'POST'])
@login_required
def edit_timetable_entry(id):
    entry = TimetableEntry.query.get_or_404(id)
    
    if current_user.role != 'admin' and (current_user.role != 'teacher' or current_user.teacher_id != entry.teacher_id):
        flash('Access denied. You can only edit your own sessions.', 'danger')
        return redirect(url_for('main.timetable'))
        
    suggestions = []
    conflict_reason = None
    
    if request.method == 'POST':
        new_day = request.form.get('day')
        new_timeslot = request.form.get('timeslot')
        new_classroom_id = int(request.form.get('classroom_id'))
        new_teacher_id = int(request.form.get('teacher_id')) if current_user.role == 'admin' else entry.teacher_id
        
        conflict, reason = check_conflict(new_day, new_timeslot, new_teacher_id, new_classroom_id, entry.dept_id, entry.id)
        
        if not conflict:
            dept_sessions = TimetableEntry.query.filter(
                TimetableEntry.day == new_day,
                TimetableEntry.timeslot == new_timeslot,
                TimetableEntry.dept_id == entry.dept_id,
                TimetableEntry.id != entry.id
            ).all()
            
            is_practical = entry.course.type == 'Practical'
            if is_practical:
                if len(dept_sessions) >= 2:
                    conflict = True
                    reason = "Department limit reached (max 2 parallel practical sessions)."
            else:
                if len(dept_sessions) >= 1:
                    conflict = True
                    reason = "Department limit reached (Theory classes cannot run parallel to other classes)."

        if conflict:
            flash(f'Conflict Detected: {reason}', 'danger')
            conflict_reason = reason
            suggestions = get_suggestions(entry)
        else:
            entry.day = new_day
            entry.timeslot = new_timeslot
            entry.classroom_id = new_classroom_id
            entry.teacher_id = new_teacher_id
            
            try:
                db.session.commit()
                flash('Timetable entry updated successfully!', 'success')
                return redirect(url_for('main.timetable'))
            except Exception as e:
                db.session.rollback()
                flash(f'Error updating entry: {e}', 'danger')
            
    classrooms = Classroom.query.all()
    teachers = Teacher.query.all()
    
    return render_template('edit_timetable_entry.html', 
                           entry=entry, 
                           days=DAYS, 
                           time_slots=TIMESLOTS, 
                           classrooms=classrooms,
                           teachers=teachers,
                           suggestions=suggestions,
                           conflict_reason=conflict_reason)

@main.route('/timetable')
@login_required
def timetable():
    slot_map = { t: i for i, t in enumerate(TIMESLOTS) }
    teacher_schedule = None
    teacher_profile = None
    
    today = date.today()
    day_index = today.weekday()
    today_name = DAYS[day_index] if day_index < 6 else None
    
    todays_substitutions = {}
    if today_name:
        subs = Substitution.query.join(LeaveRequest).filter(
            LeaveRequest.date == today,
            LeaveRequest.status == 'Approved'
        ).all()
        
        todays_substitutions = { sub.timetable_entry_id: sub.substitute_teacher.name for sub in subs }
    
    if current_user.role == 'teacher' and current_user.teacher_id:
        teacher_profile = Teacher.query.get(current_user.teacher_id)
        teacher_entries = TimetableEntry.query.filter_by(teacher_id=current_user.teacher_id).all()
        
        teacher_schedule = { day: [{'entries': [], 'colspan': 1, 'skip': False} for _ in range(len(TIMESLOTS))] for day in DAYS }
        
        for entry in teacher_entries:
            if entry.day in DAYS and entry.timeslot in slot_map:
                idx = slot_map[entry.timeslot]
                teacher_schedule[entry.day][idx]['entries'].append(entry)
        
        for day in DAYS:
            slots = teacher_schedule[day]
            i = 0
            while i < len(TIMESLOTS):
                cell = slots[i]
                if cell['skip']: 
                    i += 1
                    continue
                primary_entry = cell['entries'][0] if cell['entries'] else None
                if primary_entry and primary_entry.course.type == 'Practical':
                    duration = 1
                    for j in range(i + 1, len(TIMESLOTS)):
                        next_cell = slots[j]
                        if next_cell['entries'] and next_cell['entries'][0].course_id == primary_entry.course_id:
                            duration += 1
                        else:
                            break
                    if duration > 1:
                        cell['colspan'] = duration
                        for k in range(1, duration):
                            slots[i+k]['skip'] = True
                    i += duration
                else:
                    i += 1

    departments = Department.query.all()
    entries = TimetableEntry.query.all()
    
    timetable_data = {}
    for dept in departments:
        dept_schedule = { day: [{'entries': [], 'colspan': 1, 'skip': False} for _ in range(len(TIMESLOTS))] for day in DAYS }
        timetable_data[dept] = dept_schedule
        
    for entry in entries:
        dept = next((d for d in departments if d.id == entry.dept_id), None)
        if dept and entry.day in DAYS and entry.timeslot in slot_map:
            idx = slot_map[entry.timeslot]
            if 0 <= idx < 7:
                 timetable_data[dept][entry.day][idx]['entries'].append(entry)
                 
    for dept in departments:
        for day in DAYS:
            slots = timetable_data[dept][day]
            i = 0
            while i < len(TIMESLOTS):
                cell = slots[i]
                if cell['skip']: 
                    i += 1
                    continue
                primary_entry = cell['entries'][0] if cell['entries'] else None
                if primary_entry and primary_entry.course.type == 'Practical':
                    duration = 1
                    course_ids = sorted([e.course_id for e in cell['entries']])
                    
                    for j in range(i + 1, len(TIMESLOTS)):
                        next_cell = slots[j]
                        next_course_ids = sorted([e.course_id for e in next_cell['entries']])
                        if next_course_ids == course_ids and next_course_ids:
                            duration += 1
                        else:
                            break
                    
                    if duration > 1:
                        cell['colspan'] = duration
                        for k in range(1, duration):
                            slots[i+k]['skip'] = True
                    i += duration
                else:
                    i += 1

    return render_template('timetable.html', 
                           timetable_data=timetable_data, 
                           teacher_schedule=teacher_schedule,
                           teacher_profile=teacher_profile,
                           days=DAYS, 
                           time_slots=TIMESLOTS, 
                           Department=Department,
                           todays_substitutions=todays_substitutions,
                           today_name=today_name)
@main.route('/download/department/<int:dept_id>')
def download_department_pdf(dept_id):
    return redirect(url_for('main.dashboard'))

@main.route('/leave', methods=['GET', 'POST'])
@login_required
def request_leave():
    if current_user.role != 'teacher':
        flash('Only teachers can request leave.', 'danger')
        return redirect(url_for('main.dashboard'))
    
    if request.method == 'POST':
        date_str = request.form.get('date')
        reason = request.form.get('reason')
        
        try:
            leave_date = datetime.strptime(date_str, '%Y-%m-%d').date()
        except ValueError:
            flash('Invalid date format.', 'danger')
            return redirect(url_for('main.request_leave'))

        if leave_date < date.today():
             flash('Cannot apply for leave in the past.', 'danger')
             return redirect(url_for('main.request_leave'))

        leave_request = LeaveRequest(
            teacher_id=current_user.teacher_id,
            date=leave_date,
            reason=reason
        )
        db.session.add(leave_request)
        db.session.flush() # Get ID

        day_index = leave_date.weekday() # 0=Mon, 6=Sun
        if day_index > 5: # Sunday
            flash('No classes on Sunday.', 'info')
            db.session.commit()
            return redirect(url_for('main.dashboard'))
        
        day_name = DAYS[day_index]
        print(f"Applying leave for {day_name} ({leave_date})")


        msg_teacher = Message(
            recipient_id=current_user.id,
            sender_id=None, # System
            subject=f"Leave Request Received: {leave_request.date}",
            body=f"Your leave request for {leave_request.date} has been received and is pending approval.",
            category='Leave System'
        )
        db.session.add(msg_teacher)

        admins = User.query.filter_by(role='admin').all()
        for admin in admins:
            msg_admin = Message(
                recipient_id=admin.id,
                sender_id=current_user.id,
                subject=f"New Leave Request: {current_user.username}",
                body=f"Teacher {current_user.username} has requested leave for {leave_request.date}. Reason: {reason}. Please review in Admin Leaves.",
                category='Leave Request'
            )
            db.session.add(msg_admin)

        db.session.commit()
        flash('Leave requested successfully. Pending Admin Approval. Confirmation sent to your mailbox.', 'success')
        return redirect(url_for('main.dashboard'))

    return render_template('leave_request.html', today=date.today())

@main.route('/admin/leaves')
@login_required
@admin_required
def admin_leaves():
    leaves = LeaveRequest.query.filter_by(status='Pending').order_by(LeaveRequest.date.asc()).all()
    return render_template('resources/admin_leaves.html', leaves=leaves)

@main.route('/admin/leaves/approve/<int:id>', methods=['POST'])
@login_required
@admin_required
def approve_leave(id):
    leave_request = LeaveRequest.query.get_or_404(id)
    if leave_request.status != 'Pending':
        flash('Request already processed.', 'warning')
        return redirect(url_for('main.admin_leaves'))
    
    leave_request.status = 'Approved'
    leave_request.admin_response = "Leave approved."
    db.session.flush()

    leave_date = leave_request.date
    day_index = leave_date.weekday()
    day_name = DAYS[day_index]
    
    if day_index > 5:
        leave_request.status = 'Rejected'
        leave_request.reason += " (Auto-Rejected: Sunday)"
        leave_request.admin_response = "Leave rejected automatically as it falls on a Sunday."
        db.session.commit()
        flash('Leave on Sunday rejected automatically.', 'info')
        return redirect(url_for('main.admin_leaves'))

    teacher_classes = TimetableEntry.query.filter_by(
        teacher_id=leave_request.teacher_id,
        day=day_name
    ).all()

    substitution_count = 0
    sub_messages = []

    for entry in teacher_classes:
        busy_teachers_query = db.session.query(TimetableEntry.teacher_id).filter_by(
            day=day_name,
            timeslot=entry.timeslot
        )

        busy_substitutes_query = db.session.query(Substitution.substitute_teacher_id).join(
            LeaveRequest, Substitution.leave_id == LeaveRequest.id
        ).join(
            TimetableEntry, Substitution.timetable_entry_id == TimetableEntry.id
        ).filter(
            LeaveRequest.date == leave_date,
            LeaveRequest.status == 'Approved',
            TimetableEntry.timeslot == entry.timeslot
        )

        teachers_on_leave_query = db.session.query(LeaveRequest.teacher_id).filter(
            LeaveRequest.date == leave_date,
            LeaveRequest.status == 'Approved'
        )
        
        busy_with_classes = [r[0] for r in busy_teachers_query.all()]
        busy_substituting = [r[0] for r in busy_substitutes_query.all()]
        on_leave = [r[0] for r in teachers_on_leave_query.all()]
        
        excluded_teacher_ids = set(busy_with_classes + busy_substituting + on_leave + [leave_request.teacher_id])
        
        available_teachers = Teacher.query.filter(
            ~Teacher.id.in_(excluded_teacher_ids)
        ).all()

        if available_teachers:
            substitute = random.choice(available_teachers)
            sub = Substitution(
                leave_request=leave_request,
                timetable_entry_id=entry.id,
                substitute_teacher=substitute
            )
            db.session.add(sub)
            substitution_count += 1
            sub_messages.append(f"{entry.timeslot} ({substitute.name})")
            
    final_message = "Leave Approved."
    if sub_messages:
        leave_request.admin_response = "Approved. Substitutions assinged: " + ", ".join(sub_messages)
        final_message = "Your leave has been approved. The following substitutions have been assigned:<br><ul>" + "".join([f"<li>{m}</li>" for m in sub_messages]) + "</ul>"
    elif not teacher_classes:
        leave_request.admin_response = "Approved. No classes found for this day."
        final_message = "Your leave has been approved. You have no classes scheduled for this day."
    else:
        leave_request.admin_response = "Approved, but no substitutes were available."
        final_message = "Your leave has been approved, but we could not find available substitutes for your classes."

    teacher_user = User.query.filter_by(teacher_id=leave_request.teacher_id).first()
    if teacher_user:
        msg = Message(
            recipient_id=teacher_user.id,
            sender_id=current_user.id,
            subject=f"Leave Approved: {leave_request.date}",
            body=final_message,
            category='Leave'
        )
        db.session.add(msg)

    db.session.commit()
    flash(f'Leave approved. {substitution_count} substitutions assigned.', 'success')
    return redirect(url_for('main.admin_leaves'))

@main.route('/admin/leaves/reject/<int:id>', methods=['POST'])
@login_required
@admin_required
def reject_leave(id):
    leave_request = LeaveRequest.query.get_or_404(id)
    leave_request.status = 'Rejected'
    leave_request.admin_response = "Your leave request was declined by the administrator."

    teacher_user = User.query.filter_by(teacher_id=leave_request.teacher_id).first()
    if teacher_user:
        msg = Message(
            recipient_id=teacher_user.id,
            sender_id=current_user.id,
            subject=f"Leave Rejected: {leave_request.date}",
            body="Your leave request has been rejected.",
            category='Leave'
        )
        db.session.add(msg)
    
    db.session.commit()
    flash('Leave request rejected.', 'warning')
    return redirect(url_for('main.admin_leaves'))
@main.route('/reports')
@login_required
def reports():
    teachers = Teacher.query.all()
    teacher_data = {}
    for t in teachers:
        count = TimetableEntry.query.filter_by(teacher_id=t.id).count()
        teacher_data[t.name] = count
    
    departments = Department.query.all()
    dept_data = {}
    for d in departments:
        count = TimetableEntry.query.filter_by(dept_id=d.id).count()
        dept_data[d.name] = count

    classrooms = Classroom.query.all()
    room_data = {}
    for r in classrooms:
        count = TimetableEntry.query.filter_by(classroom_id=r.id).count()
        room_data[r.name] = count

    return render_template('reports.html', 
                         teacher_data=teacher_data,
                         dept_data=dept_data,
                         room_data=room_data)
