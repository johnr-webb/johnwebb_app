# schemas/posts.py

from datetime import datetime
from typing import Optional

from pydantic import BaseModel


class PostBase(BaseModel):
    content: str
    title: str


class PostCreate(PostBase):
    pass


class PostUpdate(BaseModel):
    content: Optional[str] = None
    title: Optional[str] = None
    published: Optional[bool] = None


class Post(PostBase):
    id: int
    published: bool
    created_at: datetime

    class Config:
        from_attributes = True
