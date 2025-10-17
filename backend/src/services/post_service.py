from ..mongo_db import db
import os

def get_posts():
    posts = list(db['posts'].find({}, {"_id": 0}))
    return posts

def get_post_by_id(post_id):
    post = db['posts'].find_one({"id": post_id}, {"_id": 0})
    return post

def create_new_post(post_data):

    # 2025-08-02-how-to-use-fastapi-with-react
    post_id = post_data['date'] + "-" + post_data['title'].lower().replace(' ', '-')
    md_filename = f"{post_id}.md"
    
    # Prepare the complete post data
    complete_post_data = {
        "id": post_id,
        "date": post_data['date'],
         "title": post_data['title'],
        "description": post_data['description'],
        "md_file": md_filename,
        "type": "Personal",  # or whatever default type you want
    }
    
    try:
        result = db['posts'].insert_one(complete_post_data)
        
        md_path = f"data/posts_md/{md_filename}"
        os.makedirs("data/posts_md", exist_ok=True)
        with open(md_path, "w", encoding="utf-8") as f:
            f.write(post_data['content'])
        print(f"Created new post with ID: {post_id}")
        
        # Return the created post (without MongoDB's _id)
        return {
            "id": post_id,
            "title": post_data['title'],
            "date": post_data['date'],
            "description": post_data['description'],
            "content": post_data['content'],  # Include content in response
            "md_file": md_filename,
            "type": "personal"
        }
        
    except Exception as e:
        print(f"Error creating post: {e}")
        return None

def update_post(post_id, updated_data):
    try:
        content = updated_data.pop('content', None)
        
        # Update the database (without content field)
        if updated_data:
            result = db['posts'].update_one(
                {"id": post_id}, 
                {"$set": updated_data}
            )
        
        if content:
            post = get_post_by_id(post_id)
            if post and 'md_file' in post:
                md_path = f"data/posts_md/{post['md_file']}"
                try:
                    print("Writing to md file:", md_path)
                    with open(md_path, "w", encoding="utf-8") as f:
                        f.write(content)
                except Exception as e:
                    print(f"Error updating markdown file: {e}")
                    return False
        
        updated_post = get_post_by_id(post_id)
        if updated_post:
            if content:
                updated_post['content'] = content
            return updated_post
        else:
            return None
        
    except Exception as e:
        print(f"Error updating post: {e}")
        return None
    
def delete_post(post_id):
    try:
        post = get_post_by_id(post_id)
        if not post:
            print(f"Post with ID {post_id} not found for deletion.")
            return False
        
        result = db['posts'].delete_one({"id": post_id})
        
        if result.deleted_count == 1:
            if 'md_file' in post:
                md_path = f"data/posts_md/{post['md_file']}"
                try:
                    if os.path.exists(md_path):
                        os.remove(md_path)
                        print(f"Deleted markdown file: {md_path}")
                except Exception as e:
                    print(f"Error deleting markdown file: {e}")
            print(f"Deleted post with ID: {post_id}")
            return True
        else:
            print(f"No post deleted. Post with ID {post_id} may not exist.")
            return False
        
    except Exception as e:
        print(f"Error deleting post: {e}")
        return False