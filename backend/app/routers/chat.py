import os, sys
from fastapi import APIRouter
from pydantic import BaseModel
sys.path.append(os.path.dirname(os.path.dirname(os.path.dirname(__file__))))
from app.services.gemini import ask_gemini
from app.services.openai_service import ask_openai

router = APIRouter(prefix="/chat", tags=["chat"])

class ChatRequest(BaseModel):
    question: str

class ChatResponse(BaseModel):
    answer: str

@router.post("/", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest):
    # answer = ask_gemini(request.question)
    answer = ask_openai(request.question)
    return ChatResponse(answer=answer)
