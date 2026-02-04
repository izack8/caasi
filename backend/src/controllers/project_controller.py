from fastapi import APIRouter
from ..services.project_service import get_project_by_id, get_projects

router = APIRouter(prefix="/projects", tags=["Projects"])

@router.get("")
def fetch_projects():
    return get_projects()

@router.get("/{project_id}")
def fetch_project_by_id(project_id: str):
    project = get_project_by_id(project_id)
    if project:
        return project
    return {"error": "Project not found"}
