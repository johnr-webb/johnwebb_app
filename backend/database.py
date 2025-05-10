# database.py

from sqlalchemy import create_engine, MetaData
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Database URL (update with your PostgreSQL credentials)
DATABASE_URL = "postgresql+asyncpg://user:password@localhost/dbname"  # Replace with your PostgreSQL credentials

# Create the database engine
engine = create_engine(DATABASE_URL, echo=True)

# Create a session factory
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base class for models
Base = declarative_base(metadata=MetaData())

# # Dependency to get a database session
# def get_db():
#     db = SessionLocal()
#     try:
#         yield db
#     finally:
#         db.close()
