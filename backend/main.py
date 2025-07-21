from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from models import Entry
from typing import List

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Serve static files
app.mount("/static", StaticFiles(directory="../static"), name="static")

# In-memory storage (replace with database later)
entries: List[Entry] = []

@app.get("/api/entries")
async def get_entries():
    return entries

@app.post("/api/entries")
async def create_entry(entry: Entry):
    entries.append(entry)
    return entry

@app.delete("/api/entries/{date}")
async def delete_entry(date: str):
    global entries
    entries = [e for e in entries if str(e.date) != date]
    return {"message": "Entry deleted"}
