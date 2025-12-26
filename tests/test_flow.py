import unittest
import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from app import app
from models import db, Department, Teacher, Course, Classroom, Allocation, TimetableEntry

class TestTimetableApp(unittest.TestCase):
    def setUp(self):
        app.config['TESTING'] = True
        app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
        self.client = app.test_client()
        
        with app.app_context():
            db.create_all()

    def tearDown(self):
        with app.app_context():
            db.session.remove()
            db.drop_all()

    def test_full_flow(self):
        resp = self.client.post('/departments', data={'name': 'Computer Science', 'code': 'CSE'}, follow_redirects=True)
        self.assertEqual(resp.status_code, 200)
        resp = self.client.post('/teachers', data={'name': 'Dr. smith', 'dept_id': 1}, follow_redirects=True)
        self.assertEqual(resp.status_code, 200)
        resp = self.client.post('/classrooms', data={'name': 'Room 101', 'capacity': 60, 'type': 'Classroom'}, follow_redirects=True)
        self.assertEqual(resp.status_code, 200)
        resp = self.client.post('/classrooms', data={'name': 'Lab 1', 'capacity': 30, 'type': 'Lab'}, follow_redirects=True)
        self.assertEqual(resp.status_code, 200)
        resp = self.client.post('/courses', data={
            'name': 'Python Theory', 'code': 'CS101', 'dept_id': 1, 'hours_per_week': 2, 'type': 'Theory'
        }, follow_redirects=True)
        self.assertEqual(resp.status_code, 200)
        resp = self.client.post('/courses', data={
            'name': 'Python Lab', 'code': 'CS101L', 'dept_id': 1, 'hours_per_week': 3, 'type': 'Practical'
        }, follow_redirects=True)
        self.assertEqual(resp.status_code, 200)
        resp = self.client.post('/allocations', data={'course_id': 1, 'teacher_id': 1}, follow_redirects=True)
        resp = self.client.post('/allocations', data={'course_id': 2, 'teacher_id': 1}, follow_redirects=True)
        self.assertEqual(resp.status_code, 200)
        resp = self.client.post('/generate', follow_redirects=True)
        self.assertEqual(resp.status_code, 200)
        self.assertIn(b'Timetable generated successfully', resp.data)
        with app.app_context():
            count = TimetableEntry.query.count()
            self.assertEqual(count, 5, f"Expected 5 entries, found {count}")

if __name__ == '__main__':
    unittest.main()
