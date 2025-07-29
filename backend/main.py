from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from src.fetch_json import FetchJSON
import os

fetch_json = FetchJSON()
app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://caasi.vercel.app", "https://www.izack.dev", 
                   "https://izack.dev", "http://localhost:5173"],  
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
    return fetch_json.fetch_JSON("data/projects.json")

@app.get("/api/experiences")
async def get_experiences():
    return fetch_json.fetch_JSON("data/experiences.json")

@app.get("/api/entries")
async def get_entries():
    return fetch_json.fetch_JSON("data/entries.json")