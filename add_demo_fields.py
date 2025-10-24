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

def add_demo_fields():
    """Add demo account fields to users table"""
    connection = get_db_connection()
    if connection is None:
        print("Failed to connect to database")
        return False
    
    cursor = None
    try:
        cursor = connection.cursor()
        
        # Add is_demo column to users table
        try:
            cursor.execute("ALTER TABLE users ADD COLUMN is_demo BOOLEAN DEFAULT FALSE")
            print("Successfully added is_demo column to users table")
        except Error as e:
            if e.errno == 1060:  # Duplicate column name
                print("is_demo column already exists in users table")
            else:
                print(f"Error adding is_demo column: {e}")
        
        # Add demo_expiry_date column to users table
        try:
            cursor.execute("ALTER TABLE users ADD COLUMN demo_expiry_date TIMESTAMP NULL")
            print("Successfully added demo_expiry_date column to users table")
        except Error as e:
            if e.errno == 1060:  # Duplicate column name
                print("demo_expiry_date column already exists in users table")
            else:
                print(f"Error adding demo_expiry_date column: {e}")
        
        connection.commit()
        return True
    except Error as e:
        print(f"Error modifying users table: {e}")
        return False
    finally:
        if cursor:
            cursor.close()
        if connection and connection.is_connected():
            connection.close()

if __name__ == "__main__":
    add_demo_fields()