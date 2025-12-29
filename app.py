from flask import Flask
from models import db, User
from routes import main
from flask_login import LoginManager

app = Flask(__name__)
app.config['SECRET_KEY'] = 'dev_key_for_project'

import sys
import os

if getattr(sys, 'frozen', False):
    
    data_dir = os.path.join(os.environ['APPDATA'], 'TimetableManager')
    if not os.path.exists(data_dir):
        os.makedirs(data_dir)
    db_path = os.path.join(data_dir, 'timetable.db')
    app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{db_path}'
else:
    # Running in development mode
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///timetable.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

login_manager = LoginManager()
login_manager.login_view = 'main.login'
login_manager.init_app(app)

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

@app.context_processor
def inject_unread_count():
    from flask_login import current_user
    from models import Message
    
    if current_user.is_authenticated:
        count = Message.query.filter_by(recipient_id=current_user.id, is_read=False).count()
        return dict(unread_count=count)
    return dict(unread_count=0)

@app.errorhandler(404)
def page_not_found(e):
    from flask import render_template
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_server_error(e):
    from flask import render_template
    return render_template('500.html'), 500

app.register_blueprint(main)

with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)
