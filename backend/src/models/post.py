from pydantic import BaseModel, Field

class Post(BaseModel):
    id: str = Field(..., example="1")
    date: str = Field(..., example="2023-01-01")
    title: str = Field(..., example="My Post Title")
    description: str = Field(..., example="This is a description of my post.")
    md_file: str = Field(..., example="my_post.md")