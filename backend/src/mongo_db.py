import os 
from dotenv import load_dotenv
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from src.config import MONGODB_URI


load_dotenv()

client = MongoClient(MONGODB_URI, server_api=ServerApi('1'))
client.server_info() 
try:
    client.admin.command('ping')
    db = client.get_database("website_data")
    print("MongoDB connection successful")
except Exception as e:
    print(f"MongoDB connection failed: {e}")


def serialize_document(document):
    """Convert MongoDB document to JSON-serializable format."""
    if "_id" in document:
        document["_id"] = str(document["_id"])
    return document