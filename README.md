# MedBay - AI-Driven Public Health Chatbot

**MedBay** is a multilingual, AI-powered chatbot. It's designed to educate rural and semi-urban populations about preventive healthcare, disease symptoms, vaccination schedules, and more, bridging the healthcare information gap.

The application features a modern, responsive web interface built with Next.js, a powerful FastAPI backend, and is powered by Google's Gemini AI for intelligent, context-aware conversations.

---

## 📌 Vision Document

### 🏷️ Project Name
MedBay – AI-Driven Public Health Chatbot

### 📖 Overview
MedBay is a multilingual, AI-powered public health chatbot designed to provide accessible, reliable, and real-time healthcare information to underserved populations.

### ❗ Problem It Solves
- Lack of reliable healthcare information  
- Spread of misinformation  
- Limited awareness of preventive care  
- Difficulty in finding nearby hospitals  
- Language barriers  

### 👥 Target Users
- Rural users  
- Urban low-income workers  
- Health workers  
- General public  

### 🌍 Vision Statement
To provide accessible healthcare knowledge using AI.

### 🚀 Key Features / Goals
- AI chatbot  
- Symptom checker  
- Hospital finder  
- Document & X-ray analysis  
- Multilingual support  

### 📊 Success Metrics
- User engagement  
- Accuracy of responses  
- Number of users  
- System performance  

### ⚠️ Assumptions & Constraints
- Internet access required  
- API dependency  
- AI is non-diagnostic  

---

## 🎯 MoSCoW Prioritization

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

## 🎨 Wireframes (Figma)

Wireframes are created based on the existing frontend implementation.

Figma Link: [Add Your Link Here]

Screens:
- Login  
- Chat UI  
- Symptom Checker  
- Hospital Finder  
- Upload Screen  
- Dashboard  

---

## 🏗️ Architecture Diagram

This diagram shows the system flow from frontend → backend → AI/APIs → database → deployment.

[Insert Architecture Image Here]

---

## 🚀 Core Features

- Multilingual chatbot  
- Symptom checker  
- Health Q&A  
- Hospital finder  
- X-ray analysis  
- Document analysis  
- Voice features  
- WhatsApp integration  

---

## 🛠️ Technology Stack

- Frontend: Next.js, Tailwind CSS  
- Backend: FastAPI  
- AI: Google Gemini  
- Database: Supabase (PostgreSQL)  
- APIs: Google Places, Twilio  


---

## 🌿 Branching Strategy

- main → production  
- feature/* → development  

Example:
- feature/demo  

---

## ⚡ Quick Start – Local Development (Docker)

### Prerequisites
- Docker Desktop  

### Run:

```bash
docker-compose up --build
