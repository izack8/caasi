# database.py
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from src.models import Base

SQLALCHEMY_DATABASE_URL = "sqlite:///./guestbook.db"
# For production: "postgresql://user:password@localhost/guestbook"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    connect_args={"check_same_thread": False}  # Only for SQLite
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Create tables
Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()