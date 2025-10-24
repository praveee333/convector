import mysql.connector
from mysql.connector import Error
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# MySQL Database Configuration
DB_CONFIG = {
    'host': os.environ.get('DB_HOST', 'localhost'),
    'user': os.environ.get('DB_USER', 'root'),
    'password': os.environ.get('DB_PASSWORD', ''),
    'database': os.environ.get('DB_NAME', 'convector_auth'),
    'port': int(os.environ.get('DB_PORT', 3306))
}

def get_db_connection():
    """Create and return a database connection"""
    try:
        connection = mysql.connector.connect(**DB_CONFIG)
        return connection
    except Error as e:
        print(f"Error connecting to MySQL: {e}")
        return None

def add_starred_column():
    """Add starred column to notifications table"""
    connection = get_db_connection()
    if connection is None:
        print("Failed to connect to database")
        return False
    
    cursor = None
    try:
        cursor = connection.cursor()
        
        # Add starred column to notifications table
        cursor.execute("ALTER TABLE notifications ADD COLUMN starred BOOLEAN DEFAULT FALSE")
        connection.commit()
        print("Successfully added starred column to notifications table")
        return True
    except Error as e:
        if e.errno == 1060:  # Duplicate column name
            print("Starred column already exists in notifications table")
            return True
        else:
            print(f"Error adding starred column: {e}")
            return False
    finally:
        if cursor:
            cursor.close()
        if connection and connection.is_connected():
            connection.close()

if __name__ == "__main__":
    add_starred_column()