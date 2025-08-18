from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/chat", tags=["chat"])

class ChatRequest(BaseModel):
    question: str

class ChatResponse(BaseModel):
    answer: str

@router.post("/", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest):
    # Temporary stub (replace with Gemini call)
    answer = f"You asked: {request.question}. This is a placeholder response."
    return ChatResponse(answer=answer)
