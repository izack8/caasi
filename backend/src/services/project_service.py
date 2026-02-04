from ..mongo_db import db

def get_projects():
    projects = list(db['projects'].find({}, {"_id": 0}))
    return projects

def get_project_by_id(project_id):
    project = db['projects'].find_one({"id": project_id}, {"_id": 0})
    return project