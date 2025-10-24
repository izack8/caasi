from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from src.controllers import post_controller, project_controller, experience_controller, auth_controller

app = FastAPI()

api_router = APIRouter(prefix="/api")

api_router.include_router(post_controller.router)
api_router.include_router(project_controller.router)
api_router.include_router(experience_controller.router)

@app.get("/health")
def app_health_check():
    return {"status": "healthy", "message": "API is running"}

@api_router.get("/health")
def api_health_check():
    return {"status": "healthy", "message": "API is running"}
app.include_router(api_router)
app.include_router(auth_controller.router)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://caasi.vercel.app", 
                   "https://www.izack.dev", 
                   "https://izack.dev", 
                   "http://localhost:5173",
                   "https://caasi-crud-ui.vercel.app",
                   "https://caasi-crud-ui.izack.dev"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# this is the main entry point for the FastAPI application, deployed on Railway. So we need to ensure that the CORS from vercel is allowed.