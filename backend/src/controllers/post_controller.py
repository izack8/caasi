from fastapi import APIRouter
from ..services.post_service import get_posts, get_post_by_id

router = APIRouter(prefix="/posts", tags=["Post"])

@router.get("/")
def fetch_posts():
    return get_posts()

@router.get("/{post_id}")
def fetch_post(post_id: str):
    return get_post_by_id(post_id)
