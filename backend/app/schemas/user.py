# schemas/users.py

from typing import Optional
from datetime import datetime

from pydantic import BaseModel, EmailStr

class UserBase(BaseModel):
    username: str
    email: str

class UserCreate(UserBase):
    pass

class UserUpdate(BaseModel):
    username: Optional[str] = None
    email: Optional[EmailStr] = None

class User(UserBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True
