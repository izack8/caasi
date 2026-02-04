from fastapi import APIRouter, HTTPException
from ..services.project_service import get_project_by_id, get_projects


router = APIRouter(prefix="/projects", tags=["Projects"])

@router.get("")
def fetch_projects():
    return get_projects()

@router.get("/{project_id}")
def fetch_project_by_id(project_id: str):
    project = get_project_by_id(project_id)
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return project
