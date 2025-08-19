# Frontend setup
npx create-next-app@latest frontend --ts
# EsLint yes, Tailwind no, src/ directory yes, app router yes, turbopack no, custom import alias no
cd frontend
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled axios

# Frontend coding
Files:
📂 frontend/src/components/NavBar.tsx
📂 frontend/src/components/ThemeRegistry.tsx
📂 frontend/src/app/layout.tsx
📂 frontend/src/app/page.tsx
📂 frontend/src/app/interview/page.tsx
📂 frontend/src/app/resume/page.tsx
npm install @mui/material-nextjs
npm run dev



# Backend setup
mkdir backend
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt


backend/
├── app/
│   ├── __init__.py
│   ├── main.py         # Entry point
│   ├── routers/
│   │   └── chat.py     # Chat endpoint
│   └── services/
│       └── gemini.py   # LLM calls (stub for now)
├── requirements.txt
└── Dockerfile

uvicorn app.main:app --reload --port 8000
curl -X POST http://localhost:8000/chat/ -H "Content-Type: application/json" -d '{"question":"Hello"}'


gcloud auth application-default login
