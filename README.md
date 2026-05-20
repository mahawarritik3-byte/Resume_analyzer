# 🚀 ATS Resume Scoring System

An AI-powered Applicant Tracking System (ATS) that analyzes resumes and compares them with job descriptions to generate a **match score, missing skills, and improvement suggestions**.

---

## 📌 Overview

This project simulates a real-world ATS used by companies to filter and rank candidates automatically.

It helps users:
- Understand how ATS systems evaluate resumes
- Improve resume quality for job applications
- Identify missing skills based on job descriptions
- Get a match percentage score (0–100%)

---

## 🎯 Features

- Upload Resume (PDF/Text support)
- Job Description Matching
- ATS Score Generation (0–100%)
- Missing Skills Detection
- Resume Improvement Suggestions
- Fast API backend
- CORS enabled for frontend integration

---

## 🛠️ Tech Stack

- Python
- FastAPI
- NLP (Text processing / similarity matching)
- Uvicorn
- HTML, CSS, JavaScript (optional frontend)
- Git & GitHub

---

## 📂 Project Structure

ATS-Resume-Scoring/
│
├── main.py # FastAPI backend
├── utils.py # Logic for ATS scoring
├── requirements.txt # Dependencies
├── uploads/ # Uploaded resumes
└── README.md


---

## ⚙️ Installation & Setup

### 1. Clone the repositorygit clone https://github.com/your-username/ats-resume-scoring.git
cd ats-resume-scoring


### 2. Create virtual environment (optional)
python -m venv venv

Activate it:

Windows: venv\Scripts\activate

Mac/Linux: source venv/bin/activate

### 3. Install dependencies
pip install -r requirements.txt


### 4. Run the project
uvicorn main:app --reload


### 5. Open in browser
http://127.0.0.1:8000



---

## 📊 How It Works

1. Extract text from resume
2. Compare with job description
3. Match important keywords/skills
4. Calculate similarity score
5. Generate:
   - ATS Score (%)
   - Missing Skills
   - Suggestions

---

## 📈 Example Output
{
"ats_score": 85.2,
"matched_skills": ["Python", "FastAPI", "SQL"],
"missing_skills": ["Docker", "AWS"],
"suggestions": "Add cloud deployment skills to improve ATS score."
}


---

## 🚀 Future Improvements

- AI-based semantic matching (BERT / LLM integration)
- Multi-resume ranking system
- Resume parser improvement
- User dashboard
- Cloud deployment (AWS / Render / Vercel)

---

# 🚀 Project Workflow

## 📌 How The AI Resume Analyzer Works

The project follows a simple full-stack workflow where the frontend interacts with the backend API to analyze resumes and compare them with job descriptions.

---

## 🖥️ Frontend (Vercel)

The frontend is built using:

- React.js
- Vite
- CSS
- Framer Motion

The frontend allows users to:

✅ Upload Resume (PDF/DOCX)  
✅ Paste Job Description  
✅ View ATS Score  
✅ View Matched Skills  
✅ View Missing Skills  
✅ Get Resume Improvement Suggestions  

Frontend is deployed on **Vercel**.

---

## ⚙️ Backend (Render)

The backend is built using:

- FastAPI
- Python
- PDF/DOCX Text Extraction
- Skill Matching Logic

The backend performs:

✅ Resume Text Extraction  
✅ Job Description Analysis  
✅ Skill Extraction  
✅ ATS Score Calculation  
✅ Suggestion Generation  

Backend is deployed on **Render**.

---

# 🔄 Complete Workflow

```text
User Uploads Resume + Job Description
                │
                ▼
        Frontend (Vercel)
                │
 Sends POST Request using Fetch API
                │
                ▼
       Backend API (Render)
                │
 Extract Resume Text from PDF/DOCX
                │
 Compare Resume Skills with JD Skills
                │
 Calculate ATS Score
                │
 Generate Suggestions
                │
                ▼
     Send Response to Frontend
                │
                ▼
 User Sees ATS Analysis Results

---

🌐 Deployment Architecture

User
  │
  ▼
Vercel Frontend
  │
  ▼
Render FastAPI Backend
  │
  ▼
Resume Analysis Engine

---

## 👨‍💻 Author

**Ritik Mahawar**

- GitHub: https://github.com/your-username
- Portfolio: https://your-portfolio-link
- LinkedIn: https://linkedin.com/in/your-profile

---

## ⭐ Support

If you like this project:
- Star the repository ⭐
- Fork it 🍴
- Share it 🚀

BACKEND LINK : https://resume-analyzer-5-11kb.onrender.com
FRONTEND LINK : https://resume-analyzer-henna-ten.vercel.app/
