import base64
import os

def to_b64(path):
    if not os.path.exists(path):
        return ""
    with open(path, "rb") as f:
        return base64.b64encode(f.read()).decode("utf-8")

images = {
    "COVER": to_b64(r"C:\Users\DARK\.gemini\antigravity\brain\faad9f61-e591-4766-887f-2b7fc8cbc026\premium_cover_page_1774084743489.png"),
    "LOGIN": to_b64(r"C:\Users\DARK\.gemini\antigravity\brain\faad9f61-e591-4766-887f-2b7fc8cbc026\real_login_1774084878313.png"),
    "DASHBOARD": to_b64(r"C:\Users\DARK\.gemini\antigravity\brain\faad9f61-e591-4766-887f-2b7fc8cbc026\real_dashboard_1774084902969.png"),
    "TIMETABLE": to_b64(r"C:\Users\DARK\.gemini\antigravity\brain\faad9f61-e591-4766-887f-2b7fc8cbc026\real_timetable_1774084936693.png"),
    "UPLOAD": to_b64(r"C:\Users\DARK\.gemini\antigravity\brain\faad9f61-e591-4766-887f-2b7fc8cbc026\real_upload_1774084949681.png")
}

with open(r"C:\Users\DARK\Downloads\timetable-main\PREMIUM_DOCUMENTATION.md", "r", encoding="utf-8") as f:
    content = f.read()

# Simple Markdown to HTML conversion for Word compatibility
html_template = f"""
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body {{
            font-family: 'Consolas', 'Courier New', monospace;
            line-height: 1.2;
            white-space: pre-wrap;
            color: black;
            padding: 40px;
        }}
        img {{
            max-width: 100%;
            display: block;
            margin: 20px 0;
            border: 1px solid #ccc;
        }}
        h1, h2, h3, h4 {{
            font-family: Arial, sans-serif;
            margin-top: 30px;
        }}
        .page-break {{
            page-break-after: always;
        }}
    </style>
</head>
<body>
{content.replace('![Project Cover Page](C:/Users/DARK/.gemini/antigravity/brain/faad9f61-e591-4766-887f-2b7fc8cbc026/premium_cover_page_1774084743489.png)', f'<img src="data:image/png;base64,{images["COVER"]}">')
        .replace('![Real Login Page](C:/Users/DARK/.gemini/antigravity/brain/faad9f61-e591-4766-887f-2b7fc8cbc026/real_login_1774084878313.png)', f'<img src="data:image/png;base64,{images["LOGIN"]}">')
        .replace('![Real Dashboard](C:/Users/DARK/.gemini/antigravity/brain/faad9f61-e591-4766-887f-2b7fc8cbc026/real_dashboard_1774084902969.png)', f'<img src="data:image/png;base64,{images["DASHBOARD"]}">')
        .replace('![Real Timetable](C:/Users/DARK/.gemini/antigravity/brain/faad9f61-e591-4766-887f-2b7fc8cbc026/real_timetable_1774084936693.png)', f'<img src="data:image/png;base64,{images["TIMETABLE"]}">')
        .replace('![Real Timetable View](C:/Users/DARK/.gemini/antigravity/brain/faad9f61-e591-4766-887f-2b7fc8cbc026/real_timetable_1774084936693.png)', f'<img src="data:image/png;base64,{images["TIMETABLE"]}">')
        .replace('![Real Timetable Grid](C:/Users/DARK/.gemini/antigravity/brain/faad9f61-e591-4766-887f-2b7fc8cbc026/real_timetable_1774084936693.png)', f'<img src="data:image/png;base64,{images["TIMETABLE"]}">')
        .replace('![Real Dashboard Statistics](C:/Users/DARK/.gemini/antigravity/brain/faad9f61-e591-4766-887f-2b7fc8cbc026/real_dashboard_1774084902969.png)', f'<img src="data:image/png;base64,{images["DASHBOARD"]}">')
        .replace('![Real CSV Upload](C:/Users/DARK/.gemini/antigravity/brain/faad9f61-e591-4766-887f-2b7fc8cbc026/real_upload_1774084949681.png)', f'<img src="data:image/png;base64,{images["UPLOAD"]}">')
}
</body>
</html>
"""

with open(r"C:\Users\DARK\Downloads\timetable-main\PREMIUM_DOCUMENTATION.html", "w", encoding="utf-8") as f:
    f.write(html_template)

print("Done generating PREMIUM_DOCUMENTATION.html")
