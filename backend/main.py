from fastapi import FastAPI, Request, HTTPException, Query
from fastapi.responses import FileResponse, PlainTextResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from starlette.exceptions import HTTPException as StarletteHTTPException
from starlette.status import HTTP_404_NOT_FOUND
from src.fetch_json import FetchJSON

messages = []
archive = ""

class TelegramUpdate(BaseModel):
    update_id: int
    message: dict

fetch_json = FetchJSON()
app = FastAPI()

# Add CORS middleware - IMPORTANT for React to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, use your specific domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Catch-all route for React app (SPA routing)
@app.get("/app/{path:path}")
async def serve_react_app():
    return FileResponse("frontend/dist/index.html")

# API endpoints for React app
@app.get("/api/projects")
async def get_projects():
    return fetch_json.fetch_JSON("../data/projects.json")

@app.get("/api/entries")
async def get_entries():
    return fetch_json.fetch_JSON("/data/entries/entries.json")

# Your existing HTML routes (keep for fallback)
@app.get("/", response_class=FileResponse)
async def read_root():
    return FileResponse("pages/home.html")

@app.get("/contact", response_class=FileResponse)
async def read_contact(show_archives: bool = Query(False)):
    if show_archives:
        file_path = f"pages/contact_with_archives.html"
    else:
        file_path = f"pages/contact.html"
    return FileResponse(file_path)

# Webhook endpoint to receive Telegram messages
@app.post("/telegram-webhook", response_class=PlainTextResponse)
async def telegram_webhook(request: Request):
    update = await request.json()
    try:
        message_text = update["message"]["text"]
        sender = update["message"]["from"]["username"]
        
    except KeyError:
        raise HTTPException(status_code=400, detail="Invalid update format")
    
    # Save the incoming message
    messages.append({"from": sender, "text": message_text})
    print(messages)
    
    return "OK"