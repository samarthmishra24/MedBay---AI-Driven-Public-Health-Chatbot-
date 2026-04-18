# MedBay - AI-Driven Public Health Chatbot

**MedBay** is a multilingual, AI-powered chatbot. It's designed to educate rural and semi-urban populations about preventive healthcare, disease symptoms, vaccination schedules, and more, bridging the healthcare information gap.

The application features a modern, responsive web interface built with Next.js, a powerful FastAPI backend, and is powered by Google's Gemini AI for intelligent, context-aware conversations.

---

## Vision Document

### Project Name
MedBay – AI-Driven Public Health Chatbot

### Overview
MedBay is a multilingual, AI-powered public health chatbot designed to provide accessible, reliable, and real-time healthcare information to underserved populations.

### Problem It Solves
- Lack of reliable healthcare information  
- Spread of misinformation  
- Limited awareness of preventive care  
- Difficulty in finding nearby hospitals  
- Language barriers  

### Target Users
- Rural users  
- Urban low-income workers  
- Health workers  
- General public  

### Vision Statement
To provide accessible healthcare knowledge using AI.

### Key Features / Goals
- AI chatbot  
- Symptom checker  
- Hospital finder  
- Document & X-ray analysis  
- Multilingual support  

### Success Metrics
- User engagement  
- Accuracy of responses  
- Number of users  
- System performance  

### Assumptions & Constraints
- Internet access required  
- API dependency  
- AI is non-diagnostic  

---

## MoSCoW Prioritization

### Must Have
- Chatbot  
- Symptom checker  
- Hospital finder  
- Gemini AI integration  

### Should Have
- Voice input/output  
- Document analysis  

### Could Have
- Myth buster  
- Dark mode  

### Won’t Have
- Telemedicine  
- Offline mode  

---

## Wireframes (Figma)

Wireframes are created based on the existing frontend implementation.

Figma Link: [Add Your Link Here]

Screens: 
- Chat UI    
- Hospital Finder  
- Upload Screen  
- Dashboard  

---

## Core Features

- Multilingual chatbot  
- Symptom checker  
- Health Q&A  
- Hospital finder  
- X-ray analysis  
- Document analysis  
- Voice features  
- WhatsApp integration  

---

## Technology Stack


Our system is built on a modern, scalable, and robust architecture.

  * **Frontend:** **Next.js** & **Tailwind CSS** (for a responsive and modern user interface).
  * **Backend:** **FastAPI** (Python) (for a high-performance, asynchronous API).
  * **AI & Language Model:** **Google Gemini** (for conversational logic, persona management, and report generation).
  * **Database:** **Supabase** (PostgreSQL) (for storing vaccination schedules, user data, and generated reports).
  * **External APIs:**
      * **Google Places API:** For the "Find a Hospital" feature.
      * **Google Geocoding API:** For converting coordinates to human-readable addresses.
      * **Twilio API:** For WhatsApp and SMS integration.

-----


## Setup and Installation

To get MedBay running on your local machine, you'll need to set up the backend and frontend separately.

### Prerequisites

  * Python 3.10+
  * Node.js 18.0+
  * Access keys for:
      * Google (Gemini, Places, Geocoding)
      * Supabase
      * Twilio (optional, for WhatsApp)

### 1\. Backend Setup

```bash
# 1. Navigate to the backend directory
cd backend

# 2. Create and activate a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# 3. Install the required Python packages
pip install -r requirements.txt

# 4. Create and configure your .env file
#    Create a file named '.env' in the 'backend' directory
#    and add your API keys:
#
#    SUPABASE_URL="YOUR_SUPABASE_URL"
#    SUPABASE_KEY="YOUR_SUPABASE_ANON_KEY"
#    GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
#    GOOGLE_PLACES_API_KEY="YOUR_GOOGLE_API_KEY"

# 5. Run the FastAPI server
uvicorn main:app --reload
```

Your backend will now be running on `http://127.0.0.1:8000`.

### 2\. Frontend Setup

```bash
# 1. Navigate to the frontend directory in a new terminal
cd frontend

# 2. Install the required Node.js packages
npm install

# 3. Run the Next.js development server
npm run dev
```

Your frontend will now be running on `http://localhost:3000`. Open this URL in your browser to start using MedBay.

-----


## Future Scope

Our vision for MedBay is to evolve it into a fully integrated public health platform. Future enhancements include:

  * **Direct Government Database Integration:** For automated, real-time outbreak alerts.
  * **Expanded Language Support:** Adding more regional Indian languages to increase accessibility.
  * **Personalized Health Profiles:** Allowing users to securely track their health records and receive personalized reminders.

  * **Telemedicine Integration:** Connecting users directly with healthcare professionals for consultations.
