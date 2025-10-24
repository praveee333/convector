import requests
import json

# Test creating a demo account
url = "http://localhost:5008/admin/create-demo-account"

# Test data
data = {
    "username": "demo2@test.com",
    "password": "demo123",
    "days": 2
}

# Since we need to be logged in as admin, let's first login as admin
login_url = "http://localhost:5008/login"
login_data = {
    "email": "efaws@gmail.com",
    "password": "1234"
}

# Create a session to maintain cookies
session = requests.Session()

# Login as admin
print("Logging in as admin...")
login_response = session.post(login_url, data=login_data)
print(f"Login status: {login_response.status_code}")

# Create demo account
print("Creating demo account...")
response = session.post(url, json=data)
print(f"Response status: {response.status_code}")
print(f"Response content: {response.text}")

# Try to login as the demo user
print("Testing demo user login...")
demo_login_data = {
    "email": "demo2@test.com",
    "password": "demo123"
}

demo_login_response = session.post(login_url, data=demo_login_data)
print(f"Demo login status: {demo_login_response.status_code}")
print(f"Demo login redirect: {demo_login_response.url}")

# Now let's expire the demo account and test again
print("\nExpiring demo account...")
expire_script = """
import mysql.connector
from mysql.connector import Error
import os
from dotenv import load_dotenv
from datetime import datetime, timedelta

load_dotenv()

DB_CONFIG = {
    'host': os.environ.get('DB_HOST', 'localhost'),
    'user': os.environ.get('DB_USER', 'root'),
    'password': os.environ.get('DB_PASSWORD', ''),
    'database': os.environ.get('DB_NAME', 'convector_auth'),
    'port': int(os.environ.get('DB_PORT', 3306))
}

connection = mysql.connector.connect(**DB_CONFIG)
cursor = connection.cursor()
expired_date = datetime.now() - timedelta(days=1)
cursor.execute("UPDATE users SET demo_expiry_date = %s WHERE email = %s AND is_demo = TRUE", (expired_date, "demo2@test.com"))
connection.commit()
cursor.close()
connection.close()
print("Demo account expired")
"""

# Write and run the expire script
with open("temp_expire.py", "w") as f:
    f.write(expire_script)

import subprocess
result = subprocess.run(["python3", "temp_expire.py"], capture_output=True, text=True)
print(result.stdout)

# Try to login as the expired demo user
print("Testing expired demo user login...")
expired_demo_login_response = session.post(login_url, data=demo_login_data)
print(f"Expired demo login status: {expired_demo_login_response.status_code}")
print(f"Expired demo login redirect: {expired_demo_login_response.url}")
print(f"Expired demo login content: {expired_demo_login_response.text}")

# Clean up temp file
import os
os.remove("temp_expire.py")