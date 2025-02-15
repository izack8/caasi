from fastapi import FastAPI, Request
from fastapi.responses import FileResponse, HTMLResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()

app.mount("/static", StaticFiles(directory="pages/static"), name="static")

# comment
@app.get("/", response_class=FileResponse)
async def read_root():
    return FileResponse("pages/home.html")

@app.get("/about", response_class=FileResponse)
async def read_about():
    return FileResponse("pages/about.html")

@app.get("/contact", response_class=FileResponse)
async def read_contact():
    return FileResponse("pages/contact.html")

@app.get("/web_journey", response_class=FileResponse)
async def read_contact():
    return FileResponse("pages/web_journey.html")