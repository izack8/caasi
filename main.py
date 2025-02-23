from fastapi import FastAPI, Request, HTTPException
from fastapi.responses import FileResponse, HTMLResponse, JSONResponse, PlainTextResponse
from pydantic import BaseModel
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from src.fetch_json import FetchJSON

messages = []

class TelegramUpdate(BaseModel):
    update_id: int
    message: dict

fetch_json = FetchJSON()
app = FastAPI()
templates = Jinja2Templates(directory="templates")
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/", response_class=FileResponse)
async def read_root():
    return FileResponse("pages/home.html")

@app.get("/about", response_class=FileResponse)
async def read_about():
    return FileResponse("pages/about.html")

@app.get("/contact", response_class=FileResponse)
async def read_contact():
    return FileResponse("pages/contact.html")

@app.get("/web_journey", response_class=HTMLResponse)
async def read_contact(request: Request):
    entries = fetch_json.fetch_JSON("data/entries/entries.json")

    return templates.TemplateResponse("web_journey.html", {"request": request, "entries": entries})

# trying out HTML templating
@app.get("/projects", response_class=HTMLResponse)
async def read_projects(request: Request):

    projects = fetch_json.fetch_JSON("data/projects.json")
    
    return templates.TemplateResponse("projects.html", {"request": request, "projects": projects})


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
    
    # Optionally: Notify WebSocket clients immediately (see below)
    # You can implement a mechanism to broadcast new messages
    return "OK"



# @app.get("/testing", response_class=HTMLResponse)
# async def read_testing(request: Request):
#     return projects_json.fetch_JSON()