from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from ..services.post_service import get_posts, get_post_by_id, update_post, create_new_post as create_post_service, delete_post

router = APIRouter(prefix="/posts", tags=["Post"])

class Post(BaseModel):
    title: str = None
    content: str = None
    date: str = None
    description: str = None

@router.get("")
def fetch_posts():
    return get_posts()

@router.get("/{post_id}")
def fetch_post(post_id: str):
    post = get_post_by_id(post_id)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    
    md_path = f"data/posts_md/{post['md_file']}"
    try:
        with open(md_path, "r", encoding="utf-8") as f:
            post["md"] = f.read()
    except FileNotFoundError:
        post["md"] = "# Markdown file not found"
    return post

@router.post("")
def create_new_post(post: Post):
    print("Creating post:", post)
    
    result = create_post_service({
        "date": post.date,
        "title": post.title,
        "description": post.description,
        "content": post.content
    })
    
    if not result:
        raise HTTPException(status_code=500, detail="Failed to create post")
    
    return result 

@router.put("/{post_id}")
def update_post_endpoint(post_id: str, post_update: Post):
    print("Updating post:", post_id)
    # Get current post to check if it exists
    current_post = get_post_by_id(post_id)
    if not current_post:
        raise HTTPException(status_code=404, detail="Post not found")
    
    # Prepare update data (only include non-None fields)
    update_data = {}
    if post_update.title is not None:
        update_data["title"] = post_update.title
    if post_update.content is not None:
        update_data["content"] = post_update.content
    if post_update.date is not None:
        update_data["date"] = post_update.date
    if post_update.description is not None:
        update_data["description"] = post_update.description
    
    # Update the post
    success = update_post(post_id, update_data)
    if not success:
        raise HTTPException(status_code=500, detail="Failed to update post")
    
    # Return the updated post
    updated_post = get_post_by_id(post_id)
    if post_update.content is not None:
        updated_post["md"] = post_update.content
    
    return updated_post

@router.delete("/{post_id}")
def delete_post_endpoint(post_id: str):
    print("Deleting post:", post_id)
    success = delete_post(post_id)
    if not success:
        raise HTTPException(status_code=404, detail="Post not found or failed to delete")
    return {"detail": "Post deleted successfully"}