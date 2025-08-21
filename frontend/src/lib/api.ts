import axios, { AxiosError } from "axios";

// Adjust this baseURL after deployment
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000",
});

type ChatResponse = { answer: string };

export async function askInterviewBot(question: string): Promise<string> {
  try {
    const res = await api.post<ChatResponse>("/chat", { question });
    return res.data.answer;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("API error:", err.response?.data || err.message);
    } else {
      console.error("Unexpected error:", err);
    }
    return "Sorry, something went wrong while contacting the interview bot.";
  }
}
