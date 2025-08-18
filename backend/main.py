from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import vertexai
from vertexai.generative_models import GenerativeModel
import os

# Initialize Vertex AI
vertexai.init(project=os.getenv("GCP_PROJECT"), location="us-central1")
model = GenerativeModel("gemini-1.5-flash")

app = FastAPI()

# Allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Or restrict to your Firebase Hosting domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str

@app.post("/chat")
async def chat_with_gemini(request: ChatRequest):
    system_prompt = """
    You are Thiru's personal portfolio assistant.
    Only answer questions about Thiru's background, skills, and projects.
    Decline anything unrelated.
    """
    chat = model.start_chat(history=[{"role": "user", "parts": [system_prompt]}])
    response = chat.send_message(request.message)
    return {"reply": response.text}
