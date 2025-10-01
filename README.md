# Project Overview: John Webb App

This project is first and foremost a space for me to develop and learn!
This document provides a summary of the project structure, dependencies, and the purpose of each major folder in the repository.

---

## 📂 Project Structure

```
johnwebb_app/
├── backend/          # Backend application (FastAPI)
├── frontend/         # Frontend application (React + Vite)
├── infra/            # Infrastructure as Code (Pulumi for GCP)
├── README.md         # Main project documentation
├── requirements.txt  # Backend dependencies
└── .gitignore        # Git ignore rules
```

---

## 📁 Folder Details

### 1. **Backend**

- **Purpose**: Implements the backend API using FastAPI and SQLAlchemy for database interactions.
- **Key Files**:
  - `main.py`: Entry point for the FastAPI application.
  - `database.py`: Database configuration and session management.
  - `models.py`: SQLAlchemy models for database tables.
- **Dependencies**:
  - `fastapi`: High-performance Python web framework.
  - `sqlalchemy`: ORM for database interactions.
  - `asyncpg`: PostgreSQL driver for asynchronous operations.

### 2. **Frontend**

- **Purpose**: Implements the user interface using React and Vite for fast development and build processes.
- **Key Files**:
  - `src/`: Contains React components and styles.
  - `vite.config.js`: Configuration for Vite.
  - `package.json`: Defines frontend dependencies and scripts.
- **Dependencies**:
  - `react`: JavaScript library for building user interfaces.
  - `vite`: Modern frontend build tool.
  - `eslint`: Linting tool for maintaining code quality.

### 3. **Infrastructure**

- **Purpose**: Manages cloud infrastructure using Pulumi to provision resources on Google Cloud Platform (GCP).
- **Key Files**:
  - `__main__.py`: Pulumi program to define and deploy resources (e.g., GCP storage bucket).
  - `Pulumi.yaml`: Pulumi project configuration.
  - `requirements.txt`: Python dependencies for Pulumi.
- **Dependencies**:
  - `pulumi`: Infrastructure as Code framework.
  - `pulumi-gcp`: Pulumi provider for GCP.

---

## 📦 Dependencies

### Backend

- Python 3.7 or later
- FastAPI, SQLAlchemy, asyncpg

### Frontend

- Node.js 16 or later
- React, Vite, ESLint

### Infrastructure

- Pulumi CLI
- Google Cloud SDK (`gcloud`)

---

## 🌟 Purpose

This project is a full-stack web application designed to:

1. Provide a robust backend API for data management.
2. Deliver a modern, responsive frontend for user interaction.
3. Leverage cloud infrastructure for scalability and reliability.

Let me know if you need further details or modifications!

## 👨‍💻 About Me

**John Webb** - Cloud Security Engineer

- **Focus**: Cloud Threat Informed Defense
- **Background**: Computer Science & Economics, University of Michigan
- **Interests**: Technology, skiing, running, tennis, travel
- **Philosophy**: Finding simple solutions to complex problems

## 📞 Contact

- **Email**: [johnwebb354@gmail.com](mailto:johnwebb354@gmail.com)
- **GitHub**: [@johnr-webb](https://github.com/johnr-webb)
- **LinkedIn**: [John Webb](https://www.linkedin.com/in/john-webb-643346170/)

---
