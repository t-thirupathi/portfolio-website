import os
from dotenv import load_dotenv
from openai import OpenAI

script_dir = os.path.dirname(os.path.abspath(__file__))
load_dotenv(override=True)  # Load environment variables from .env

OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")

def load_system_prompt(file_path: str = script_dir + "/../system_prompt.txt") -> str:
    if os.path.exists(file_path):
        with open(file_path, "r", encoding="utf-8") as f:
            return f.read().strip()
    else:
        raise FileNotFoundError(f"System prompt file not found: {file_path}")


def ask_openai(prompt: str) -> str:
    if not OPENAI_API_KEY:
        return "OpenAI is not configured. Please set OPENAI_API_KEY."
    try:
        client = OpenAI(api_key=OPENAI_API_KEY)
        system_prompt = load_system_prompt()
        prompt = f"{system_prompt}\n\n{prompt}"

        response = client.chat.completions.create(
            model="gpt-4o-mini",   # you can switch to gpt-4o, gpt-4.1, gpt-3.5-turbo, etc.
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": prompt}
            ],
        )
        if response and response.choices:
            choices = response.choices[0]
            if choices.message and choices.message.content:
                content = choices.message.content
                return content.strip()
            else:
                return "(OpenAI returned a non-text response)"
        return "(No answer from OpenAI)"

    except Exception as e:
        return f"Error contacting OpenAI: {e}"


if __name__ == "__main__":
    test_prompt = "What is 2+2?"
    print("Prompt:", test_prompt)
    answer = ask_openai(test_prompt)
    print("OpenAI Answer:", answer)
