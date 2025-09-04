# Development Guide

This guide covers setting up the development environment for the johnwebb_app.

## Prerequisites

- Node.js 18+ (for frontend)
- Python 3.11+ (for backend)
- PostgreSQL (for local database)
- Git

## Local Development Setup

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd johnwebb_app
```

### 2. Backend Setup

```bash
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Set up environment variables
cp .env.example .env
# Edit .env with your local database URL

# Run database migrations (if any)
# Add migration commands here when available

# Start the development server
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

### 4. Database Setup

For local development, you can use:

- Local PostgreSQL installation
- Docker PostgreSQL container
- Cloud SQL proxy (for connecting to GCP database)

#### Using Docker for PostgreSQL

```bash
docker run --name postgres-dev \
  -e POSTGRES_DB=johnwebb_app \
  -e POSTGRES_USER=app_user \
  -e POSTGRES_PASSWORD=password \
  -p 5432:5432 \
  -d postgres:15
```

## Development Workflow

1. **Feature Development**

   - Create a feature branch from `main`
   - Make your changes
   - Test locally
   - Create a pull request

2. **Testing**

   - Backend: Add tests in `backend/tests/` (when created)
   - Frontend: Run `npm run test` in the frontend directory

3. **Code Quality**
   - Backend: Use `black`, `flake8`, and `isort` for formatting
   - Frontend: Use `eslint` for linting

## Environment Variables

### Backend (.env)

```
DATABASE_URL=postgresql://app_user:password@localhost:5432/johnwebb_app
DEBUG=true
```

### Frontend (.env.local)

```
VITE_API_BASE_URL=http://localhost:8000
VITE_NODE_ENV=development
```

## Useful Commands

### Backend

```bash
# Run with auto-reload
uvicorn app.main:app --reload

# Run tests (when available)
pytest

# Format code
black app/
isort app/

# Lint code
flake8 app/
```

### Frontend

```bash
# Development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Troubleshooting

### Common Issues

1. **Database Connection Issues**

   - Check if PostgreSQL is running
   - Verify connection string in .env
   - Ensure database exists

2. **Frontend API Calls Failing**

   - Check if backend is running on port 8000
   - Verify CORS settings in backend
   - Check browser network tab for errors

3. **Port Conflicts**
   - Backend default: 8000
   - Frontend default: 5173 (Vite)
   - Change ports in respective config files if needed

## Contributing

1. Follow the existing code style
2. Write tests for new features
3. Update documentation as needed
4. Use meaningful commit messages
5. Create pull requests for all changes
