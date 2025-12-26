import random
from models import db, TimetableEntry, Course, Teacher, Classroom, Department
DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
TIMESLOTS = [
    '10:00-10:50', '10:50-11:40', '11:40-12:30', '12:30-01:20', 
    '02:00-02:50', '02:50-03:40', '03:40-04:30'
]

class Scheduler:
    def __init__(self):
        self.departments = Department.query.all()
        self.classrooms = Classroom.query.all()
        self.teachers = Teacher.query.all()
        self.requirements = self._fetch_requirements()
        
    def _fetch_requirements(self):
        reqs = []
        for dept in self.departments:
            for course in dept.courses:
                allocations = course.allocations
                if not allocations and course.type != 'Activity Class':
                    continue
                
                teacher_id = None
                if allocations:
                    alloc = allocations[0]
                    teacher_id = alloc.teacher_id
                
                if course.type == 'Practical':
                    num_sessions = course.hours_per_week
                    for _ in range(num_sessions):
                        reqs.append({
                            'dept_id': dept.id,
                            'course_id': course.id,
                            'teacher_id': teacher_id,
                            'course_type': course.type,
                            'duration': 3
                        })
                elif course.type == 'Activity Class':
                    for _ in range(course.hours_per_week):
                        reqs.append({
                            'dept_id': dept.id,
                            'course_id': course.id,
                            'teacher_id': teacher_id,
                            'course_type': 'Activity Class',
                            'duration': 1
                        })
                else:
                    for _ in range(course.hours_per_week):
                        reqs.append({
                            'dept_id': dept.id,
                            'course_id': course.id,
                            'teacher_id': teacher_id,
                            'course_type': course.type,
                            'duration': 1
                        })
        return reqs

    def generate_timetable(self):
        if not self.requirements:
            print("No requirements found to schedule (check allocations).")
            return False
            
        schedule = []
        main_reqs = [r for r in self.requirements if r['course_type'] != 'Activity Class']
        activity_reqs = [r for r in self.requirements if r['course_type'] == 'Activity Class']
        main_reqs.sort(key=lambda x: x['duration'], reverse=True)

        teacher_busy = set()
        room_busy = set()
        dept_sessions = {}
        dept_day_has_lab_block = set()
        dept_course_day_count = {}

        LAB_START_INDICES = [1, 4]
        for req in main_reqs:
            assigned = False
            duration = req['duration']
            is_practical = req['course_type'] == 'Practical'
            
            domain = []
            if is_practical:
                lab_slots = []
                for day in DAYS:
                    for idx in LAB_START_INDICES:
                        lab_slots.append((day, idx))
                random.shuffle(lab_slots)
                domain = lab_slots
            else:
                p1_p6 = []
                for day in DAYS:
                    for idx in range(len(TIMESLOTS)-1):
                        p1_p6.append((day, idx))
                random.shuffle(p1_p6)
                
                p7_slots = [(day, len(TIMESLOTS)-1) for day in DAYS]
                random.shuffle(p7_slots)
                
                domain = p1_p6 + p7_slots
            
            for day, start_idx in domain:
                if is_practical and (day, req['dept_id']) in dept_day_has_lab_block:
                    existing_lab_start = None
                    for entry in schedule:
                        if entry.day == day and entry.dept_id == req['dept_id']:
                            idx = TIMESLOTS.index(entry.timeslot)
                            if idx in LAB_START_INDICES:
                                existing_lab_start = idx
                                break
                    
                    if existing_lab_start is not None and existing_lab_start != start_idx:
                        continue
                if not is_practical:
                    current_day_count = dept_course_day_count.get((day, req['dept_id'], req['course_id']), 0)
                    if current_day_count >= 2:
                        continue

                slots_indices = range(start_idx, start_idx + duration)
                if max(slots_indices) >= len(TIMESLOTS): continue
                
                conflict = False
                for idx in slots_indices:
                    time = TIMESLOTS[idx]
                    key = (day, time, req['dept_id'])
                    if (day, time, req['teacher_id']) in teacher_busy:
                        conflict = True; break
                    current_count = dept_sessions.get(key, 0)
                    if is_practical:
                        if current_count >= 2: conflict = True; break
                    else:
                        if current_count >= 1: conflict = True; break

                if conflict: continue

                best_room = None
                candidates = [r for r in self.classrooms 
                               if (is_practical and r.type == 'Lab') or 
                                  (not is_practical and r.type != 'Lab')]
                random.shuffle(candidates)

                for room in candidates:
                    room_conflict = False
                    for idx in slots_indices:
                        if (day, TIMESLOTS[idx], room.id) in room_busy:
                            room_conflict = True; break
                    if not room_conflict:
                        best_room = room; break
                
                if best_room:
                    for idx in slots_indices:
                        time = TIMESLOTS[idx]
                        entry = TimetableEntry(day=day, timeslot=time, dept_id=req['dept_id'],
                                             course_id=req['course_id'], teacher_id=req['teacher_id'],
                                             classroom_id=best_room.id)
                        schedule.append(entry)
                        teacher_busy.add((day, time, req['teacher_id']))
                        room_busy.add((day, time, best_room.id))
                        key = (day, time, req['dept_id'])
                        dept_sessions[key] = dept_sessions.get(key, 0) + 1
                        skey = (day, req['dept_id'], req['course_id'])
                        dept_course_day_count[skey] = dept_course_day_count.get(skey, 0) + 1
                    
                    if is_practical:
                        dept_day_has_lab_block.add((day, req['dept_id']))
                    assigned = True
                    break
            
            if not assigned:
                print(f"Failed to assign {req['course_type']} requirement for Course ID {req['course_id']}")
                return False 
        for req in activity_reqs:
            assigned = False
            days_shuffled = list(DAYS)
            random.shuffle(days_shuffled)
            
            p6_index = 5
            p7_index = 6
            p6_time = TIMESLOTS[p6_index]
            p7_time = TIMESLOTS[p7_index]
            
            for day in days_shuffled:
                p6_teacher_id = None
                for entry in schedule:
                    if entry.day == day and entry.timeslot == p6_time and entry.dept_id == req['dept_id']:
                        p6_teacher_id = entry.teacher_id
                        break
                
                target_teacher_id = p6_teacher_id
                if not target_teacher_id:
                    dept_teachers = [t for t in self.teachers if t.dept_id == req['dept_id']]
                    random.shuffle(dept_teachers)
                    for t in dept_teachers:
                        if (day, p7_time, t.id) not in teacher_busy:
                            target_teacher_id = t.id
                            break
                
                if not target_teacher_id:
                    continue 
                
                if (day, p7_time, target_teacher_id) in teacher_busy:
                    continue
                if dept_sessions.get((day, p7_time, req['dept_id']), 0) >= 1:
                    continue
                
                best_room = None
                candidates = [r for r in self.classrooms if r.type != 'Lab']
                random.shuffle(candidates)
                for room in candidates:
                    if (day, p7_time, room.id) not in room_busy:
                        best_room = room; break
                
                if best_room:
                    entry = TimetableEntry(day=day, timeslot=p7_time, dept_id=req['dept_id'],
                                         course_id=req['course_id'], teacher_id=target_teacher_id,
                                         classroom_id=best_room.id)
                    schedule.append(entry)
                    teacher_busy.add((day, p7_time, target_teacher_id))
                    room_busy.add((day, p7_time, best_room.id))
                    dept_sessions[(day, p7_time, req['dept_id'])] = 1
                    assigned = True
                    break
            
            if not assigned:
                print(f"FAILED: Could not assign Activity {req['course_id']} - no suitable P6 class found or constraints too tight.")
                return False

        try:
            TimetableEntry.query.delete()
            for entry in schedule:
                db.session.add(entry)
            db.session.commit()
            return True
        except Exception as e:
            print(f"Save error: {e}")
            db.session.rollback()
            return False
