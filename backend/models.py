from pydantic import BaseModel
from typing import List
from datetime import date

class Entry(BaseModel):
    date: date
    entries: List[str]
