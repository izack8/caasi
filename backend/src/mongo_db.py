import os 
from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv()

client = MongoClient(os.getenv("MONGODB_URI", "mongodb://localhost:27017/"))
client.server_info() 
db = client.get_database("website_data")

def serialize_document(document):
    """Convert MongoDB document to JSON-serializable format."""
    if "_id" in document:
        document["_id"] = str(document["_id"])
    return document