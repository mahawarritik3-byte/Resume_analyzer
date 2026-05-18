from skills import SKILLS

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity


def extract_skills(text):

    text = text.lower()

    found_skills = []

    for skill in SKILLS:
        if skill.lower() in text:
            found_skills.append(skill)

    return list(set(found_skills))


def calculate_similarity(resume_skills, jd_skills):

    if len(jd_skills) == 0:
        return 0

    matched = set(resume_skills).intersection(set(jd_skills))

    score = (len(matched) / len(jd_skills)) * 100

    return round(score, 2)


def compare_skills(resume_skills, jd_skills):

    matched = []
    missing = []

    for skill in jd_skills:
        if skill in resume_skills:
            matched.append(skill)
        else:
            missing.append(skill)

    score = 0

    if len(jd_skills) > 0:
        score = (len(matched) / len(jd_skills)) * 100

    return {
        "matched_skills": matched,
        "missing_skills": missing,
        "skill_match_score": round(score, 2)
    }
def generate_suggestions(missing_skills, similarity_score):

    suggestions = []

    if len(missing_skills) > 0:
        suggestions.append(
            f"Add these missing skills: {', '.join(missing_skills)}"
        )

    if similarity_score < 50:
        suggestions.append(
            "Resume has low similarity with job description."
        )

    if similarity_score < 70:
        suggestions.append(
            "Try adding more relevant projects and experience."
        )

    suggestions.append(
        "Use strong action verbs like Developed, Built, Designed."
    )

    suggestions.append(
        "Add measurable achievements in your projects."
    )

    suggestions.append(
        "Keep resume ATS-friendly with clean formatting."
    )

    return suggestions