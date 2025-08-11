from ..mongo_db import db

def get_projects():
    projects = list(db['projects'].find({}, {"_id": 0}))
    return projects