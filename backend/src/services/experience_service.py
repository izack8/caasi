from ..mongo_db import db, serialize_document

def get_experiences():
    """Fetch experiences from the database and serialize them."""
    experiences = db['experiences'].find().to_list(100)
    return [serialize_document(exp) for exp in experiences]
