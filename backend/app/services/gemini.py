import os
from dotenv import load_dotenv
from google import genai
from google.genai import types

script_dir = os.path.dirname(os.path.abspath(__file__))
load_dotenv(override=True)  # Load .env variables

PROJECT_ID = os.environ.get("GCP_PROJECT_ID")
LOCATION = os.environ.get("GCP_LOCATION", "us-central1")

def load_system_prompt(file_path: str = script_dir + "/../system_prompt.txt") -> str:
    if os.path.exists(file_path):
        with open(file_path, "r", encoding="utf-8") as f:
            return f.read().strip()
    else:
        raise FileNotFoundError(f"System prompt file not found: {file_path}")


def ask_gemini(prompt: str) -> str:
    if not PROJECT_ID:
        return "GCP is not configured. Please set PROJECT_ID."
    try:
        client = genai.Client(
            vertexai=True,
            project=PROJECT_ID,
            location=LOCATION,
        )

        system_prompt = load_system_prompt()
        prompt = f"{system_prompt}\n\n{prompt}"
        
        content = types.Content(
            role="user",
            parts=[types.Part(text=prompt)]
        )

        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=[content]
        )

        if response and response.candidates:
            candidate = response.candidates[0]
            if candidate.content and candidate.content.parts:
                part = candidate.content.parts[0]
                if hasattr(part, "text") and part.text:
                    return part.text
                return "(Gemini returned a non-text response)"
            return "(Gemini returned empty content)"
        return "(No answer from Gemini)"
    except Exception as e:
        return f"Error contacting Gemini: {e}"

if __name__ == "__main__":
    test_prompt = "What is 2+2?"
    print("Prompt:", test_prompt)
    answer = ask_gemini(test_prompt)
    print("Gemini Answer:", answer)
