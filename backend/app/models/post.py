# # models/posts.py

# from sqlalchemy import TIMESTAMP, Boolean, Column, Integer, String, text

# from app.database import Base


# class Post(Base):
#     __tablename__ = "posts"

#     id = Column(Integer, primary_key=True, index=True, nullable=False)
#     title = Column(String, nullable=False)
#     content = Column(String, nullable=False)
#     published = Column(Boolean, server_default="TRUE", nullable=False)
#     created_at = Column(
#         TIMESTAMP(timezone=True), server_default=text("now()"), nullable=False
#     )

#     def __repr__(self):
#         return f"<Post(id={self.id}, title='{self.title}')>"
