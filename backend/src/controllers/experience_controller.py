from fastapi import APIRouter
from ..services.experience_service import get_experiences

router = APIRouter(prefix="/experiences", tags=["Experience"])

@router.get("/")
def fetch_experiences():
    return get_experiences()
    
