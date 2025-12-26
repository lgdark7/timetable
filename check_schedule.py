from app import app
from models import Department, Course, TimetableEntry

with app.app_context():
    depts = Department.query.all()
    print("--- Scheduled vs Allocated Hours ---")
    
    for dept in depts:
        allocated_hours = 0
        for course in dept.courses:
            if course.allocations:
                allocated_hours += course.hours_per_week
        scheduled_slots = TimetableEntry.query.filter_by(dept_id=dept.id).count()
        
        print(f"Dept: {dept.code}")
        print(f"  - Allocated Hours (Request): {allocated_hours}")
        print(f"  - Scheduled Slots (Actual): {scheduled_slots}")
        if scheduled_slots < allocated_hours:
            print(f"  - MISSING: {allocated_hours - scheduled_slots} hours were not scheduled!")
        print("-" * 30)
