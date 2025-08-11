from fastapi import APIRouter
from ..services.post_service import get_posts, get_post_by_id

router = APIRouter(prefix="/posts", tags=["Post"])

@router.get("/")
def fetch_posts():
    return get_posts()

@router.get("/{post_id}")
def fetch_post(post_id: str):
    post = get_post_by_id(post_id)
    md_path = f"data/posts_md/{post['md_file']}"
    try:
        with open(md_path, "r", encoding="utf-8") as f:
            post["md"] = f.read()
    except FileNotFoundError:
        post["md"] = "# Markdown file not found"
    return post