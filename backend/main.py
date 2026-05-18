from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, UploadFile, File, Form
import shutil
import os

from parser import extract_text_from_pdf, extract_text_from_docx
from matcher import (
    extract_skills,
    compare_skills,
    calculate_similarity,
    generate_suggestions
)
import shutil
import os

from parser import extract_text_from_pdf, extract_text_from_docx
from matcher import extract_skills, compare_skills

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_FOLDER = "../uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@app.get("/")
def home():
    return {"message": "Resume Analyzer Backend Running"}


@app.post("/upload-resume/")
async def upload_resume(file: UploadFile = File(...)):

    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    extracted_text = ""

    if file.filename.endswith(".pdf"):
        extracted_text = extract_text_from_pdf(file_path)

    elif file.filename.endswith(".docx"):
        extracted_text = extract_text_from_docx(file_path)

    return {
        "filename": file.filename,
        "extracted_text": extracted_text
    }


# PASTE NEW CODE BELOW THIS


@app.post("/analyze-resume/")
async def analyze_resume(
    file: UploadFile = File(...),
    job_description: str = Form(...)
):

    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    resume_text = ""

    if file.filename.endswith(".pdf"):
        resume_text = extract_text_from_pdf(file_path)

    elif file.filename.endswith(".docx"):
        resume_text = extract_text_from_docx(file_path)

    resume_skills = extract_skills(resume_text)

    jd_skills = extract_skills(job_description)

    analysis = compare_skills(resume_skills, jd_skills)


    similarity_score = calculate_similarity(
    resume_skills,
    jd_skills
)
    
    suggestions = generate_suggestions(
    analysis["missing_skills"],
    similarity_score
)
    
    return {
    "resume_skills": resume_skills,
    "job_description_skills": jd_skills,
    "analysis": analysis,
    "resume_jd_similarity": similarity_score,
    "suggestions": suggestions
}