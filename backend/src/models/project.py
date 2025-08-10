from pydantic import BaseModel, Field

class Project(BaseModel):
    id: str = Field(..., example="1")
    date: str = Field(..., example="2023-01-01")
    title: str = Field(..., example="My Project Title")
    description: str = Field(..., example="This is a description of my project.")
    www: object = Field(..., example={"url": "https://example.com", "text": "Visit Project"})
    what_i_learnt: list[str] = Field(..., example=["Python", "FastAPI", "MongoDB"])
    impact: list[str] = Field(..., example=["Improved performance", "Enhanced user experience"])
    image: str = Field(..., example="https://example.com/image.png")
    url: object = Field(..., example={"url": "https://example.com", "text": "Visit Project"})
    year: int = Field(..., example=2023)
    technologies: list[str] = Field(..., example=["Python", "FastAPI", "MongoDB"])