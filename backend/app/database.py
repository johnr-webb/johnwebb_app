# database.py
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from app.config import settings
import logging

# Async Database URL
DATABASE_URL = settings.database_url

# Create the async database engine
engine = create_async_engine(DATABASE_URL, echo=True)

# Create an async session factory
AsyncSessionLocal = async_sessionmaker(
    bind=engine
)

# SQLAlchemy setup for ORM models
Base = declarative_base()

# Dependency to get DB session
async def get_db():
    async with AsyncSessionLocal() as session:
        try:
            yield session
        except Exception as e:
            logging.error(f"Error in DB session: {e}")
            raise
        finally:
            await session.close()
