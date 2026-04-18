from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from openai import OpenAI
import os
from dotenv import load_dotenv

# --- LOAD ENV ---
load_dotenv()

# --- INIT APP ---
app = FastAPI()

# --- CORS ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- GROQ SETUP ---
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

client = OpenAI(
    api_key=GROQ_API_KEY,
    base_url="https://api.groq.com/openai/v1"
)

# --- MODELS ---
class Message(BaseModel):
    user_id: str
    text: str
    language: str = "en"
    context: dict | None = None

class WebMessage(BaseModel):
    message: Message

# --- CHAT ENDPOINT ---
@app.post("/webhook/web")
def chat(web_input: WebMessage):
    user_text = web_input.message.text.strip()

    print("Incoming:", user_text)

    if not GROQ_API_KEY:
        return {
            "reply": "ERROR: GROQ_API_KEY not found",
            "current_intent": "error"
        }

    try:
        response = client.chat.completions.create(
            model="llama-3.3-70b-versatile",  # ✅ FINAL WORKING MODEL
            messages=[
                {
                    "role": "system",
                    "content": "You are a helpful medical assistant. Give safe, simple, and accurate health advice."
                },
                {
                    "role": "user",
                    "content": user_text
                }
            ],
            temperature=0.7,
            max_tokens=512
        )

        reply = response.choices[0].message.content.strip()

    except Exception as e:
        print("Error:", e)
        reply = f"ERROR: {str(e)}"

    return {
        "reply": reply,
        "current_intent": "chat"
    }

# --- HEALTH ---
@app.get("/")
def home():
    return {"status": "running"}

@app.get("/health")
def health():
    return {"status": "ok"}