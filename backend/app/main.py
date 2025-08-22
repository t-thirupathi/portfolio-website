from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import chat

app = FastAPI(title="Thirupathi Thangavel Backend API")

# Allow frontend to talk to backend
origins = [
    "http://localhost:3000",   # Next.js dev
    "https://portfolio-website-firebase.web.app",  # Firebase Hosting
    "https://thiru.live",   
    "https://www.thiru.live",
    "https://thiru.online",   
    "https://www.thiru.online",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,       # Frontend URLs allowed
    allow_credentials=True,
    allow_methods=["*"],         # GET, POST, OPTIONS, etc.
    allow_headers=["*"],         # Authorization, Content-Type, etc.
)

# Routers
app.include_router(chat.router)

@app.get("/")
async def root():
    return {"message": "Backend is running"}
