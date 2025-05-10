# main.py

from fastapi import FastAPI
from sqlalchemy import create_engine
from models import Base
from database import SessionLocal, engine

app = FastAPI()

@app.on_event("startup")
def startup():
    Base.metadata.create_all(bind=engine)

@app.get("/")
def read_root():
    return {"message": "Hello, World!"}
