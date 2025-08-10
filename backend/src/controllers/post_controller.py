from fastapi import APIRouter
from ..services.post_service import get_posts

router = APIRouter(prefix="/posts", tags=["Post"])

@router.get("/")
def fetch_posts():
    return get_posts()