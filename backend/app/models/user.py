# models/users.py

from sqlalchemy import TIMESTAMP, Column, Integer, String, text

from app.database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True, nullable=False)
    username = Column(String, unique=True, nullable=False)
    email = Column(String, unique=True, nullable=False)
    created_at = Column(
        TIMESTAMP(timezone=True), server_default=text("now()"), nullable=False
    )

    def __repr__(self):
        return f"<User(id={self.id}, username='{self.username}')>"
