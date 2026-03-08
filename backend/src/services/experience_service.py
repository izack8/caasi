from ..mongo_db import db, serialize_document

def get_experiences():
    """Fetch experiences from the database and serialize them."""
    experiences = db['experiences'].find().to_list(100)
    return [serialize_document(exp) for exp in experiences]

def get_experience_by_slug(slug):
    """Fetch a single experience by its slug."""
    experience = db['experiences'].find_one({'slug': slug})
    if experience:
        return serialize_document(experience)
    return None
