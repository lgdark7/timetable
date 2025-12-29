import webview
import sys
import threading
import time
from app import app

def run_app():
    # Disable debug mode for production/desktop use
    app.run(port=5000, threaded=True, debug=False)

if __name__ == '__main__':
    # Start Flask in a background thread
    t = threading.Thread(target=run_app)
    t.daemon = True
    t.start()

    # Give the server a moment to ensure it's accepting connections
    # (Though pywebview serves as the client, a small buffer helps)
    time.sleep(1)

    # Create the native window
    webview.create_window(
        'Timetable Manager', 
        'http://127.0.0.1:5000',
        width=1280,
        height=800,
        resizable=True,
        min_size=(800, 600)
    )
    
    # Start the GUI loop
    webview.start()
    
    # Ensure clean exit
    sys.exit()
