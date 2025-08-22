# Portfolio Website with AI Interview Bot

This is my personal portfolio website  to showcase my projects, resume, and includes an **AI-powered interview bot** that answers questions about me. 
Live on [thiru.live](https://thiru.live/)

## Tech stack
- Python
- FastAPI
- Gemini
- OpenAI
- React
- Next.js
- GCP
- Firebase

# Features
- Project gallery
- Resume download
- AI interview bot (LLM-powered)
- Custom domain support (https://thiru.live)

# Deploy Backend (GCP)
cd backend/
gcloud builds submit --tag gcr.io/portfolio-website-468920/fastapi-backend
gcloud run deploy fastapi-backend \
  --image gcr.io/portfolio-website-468920/fastapi-backend \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated

# Deploy Frontend (Firebase)
cd frontend/
npm run build
firebase deploy
