# posts.py

import logging
from typing import List

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import select
from sqlalchemy.exc import IntegrityError
from sqlalchemy.ext.asyncio import AsyncSession

from app.database import get_db
from app.models.post import Post as PostDBModel
from app.schemas.post import Post, PostCreate, PostUpdate

logger = logging.getLogger(__name__)

router = APIRouter(
    prefix="/posts",
    tags=["posts"],
    responses={404: {"description": "Not found"}},
)


# Get all posts
@router.get("/", response_model=List[Post])
async def get_all_posts(db: AsyncSession = Depends(get_db)):
    logger.info("Fetching all posts")
    query = select(PostDBModel)
    result = await db.execute(query)
    posts = result.scalars().all()
    return posts


# Get post by id
@router.get("/{id}", response_model=Post, status_code=status.HTTP_200_OK)
async def get_one_post(post_id: int, db: AsyncSession = Depends(get_db)):
    logger.info(f"Fetching post with ID: {post_id}")
    query = select(PostDBModel).where(PostDBModel.id == post_id)
    result = await db.execute(query)
    post = result.scalar_one_or_none()

    if post is None:
        # TODO: Should parameterize the error message
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"The id: {id} you requested for does not exist",
        )
    return post


# Create post
@router.post("/", response_model=Post, status_code=status.HTTP_201_CREATED)
async def create_post(post: PostCreate, db: AsyncSession = Depends(get_db)):
    logger.info(f"-------Creating post: {post.title}")
    db_post = PostDBModel(title=post.title, content=post.content)
    try:
        db.add(db_post)
        await db.commit()
        await db.refresh(db_post)
        return db_post
    except Exception as e:
        await db.rollback()
        logger.debug(f"Error creating post: {e}")
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="An error occurred while creating the post",
        )


# Update post by id
@router.put("/{post_id}", response_model=Post, status_code=status.HTTP_200_OK)
async def update_post(
    post_id: int, post_updates: PostUpdate, db: AsyncSession = Depends(get_db)
):
    logger.info(f"Updating post with ID: {post_id}")
    query = select(PostDBModel).where(PostDBModel.id == post_id)
    result = await db.execute(query)
    db_post = result.scalar_one_or_none()
    if db_post is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"The id: {post_id} you requested for does not exist",
        )

    post_data = post_updates.model_dump(exclude_unset=True)
    for key, value in post_data.items():
        setattr(db_post, key, value)
    try:
        await db.commit()
        await db.refresh(db_post)
        return db_post
    except IntegrityError:
        await db.rollback()
        raise HTTPException(status_code=400, detail="Username or email already exists")


# Delete post by id
@router.delete("/{post_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_post(post_id: int, db: AsyncSession = Depends(get_db)):
    logger.info(f"Deleting post with ID: {post_id}")
    query = select(PostDBModel).where(PostDBModel.id == post_id)
    result = await db.execute(query)
    post_to_delete = result.scalar_one_or_none()

    if post_to_delete is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"The id: {post_id} you requested for does not exist",
        )

    await db.delete(post_to_delete)
    await db.commit()
    return None
