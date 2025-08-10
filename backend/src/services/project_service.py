from ..mongo_db import db, serialize_document

def get_projects():
    projects = db['projects'].find().to_list(100)
    return [serialize_document(project) for project in projects]