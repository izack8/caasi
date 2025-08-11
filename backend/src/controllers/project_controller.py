from fastapi import APIRouter
from ..services.project_service import get_projects

router = APIRouter(prefix="/projects", tags=["Project"])

@router.get("")
def fetch_projects():
    return get_projects()
