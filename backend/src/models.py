from sqlalchemy import Column, Integer, String, Text, DateTime, Boolean, create_engine, ForeignKey
from sqlalchemy.orm import relationship, sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime
import uuid

Base = declarative_base()

class Message(Base):
    __tablename__ = 'messages'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    email = Column(String(255), nullable=True)  
    message = Column(Text, nullable=False)  
    created_at = Column(DateTime, default=datetime.now().strftime("%Y-%m-%d %H:%M:%S"), nullable=False)
    updated_at = Column(DateTime, default=datetime.now().strftime("%Y-%m-%d %H:%M:%S"), onupdate=datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
    is_approved = Column(Boolean, default=True, nullable=False)  # Moderation
    ip_address = Column(String(45), nullable=True)  
    user_agent = Column(String(500), nullable=True)  
    
    def __repr__(self):
        return f"<Message(id={self.id}, name='{self.name}', created_at='{self.created_at}')>"
    
class Post(Base):
    __tablename__ = 'posts'

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(200), nullable=False)
    content = Column(Text, nullable=False)  # Markdown content
    created_at = Column(DateTime, default=datetime.now().strftime("%Y-%m-%d %H:%M:%S"), nullable=False)
    updated_at = Column(DateTime, default=datetime.now().strftime("%Y-%m-%d %H:%M:%S"), onupdate=datetime.now().strftime("%Y-%m-%d %H:%M:%S"))

    def __repr__(self):
        return f"<Post(id={self.id}, title='{self.title}', created_at='{self.created_at}')>"
    
