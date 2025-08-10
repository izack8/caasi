from ..mongo_db import db, serialize_document

def get_posts():
    posts = db['posts'].find().to_list(100)
    return [serialize_document(post) for post in posts]