from flask import Blueprint, render_template, request, redirect, url_for, flash, jsonify
from models import db, Department, Classroom, Teacher, Course, Allocation, TimetableEntry, User
from scheduler import Scheduler
from flask_login import login_user, logout_user, login_required, current_user
import csv
import io

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
        if user and user.password == password:
            login_user(user)
            flash(f'Welcome back, {username}!', 'success')
            return redirect(url_for('main.dashboard'))
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
                    dept = Department(name=row['Name'], code=row['Code'])
                    db.session.add(dept)
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
        if name and code:
            dept = Department(name=name, code=code)
            db.session.add(dept)
            db.session.commit()
            flash('Department added!', 'success')
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

@main.route('/departments/edit/<int:id>', methods=['GET', 'POST'])
@login_required
@admin_required
def edit_department(id):
    dept = Department.query.get_or_404(id)
    if request.method == 'POST':
        dept.name = request.form.get('name')
        dept.code = request.form.get('code')
        db.session.commit()
        flash('Department updated!', 'success')
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

@main.route('/timetable')
@login_required
def timetable():
    departments = Department.query.all()
    entries = TimetableEntry.query.all()
    
    timetable_data = {}
    days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    time_slots = [
        '10:00-10:50', '10:50-11:40', '11:40-12:30', '12:30-01:20', 
        '02:00-02:50', '02:50-03:40', '03:40-04:30'
    ]
    slot_map = { t: i for i, t in enumerate(time_slots) }

    for dept in departments:
        dept_schedule = { day: [{'entries': [], 'colspan': 1, 'skip': False} for _ in range(7)] for day in days }
        timetable_data[dept] = dept_schedule
        
    for entry in entries:
        dept = next((d for d in departments if d.id == entry.dept_id), None)
        if dept and entry.day in days and entry.timeslot in slot_map:
            idx = slot_map[entry.timeslot]
            if 0 <= idx < 7:
                 timetable_data[dept][entry.day][idx]['entries'].append(entry)
                 
    for dept in departments:
        for day in days:
            slots = timetable_data[dept][day]
            i = 0
            while i < 7:
                cell = slots[i]
                if cell['skip']: 
                    i += 1
                    continue
                primary_entry = cell['entries'][0] if cell['entries'] else None
                if primary_entry and primary_entry.course.type == 'Practical':
                    duration = 1
                    course_ids = sorted([e.course_id for e in cell['entries']])
                    
                    for j in range(i + 1, 7):
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

    return render_template('timetable.html', timetable_data=timetable_data, days=days, time_slots=time_slots, Department=Department)
