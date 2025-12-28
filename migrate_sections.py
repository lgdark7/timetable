from app import app, db
from sqlalchemy import text

def migrate():
    with app.app_context():
        try:
            db.session.execute(text("SELECT section FROM department LIMIT 1"))
            print("Column 'section' already exists.")
        except Exception:
            print("Adding 'section' column to 'department' table...")
            db.session.execute(text("ALTER TABLE department ADD COLUMN section VARCHAR(10) DEFAULT 'A'"))
            db.session.commit()
            print("Success!")

if __name__ == "__main__":
    migrate()
