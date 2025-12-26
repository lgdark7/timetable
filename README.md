# Intelligent Timetable Management System

An advanced, AI-driven academic scheduling solution built with Flask and SQLAlchemy. This system automates the complex task of generating clash-free weekly timetables for college departments while respecting multiple real-world constraints.

## 🚀 Key Features

### 🧠 Intelligent Scheduler
- **Conflict Prevention**: Automatically detects and prevents conflicts across three dimensions: Teachers, Classrooms, and Department Batches.
- **Smart Lab Blocks**: Specifically handles 3-hour practical sessions with restricted start times (10:50 AM and 2:00 PM) to align with standard academic parities.
- **Activity Class Logic**: Automatically assigns "Activity" periods for the last hour of the day, intelligently selecting the teacher from the preceding session.
- **Parallel Sessions**: Supports concurrent lab sessions for different batches in the same department.

### 👥 Role-Based Access Control (RBAC)
- **Admin**: Full control over data entry, bulk CSV uploads, and automated timetable generation.
- **Teacher**: Personalized dashboard and the ability to manually adjust their own scheduled sessions.
- **Student**: Clean, read-only view of their specific department's weekly schedule.

### 🎨 Modern UI/UX
- **Interactive Background**: High-performance Particle Network background using HTML5 Canvas.
- **Glassmorphism Design**: Sleek, modern interface with soft blurs and glowing accents.
- **PDF Generation**: High-quality PDF exports for both the complete institution and individual departments.

### 📊 Data Management
- **Bulk Imports**: Support for CSV uploads for Departments, Teachers, Subjects, and Classrooms.
- **Multi-Dimensional**: Handles Branches, Semesters, and Sections seamlessly.

## 🛠️ Technical Stack
- **Backend**: Python 3.x, Flask
- **Database**: SQLite with SQLAlchemy ORM
- **Frontend**: Vanilla CSS (Premium Glassmorphism), JavaScript (Canvas Animation)
- **PDF Library**: html2pdf.js

## 📝 Prerequisites
- Python 3.10+
- Flask & Flask-SQLAlchemy
- Flask-Login

## 🏃 Getting Started
1. Clone the repository.
2. Install dependencies: `pip install -r requirements.txt`
3. Run the application: `python app.py`
4. Access the portal at `http://127.0.0.1:5000`
5. Default Admin Credentials: `admin / admin`

## ⚖️ License
This project is developed for academic purposes.
