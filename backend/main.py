from datetime import datetime
import os

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from src.fetch_json import FetchJSON
from sqlalchemy.orm import Session
from src.database import get_db
from src.models import  Post
from src.schemas import PostCreate, PostResponse


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

@app.get("/api/posts")
async def get_posts():
    return fetch_json.fetch_JSON("data/posts.json")

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

@app.get("/api/posts")
async def get_post():
    return fetch_json.fetch_JSON("data/posts.json")

@app.get("/api/posts/{id}")
async def get_post(id: str):
    posts = fetch_json.fetch_JSON("data/posts.json") # list
    post = posts.get(id)
    md_path = os.path.join("data/posts_md", post["md_file"])
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    try:
        with open(md_path, "r", encoding="utf-8") as f:
            post["md"] = f.read()
    except FileNotFoundError:
        post["md"] = "# Markdown file not found"
    return post


# this is the main entry point for the FastAPI application, deployed on Railway. So we need to ensure that the CORS from vercel is allowed.