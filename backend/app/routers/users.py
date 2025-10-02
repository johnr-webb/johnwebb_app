# # users.py

# import logging
# from typing import List

# from fastapi import APIRouter, Depends, HTTPException, status
# from sqlalchemy import select
# from sqlalchemy.exc import IntegrityError
# from sqlalchemy.ext.asyncio import AsyncSession

# from app.database import get_db
# from app.models.user import User as UserDBModel
# from app.schemas.user import User, UserCreate, UserUpdate

# logger = logging.getLogger(__name__)

# router = APIRouter(
#     prefix="/users",
#     tags=["users"],
#     responses={404: {"description": "Not found"}},
# )


# # Get all users
# @router.get("/", response_model=List[User])
# async def get_all_users(db: AsyncSession = Depends(get_db)):
#     logger.info("Fetching all users")
#     query = select(UserDBModel)
#     result = await db.execute(query)
#     users = result.scalars().all()
#     return users


# # Get user by id
# @router.get("/{user_id}", response_model=User)
# async def get_user(user_id: int, db: AsyncSession = Depends(get_db)):
#     logger.info(f"Fetching user with ID: {user_id}")
#     query = select(UserDBModel).where(UserDBModel.id == user_id)
#     result = await db.execute(query)
#     user = result.scalar_one_or_none()

#     if not user:
#         raise HTTPException(status_code=404, detail="User not found")
#     return user


# # Create user
# @router.post("/", response_model=User, status_code=status.HTTP_201_CREATED)
# async def create_user(user: UserCreate, db: AsyncSession = Depends(get_db)):
#     logger.info(f"Creating user: {user.username}")
#     db_user = UserDBModel(username=user.username, email=user.email)
#     try:
#         db.add(db_user)
#         await db.commit()
#         await db.refresh(db_user)
#         return db_user
#     except IntegrityError:
#         await db.rollback()
#         raise HTTPException(
#             status_code=400, detail="Username or email already registered"
#         )


# # Update user
# @router.put("/{user_id}", response_model=User)
# async def update_user(
#     user_id: int, user_updates: UserUpdate, db: AsyncSession = Depends(get_db)
# ):
#     logger.info(f"Updating user with ID: {user_id}")
#     query = select(UserDBModel).where(UserDBModel.id == user_id)
#     result = await db.execute(query)
#     db_user = result.scalar_one_or_none()

#     if db_user is None:
#         raise HTTPException(status_code=404, detail="User not found")

#     user_data = user_updates.model_dump(exclude_unset=True)
#     for key, value in user_data.items():
#         setattr(db_user, key, value)

#     try:
#         await db.commit()
#         await db.refresh(db_user)
#         return db_user
#     except IntegrityError:
#         await db.rollback()
#         raise HTTPException(status_code=400, detail="Username or email already exists")


# # Delete user by id
# @router.delete("/{user_id}", status_code=status.HTTP_204_NO_CONTENT)
# async def delete_user(user_id: int, db: AsyncSession = Depends(get_db)):
#     logger.info(f"Deleting user with ID: {user_id}")
#     query = select(UserDBModel).where(UserDBModel.id == user_id)
#     result = await db.execute(query)
#     user = result.scalar_one_or_none()

#     if user is None:
#         raise HTTPException(status_code=404, detail="User not found")

#     await db.delete(user)
#     await db.commit()
#     return None
