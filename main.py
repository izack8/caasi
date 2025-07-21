from fastapi import FastAPI, Request, HTTPException, Query
from fastapi.responses import FileResponse, HTMLResponse, JSONResponse, PlainTextResponse
from fastapi.exceptions import RequestValidationError
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
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
templates = Jinja2Templates(directory="pages/jinja2_templates")
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/", response_class=FileResponse)
async def read_root():
    return FileResponse("pages/home.html")

# Custom 404 error handler
@app.exception_handler(StarletteHTTPException)
async def custom_404_handler(request: Request, exc: StarletteHTTPException):
    if exc.status_code == HTTP_404_NOT_FOUND:
        return templates.TemplateResponse("not_found.html", {"request": request}, status_code=404)
    return JSONResponse({"detail": exc.detail}, status_code=exc.status_code)

# @app.get("/about", response_class=FileResponse)
# async def read_about():
#     return FileResponse("pages/about.html")

@app.get("/contact", response_class=FileResponse)
async def read_contact(show_archives: bool = Query(False)):
    if show_archives:
        file_path = f"pages/contact_with_archives.html"
    else:
        file_path = f"pages/contact.html"
    return FileResponse(file_path)

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