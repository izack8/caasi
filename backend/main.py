from fastapi import FastAPI, Request, HTTPException, Query
from fastapi.responses import FileResponse, PlainTextResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from starlette.exceptions import HTTPException as StarletteHTTPException
from starlette.status import HTTP_404_NOT_FOUND
from src.fetch_json import FetchJSON
import os

messages = []
archive = ""

class TelegramUpdate(BaseModel):
    update_id: int
    message: dict

fetch_json = FetchJSON()
app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, set your domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Health check for Azure
@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "message": "API is running"}

# API endpoints for React app
@app.get("/api/projects")
async def get_projects():
    return fetch_json.fetch_JSON("../data/projects.json")

@app.get("/api/entries")
async def get_entries():
    return fetch_json.fetch_JSON("../data/entries/entries.json")

# Serve React build files
frontend_dir = "../frontend/dist" 

if os.path.exists(frontend_dir):
    # Serve static assets (CSS, JS, images)
    app.mount("/static", StaticFiles(directory=f"{frontend_dir}/"), name="static")
    
    # Serve React app for all other routes
    @app.get("/{full_path:path}")
    async def serve_react_app(full_path: str):
        # Don't interfere with API routes
        if full_path.startswith("api/"):
            raise HTTPException(status_code=404, detail="API endpoint not found")
        
        # Serve specific files if they exist
        file_path = os.path.join(frontend_dir, full_path)
        if os.path.isfile(file_path):
            return FileResponse(file_path)
        
        # For client-side routing, always return index.html
        return FileResponse(os.path.join(frontend_dir, "index.html"))
else:
    print(f"Warning: Frontend directory {frontend_dir} not found")
