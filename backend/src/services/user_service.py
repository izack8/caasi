from ..mongo_db import db
from datetime import datetime

def get_user_by_username(username: str):
    """Get user by username from database"""
    try:
        user = db['users'].find_one({"username": username}, {"_id": 0})
        return user
    except Exception as e:
        print(f"Error fetching user: {e}")
        return None

def create_user(user_data: dict):
    """Create a new user in database"""
    try:
        user_data["created_at"] = datetime.now().isoformat()
        result = db['users'].insert_one(user_data)
        return result.inserted_id is not None
    except Exception as e:
        print(f"Error creating user: {e}")
        return False

def update_user(username: str, update_data: dict):
    """Update user data"""
    try:
        update_data["updated_at"] = datetime.now().isoformat()
        result = db['users'].update_one(
            {"username": username},
            {"$set": update_data}
        )
        return result.modified_count > 0
    except Exception as e:
        print(f"Error updating user: {e}")
        return False