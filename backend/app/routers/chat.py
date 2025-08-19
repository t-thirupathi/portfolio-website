from fastapi import APIRouter
from pydantic import BaseModel
from ..services.gemini import ask_gemini
router = APIRouter(prefix="/chat", tags=["chat"])

class ChatRequest(BaseModel):
    question: str

class ChatResponse(BaseModel):
    answer: str

@router.post("/", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest):
    # Temporary stub (replace with Gemini call)
    answer = ask_gemini(request.question)
    return ChatResponse(answer=answer)
