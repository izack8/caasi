from pydantic import BaseModel, Field

class Experience(BaseModel):
    title: str = Field(..., example="Software Engineer at XYZ Corp")
    location: str = Field(..., example="San Francisco, CA")
    description: str = Field(..., example="Developed scalable web applications using Python and React.")
    company: str = Field(..., example="XYZ Corp")
    duration: str = Field(..., example="Jan 2020 - Present")
    technologies: list[str] = Field(..., example=["Python", "React", "Docker"])
    tags: list[str] = Field(..., example=["Web Development", "Software Engineering"])
    link: str = Field(..., example="https://xyzcorp.com")
