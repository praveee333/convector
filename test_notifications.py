import requests
import json

# Test the notification updates
print("Testing notification functionality...")

notifications = []
# First, let's check the current notifications
response = requests.get('http://localhost:5007/admin/notifications')
if response.status_code == 200:
    data = response.json()
    if data.get('success'):
        notifications = data['notifications']
        print(f"Found {len(notifications)} notifications")
        for notification in notifications[:3]:  # Show first 3
            print(f"- {notification['title']}: {notification['message']} (Read: {notification['is_read']})")
    else:
        print(f"Error: {data.get('error')}")
else:
    print(f"HTTP Error: {response.status_code}")

print("\nTesting mark as read functionality...")
# Try to mark the first notification as read (if there are any)
if notifications:
    first_notification_id = notifications[0]['id']
    print(f"Marking notification {first_notification_id} as read...")
    response = requests.post(f'http://localhost:5007/admin/notifications/mark-as-read/{first_notification_id}')
    if response.status_code == 200:
        data = response.json()
        print(f"Result: {data}")
    else:
        print(f"HTTP Error: {response.status_code}")