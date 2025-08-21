import axios from "axios";

const api = axios.create({
  baseURL: "/api", // always relative, works locally + prod
});

type ChatResponse = {
  answer: string;
};

export async function askInterviewBot(question: string): Promise<string> {
  try {
    const res = await api.post<ChatResponse>("/chat", { question });
    return res.data.answer;
  } catch (err) {
    console.error("API error:", err);
    return "Sorry, something went wrong while contacting the interview bot.";
  }
}
