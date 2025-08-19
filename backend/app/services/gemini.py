import os
from dotenv import load_dotenv
from google import genai
from google.genai import types

load_dotenv(override=True)  # Load .env variables

PROJECT_ID = os.environ.get("GCP_PROJECT_ID")
LOCATION = os.environ.get("GCP_LOCATION", "us-central1")

def ask_gemini(prompt: str) -> str:
    if not PROJECT_ID:
        return "GCP is not configured. Please set PROJECT_ID."
    try:
        client = genai.Client(
            vertexai=True,
            project=PROJECT_ID,
            location=LOCATION,
        )

        # Workaround: use direct Part(text=...) instead of Part.from_text()
        content = types.Content(
            role="user",
            parts=[types.Part(text=prompt)]
        )

        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=[content]
        )

        if response and response.candidates:
            return response.candidates[0].content.parts[0].text
        return "(No answer from Gemini)"
    except Exception as e:
        return f"Error contacting Gemini: {e}"

if __name__ == "__main__":
    test_prompt = "What is 2+2?"
    print("Prompt:", test_prompt)
    answer = ask_gemini(test_prompt)
    print("Gemini Answer:", answer)
