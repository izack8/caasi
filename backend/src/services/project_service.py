from ..mongo_db import db, serialize_document

def get_projects():
    projects = list(db['projects'].find({}, {"_id": 0}))
    return projects