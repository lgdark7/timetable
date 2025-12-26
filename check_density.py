from app import app
from models import Department, Course
from scheduler import TIMESLOTS

with app.app_context():
    depts = Department.query.all()
    print("--- Allocation Totals per Department ---")
    print(f"Total possible slots per week: {6 * len(TIMESLOTS)} (6 days * {len(TIMESLOTS)} slots)")
    
    for dept in depts:
        total_hours = 0
        allocated_count = 0
        for course in dept.courses:
            if course.allocations:
                total_hours += course.hours_per_week
                allocated_count += 1
        
        print(f"Dept: {dept.code} ({dept.name})")
        print(f"  - Allocated Courses: {allocated_count}/{len(dept.courses)}")
        print(f"  - Total Hours Allocated: {total_hours}")
        if total_hours < 42:
            print(f"  - WARNING: Need {42 - total_hours} more hours to fill the week.")
        print("-" * 30)
