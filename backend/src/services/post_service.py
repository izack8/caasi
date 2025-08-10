from ..mongo_db import db, serialize_document

def get_posts():
    posts = list(db['posts'].find({}, {"_id": 0}))
    return posts

def get_post_by_id(post_id):
    post = db['posts'].find_one({"id": post_id}, {"_id": 0})
    print(post)
    return post