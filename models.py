from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin

db = SQLAlchemy()

class Department(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
    code = db.Column(db.String(10), unique=True, nullable=False)
    courses = db.relationship('Course', backref='department', lazy=True, cascade="all, delete-orphan")
    teachers = db.relationship('Teacher', backref='department', lazy=True, cascade="all, delete-orphan")
    timetable_entries = db.relationship('TimetableEntry', backref='department', lazy=True, cascade="all, delete-orphan")

class Course(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    code = db.Column(db.String(20), unique=True, nullable=False)
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
