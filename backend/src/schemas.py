from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional

class MessageCreate(BaseModel):
    name: str
    email: Optional[EmailStr] = None
    message: str
    location: Optional[str] = None

class MessageResponse(BaseModel):
    id: int
    name: str
    message: str
    location: Optional[str]
    created_at: datetime
    
    class Config:
        from_attributes = True

class MessageUpdate(BaseModel):
    is_visible: Optional[bool] = None
    message: Optional[str] = None
    

class PostCreate(BaseModel):
    title: str
    content: str

class PostResponse(BaseModel):
    id: int
    title: str
    content: str
    created_at: datetime
    updated_at: datetime
    
    class Config:
        from_attributes = True


# Pydantic models for SQLAlchemy models. We need this for serialization and validation! (e.g., when sending data to the frontend)