import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv(override=True)  # Load environment variables from .env

OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")

def ask_openai(prompt: str) -> str:
    if not OPENAI_API_KEY:
        return "OpenAI is not configured. Please set OPENAI_API_KEY."
    try:
        client = OpenAI(api_key=OPENAI_API_KEY)

        response = client.chat.completions.create(
            model="gpt-4o-mini",   # you can switch to gpt-4o, gpt-4.1, gpt-3.5-turbo, etc.
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": prompt}
            ],
        )

        if response and response.choices:
            return response.choices[0].message.content
        return "(No answer from OpenAI)"
    except Exception as e:
        return f"Error contacting OpenAI: {e}"


if __name__ == "__main__":
    test_prompt = "What is 2+2?"
    print("Prompt:", test_prompt)
    answer = ask_openai(test_prompt)
    print("OpenAI Answer:", answer)
