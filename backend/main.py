from fastapi import FastAPI, Request, HTTPException, Query
from fastapi.responses import FileResponse, PlainTextResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from starlette.exceptions import HTTPException as StarletteHTTPException
from starlette.status import HTTP_404_NOT_FOUND
from src.fetch_json import FetchJSON
import os

fetch_json = FetchJSON()
app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://isaachehe.azurewebsites.net","https://izack.dev", "http://localhost:5173"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "message": "API is running"}

# API endpoints for React app
@app.get("/api/projects")
async def get_projects():
    return fetch_json.fetch_JSON("../data/projects.json")

@app.get("/api/experiences")
async def get_experiences():
    return fetch_json.fetch_JSON("../data/experiences.json")

@app.get("/api/entries")
async def get_entries():
    return fetch_json.fetch_JSON("../data/entries/entries.json")

# Try different possible paths
possible_frontend_dirs = [
    "../frontend/dist",           # Local development
    "/home/site/wwwroot/frontend/dist",  # Azure App Service
    "./frontend/dist",            # If frontend is in same directory
    "frontend/dist",              # Relative to current directory
]

frontend_dir = None
for dir_path in possible_frontend_dirs:
    if os.path.exists(dir_path):
        frontend_dir = dir_path
        print(f"Found frontend directory at: {frontend_dir}")
        break

if frontend_dir:
    # Check what's actually in your dist folder
    print(f"Contents of {frontend_dir}: {os.listdir(frontend_dir)}")
    
    # Serve React app for all routes
    @app.get("/{full_path:path}")
    async def serve_react_app(full_path: str):
        # Don't interfere with API routes
        if full_path.startswith("api/"):
            raise HTTPException(status_code=404, detail="API endpoint not found")
        
        # Handle root path
        if not full_path or full_path == "":
            return FileResponse(os.path.join(frontend_dir, "index.html"))
        
        # Serve specific files if they exist
        file_path = os.path.join(frontend_dir, full_path)
        if os.path.isfile(file_path):
            return FileResponse(file_path)
        
        # For client-side routing, always return index.html
        return FileResponse(os.path.join(frontend_dir, "index.html"))
else:
    print("Warning: No frontend directory found!")
    print(f"Current working directory: {os.getcwd()}")
    print(f"Directory contents: {os.listdir('.')}")
    
    # Check if we're in the backend folder
    if os.path.exists(".."):
        print(f"Parent directory contents: {os.listdir('..')}")