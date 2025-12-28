from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin
from datetime import datetime

db = SQLAlchemy()

DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
TIMESLOTS = [
    '10:00-10:50', '10:50-11:40', '11:40-12:30', '12:30-01:20', 
    '02:00-02:50', '02:50-03:40', '03:40-04:30'
]

class Department(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    code = db.Column(db.String(10), nullable=False)
    section = db.Column(db.String(10), nullable=True, default='A')
    semester = db.Column(db.String(20), nullable=True, default='Semester 1')
    
    # Unique constraint moved to a composite check in real usage or just allowed
    # For simplicity, we'll allow multiple sections/semesters with same code.
    courses = db.relationship('Course', backref='department', lazy=True, cascade="all, delete-orphan")
    teachers = db.relationship('Teacher', backref='department', lazy=True, cascade="all, delete-orphan")
    timetable_entries = db.relationship('TimetableEntry', backref='department', lazy=True, cascade="all, delete-orphan")

class Course(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    code = db.Column(db.String(20), nullable=False)
    dept_id = db.Column(db.Integer, db.ForeignKey('department.id'), nullable=False)
    type = db.Column(db.String(20), nullable=False, default='Theory') 
    hours_per_week = db.Column(db.Integer, nullable=False) 
    
    allocations = db.relationship('Allocation', backref='course', lazy=True, cascade="all, delete-orphan")
    timetable_entries = db.relationship('TimetableEntry', backref='course', lazy=True, cascade="all, delete-orphan")

class Teacher(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=True)
    dept_id = db.Column(db.Integer, db.ForeignKey('department.id'), nullable=True)
    workload_limit = db.Column(db.Integer, default=20)
    
    allocations = db.relationship('Allocation', backref='teacher', lazy=True, cascade="all, delete-orphan")
    timetable_entries = db.relationship('TimetableEntry', backref='teacher', lazy=True, cascade="all, delete-orphan")

class Classroom(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True, nullable=False)
    capacity = db.Column(db.Integer, nullable=False)
    type = db.Column(db.String(20), nullable=False, default='Classroom') 
    timetable_entries = db.relationship('TimetableEntry', backref='classroom', lazy=True, cascade="all, delete-orphan")

class Allocation(db.Model):
    """
    Mapping of which teacher teaches which course.
    """
    id = db.Column(db.Integer, primary_key=True)
    course_id = db.Column(db.Integer, db.ForeignKey('course.id'), nullable=False)
    teacher_id = db.Column(db.Integer, db.ForeignKey('teacher.id'), nullable=False)

class TimetableEntry(db.Model):
    """
    The generated timetable.
    """
    id = db.Column(db.Integer, primary_key=True)
    day = db.Column(db.String(10), nullable=False)
    timeslot = db.Column(db.String(20), nullable=False)
    dept_id = db.Column(db.Integer, db.ForeignKey('department.id'), nullable=False)
    course_id = db.Column(db.Integer, db.ForeignKey('course.id'), nullable=False)
    teacher_id = db.Column(db.Integer, db.ForeignKey('teacher.id'), nullable=False)
    classroom_id = db.Column(db.Integer, db.ForeignKey('classroom.id'), nullable=False)

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    role = db.Column(db.String(20), nullable=False, default='student')
    dept_id = db.Column(db.Integer, db.ForeignKey('department.id'), nullable=True)
    teacher_id = db.Column(db.Integer, db.ForeignKey('teacher.id'), nullable=True)

    department = db.relationship('Department', backref='users', lazy=True)
    teacher_profile = db.relationship('Teacher', backref='user_account', uselist=False, lazy=True)

class LeaveRequest(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    teacher_id = db.Column(db.Integer, db.ForeignKey('teacher.id'), nullable=False)
    date = db.Column(db.Date, nullable=False)
    reason = db.Column(db.String(200), nullable=True)
    status = db.Column(db.String(20), default='Pending') # Requires Admin Approval
    admin_response = db.Column(db.String(200), nullable=True) # Feedback from admin

    teacher = db.relationship('Teacher', backref='leave_requests')

class Substitution(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    leave_id = db.Column(db.Integer, db.ForeignKey('leave_request.id'), nullable=False)
    timetable_entry_id = db.Column(db.Integer, db.ForeignKey('timetable_entry.id'), nullable=False)
    substitute_teacher_id = db.Column(db.Integer, db.ForeignKey('teacher.id'), nullable=False)

    leave_request = db.relationship('LeaveRequest', backref='substitutions')
    original_entry = db.relationship('TimetableEntry', backref='substitutions')
    substitute_teacher = db.relationship('Teacher', backref='substitutions')

class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    recipient_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    sender_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True) # None = System
    subject = db.Column(db.String(150), nullable=False)
    body = db.Column(db.Text, nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)
    is_read = db.Column(db.Boolean, default=False)
    category = db.Column(db.String(50), default='System')

    recipient = db.relationship('User', foreign_keys=[recipient_id], backref='messages_received')
    sender = db.relationship('User', foreign_keys=[sender_id], backref='messages_sent')
