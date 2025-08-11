import os 
from dotenv import load_dotenv
from pymongo import MongoClient
from src.config import MONGODB_URI


load_dotenv()

client = MongoClient(MONGODB_URI)
client.server_info() 
db = client.get_database("website_data")

def serialize_document(document):
    """Convert MongoDB document to JSON-serializable format."""
    if "_id" in document:
        document["_id"] = str(document["_id"])
    return document