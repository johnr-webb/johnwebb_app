# Build
FROM python:3.11-slim AS builder

WORKDIR /app

# Install System Dependencies (Needed for many Python packages like database drivers)
# Install gcc and clean up the cache immediately to reduce build layer size
RUN apt-get update && apt-get install -y \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Production
FROM python:3.11-slim

WORKDIR /app

# Copy installed packages and application code from the builder stage
COPY --from=builder /usr/local/lib/python3.11/site-packages /usr/local/lib/python3.11/site-packages

# Copy the executables (like 'uvicorn', 'fastapi') to a PATH directory
COPY --from=builder /usr/local/bin/ /usr/local/bin/

# Copy application code
COPY ./app ./app

# Create a dedicated, unprivileged user 'app' and switch context.
RUN useradd --create-home --shell /bin/bash app && chown -R app:app /app
USER app

# Configure Environment Variables
ENV PORT=8080
ENV HOST=0.0.0.0
ENV PYTHONUNBUFFERED=1

# Expose Port
EXPOSE 8080

# Run the Application
CMD ["/bin/sh", "-c", "uvicorn app.main:app --host 0.0.0.0 --port ${PORT}"]