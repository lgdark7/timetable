from app import app, db
from sqlalchemy import text

def migrate():
    with app.app_context():
        try:
            # Check if column exists
            db.session.execute(text("SELECT semester FROM department LIMIT 1"))
            print("Column 'semester' already exists.")
        except Exception:
            print("Adding 'semester' column to 'department' table...")
            db.session.execute(text("ALTER TABLE department ADD COLUMN semester VARCHAR(20) DEFAULT 'Semester 1'"))
            db.session.commit()
            print("Success!")

if __name__ == "__main__":
    migrate()
