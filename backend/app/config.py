from pathlib import Path

from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    database_url: str = ""
    debug: bool = False

    class Config:
        env_file = Path(__file__).parent / ".env"


settings = Settings()
print(f"Loaded settings: {settings}")
