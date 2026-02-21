from ..mongo_db import db

def get_projects(full: bool = False):
    if full:
        projects = list(db['projects'].find({}, {"_id": 0}))
    else:
        projects = list(db['projects'].find({}, {"_id": 0, "slug": 1, "title": 1, "description": 1, "date": 1, "url": 1, "technologies": 1}))
    return projects

def get_project_by_id(project_id):
    # we're using "slug", b/c i didnt define "id" / idw use ObjectId.
    # maybe we should fix.
    project = db['projects'].find_one({"slug": project_id}, {"_id": 0})
    return project