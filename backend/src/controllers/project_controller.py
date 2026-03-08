from fastapi import APIRouter, HTTPException
from ..services.project_service import get_project_by_slug, get_projects


router = APIRouter(prefix="/projects", tags=["Projects"])

@router.get("")
def fetch_projects():
    return get_projects()

@router.get("/{project_slug}")
def fetch_project_by_slug(project_slug: str):
    project = get_project_by_slug(project_slug)
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return project
