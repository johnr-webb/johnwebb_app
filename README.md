# Full Stack Web App – FastAPI + React + Pulumi (GCP)

This project is a full-stack web application using:

- **Frontend**: Vite + React  
- **Backend**: FastAPI (Python)  
- **Infrastructure**: Pulumi (with Python) targeting Google Cloud Platform  

---

## 🗂️ Project Structure

```
my-project/
├── backend/          # FastAPI backend API
├── frontend/         # React frontend (Vite-based)
├── infrastructure/   # Pulumi infrastructure as code
└── README.md         # You're here!
```

---

## 🚀 Quick Start

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Start the Backend (FastAPI)

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```

### 3. Start the Frontend (React + Vite)

```bash
cd frontend
npm install
npm run dev
```

### 4. (Optional) Deploy Infra with Pulumi

```bash
cd infrastructure
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
pulumi up
```

---

## 🌐 Local Development URLs

- Frontend: http://localhost:5173  
- Backend: http://localhost:8000  
- Example API route: http://localhost:8000/api/hello  

---

## 🛠️ Notes

- Use separate virtual environments for `backend/` and `infrastructure/`.  
- Vite uses a proxy to forward `/api` requests to the FastAPI server.  
- Update CORS and proxy settings as needed when deploying.  

---

## 📦 Stack Highlights

- **FastAPI** – High-performance Python API framework  
- **React + Vite** – Modern, fast frontend tooling  
- **Pulumi** – Infrastructure as code using Python (GCP)  

---

## 📄 License

MIT License
