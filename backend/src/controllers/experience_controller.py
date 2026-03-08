from fastapi import APIRouter, HTTPException
from ..services.experience_service import get_experience_by_slug, get_experiences

router = APIRouter(prefix="/experiences", tags=["Experiences"])

@router.get("")
def fetch_experiences():
    return get_experiences()

@router.get("/{experience_slug}")
def fetch_experience_by_slug(experience_slug: str):
    experience = get_experience_by_slug(experience_slug)
    if not experience:
        raise HTTPException(status_code=404, detail="Experience not found")
    return experience
    
