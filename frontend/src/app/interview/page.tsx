"use client";

import { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { askInterviewBot } from "@/lib/api";

export default function InterviewPage() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);

  const handleSend = async () => {
    if (!question.trim()) return;

    // Show user question
    setMessages((prev) => [...prev, { role: "user", text: question }]);

    // Clear input
    const q = question;
    setQuestion("");

    // Call backend
    const answer = await askInterviewBot(q);
    setMessages((prev) => [...prev, { role: "bot", text: answer }]);
  };

  return (
    <Box sx={{ maxWidth: 700, margin: "0 auto" }}>
      <Typography variant="h4" gutterBottom>
        Interview Me
      </Typography>

      <Paper
        elevation={2}
        sx={{
          minHeight: 300,
          padding: 2,
          display: "flex",
          flexDirection: "column",
          gap: 1,
          marginBottom: 2,
        }}
      >
        {messages.map((m, i) => (
          <Box
            key={i}
            sx={{
              alignSelf: m.role === "user" ? "flex-end" : "flex-start",
              backgroundColor: m.role === "user" ? "primary.main" : "grey.300",
              color: m.role === "user" ? "white" : "black",
              borderRadius: 2,
              padding: "8px 12px",
              maxWidth: "75%",
            }}
          >
            {m.text}
          </Box>
        ))}
      </Paper>

      <Box sx={{ display: "flex", gap: 1 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Ask me anything..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
        />
        <Button variant="contained" onClick={handleSend}>
          Send
        </Button>
      </Box>
    </Box>
  );
}
