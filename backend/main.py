from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from src.controllers import post_controller, project_controller, experience_controller

app = FastAPI()

api_router = APIRouter(prefix="/api")
api_router.include_router(post_controller.router)
api_router.include_router(project_controller.router)
api_router.include_router(experience_controller.router)

@api_router.get("/health")
async def health_check():
    return {"status": "healthy", "message": "API is running"}

app.include_router(api_router)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://caasi.vercel.app", 
                   "https://www.izack.dev", 
                   "https://izack.dev", 
                   "http://localhost:5173"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# this is the main entry point for the FastAPI application, deployed on Railway. So we need to ensure that the CORS from vercel is allowed.