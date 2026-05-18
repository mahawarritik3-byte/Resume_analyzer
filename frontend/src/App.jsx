import { useState } from "react";
import "./App.css";

function App() {

  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {

    if (!file || !jobDescription) {
      alert("Please upload resume and add job description");
      return;
    }

    setLoading(true);

    const formData = new FormData();

    formData.append("file", file);
    formData.append("job_description", jobDescription);

    try {

      const response = await fetch(
        "http://127.0.0.1:8000/analyze-resume/",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      setResult(data);

    } catch (error) {
      console.log(error);
      alert("Backend connection failed");
    }

    setLoading(false);
  };

  return (

    <div className="app-container">

      {/* NAVBAR */}

      <div className="navbar">

        <div className="logo-section">

          <div className="logo-circle">
            AI
          </div>

          <div>
            <h2>Resume Analyzer</h2>
            <p>AI Powered Resume Intelligence</p>
          </div>

        </div>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">About</a>
        </div>

      </div>

      {/* HERO */}

      <div className="hero-section">

        <div className="hero-badge">
          ⚡ Smart Resume Analyzing System
        </div>

        <h1>
          Analyze Your Resume With AI
        </h1>

        <p>
          Upload your resume and compare it against job descriptions to receive ATS compatibility scores, skill matching insights, and AI-powered recommendations.
        </p>

      </div>

      {/* MAIN GRID */}

      <div className="main-grid">

        {/* LEFT CARD */}

        <div className="glass-card">

          <h2>
            Upload Resume
          </h2>

          <div className="upload-box">

            <div className="upload-icon">
              📄
            </div>

            <p>
              Drag & drop your resume here
            </p>

            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />

            <span>
              Supports PDF and DOCX formats
            </span>

          </div>

          <h2 className="jd-title">
            Job Description
          </h2>

          <textarea
            rows="8"
            placeholder="Paste the job description here..."
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />

          <button
            onClick={handleSubmit}
            className="analyze-btn"
          >
            {loading ? "Analyzing..." : "Analyze Resume"}
          </button>

        </div>

        {/* RIGHT CARD */}

        <div className="glass-card result-card">

          {!result ? (

            <div className="placeholder-box">

              <div className="rocket-icon">
                🚀
              </div>

              <h2>
                Get AI-Powered Resume Insights
              </h2>

              <p>
                Compare your resume with any job description and optimize it for Applicant Tracking Systems.
              </p>

              <div className="feature-boxes">

                <div>
                  ✅ ATS Match Score
                </div>

                <div>
                  ✅ Skill Detection
                </div>

                <div>
                  ✅ Missing Skills Analysis
                </div>

                <div>
                  ✅ Resume Improvement Tips
                </div>

              </div>

            </div>

          ) : (

            <div>

              {/* SCORE */}

              <div className="score-card">

                <h2>
                  ATS Compatibility Score
                </h2>

                <div className="score-number">
                  {result.resume_jd_similarity}%
                </div>

              </div>

              {/* MATCHED */}

              <div className="skills-section">

                <h3 className="green-heading">
                  Matched Skills
                </h3>

                <div className="tags-container">

                  {result.analysis.matched_skills.map((skill, index) => (
                    <span key={index} className="green-tag">
                      {skill}
                    </span>
                  ))}

                </div>

              </div>

              {/* MISSING */}

              <div className="skills-section">

                <h3 className="red-heading">
                  Missing Skills
                </h3>

                <div className="tags-container">

                  {result.analysis.missing_skills.map((skill, index) => (
                    <span key={index} className="red-tag">
                      {skill}
                    </span>
                  ))}

                </div>

              </div>

              {/* SUGGESTIONS */}

              <div className="skills-section">

                <h3 className="yellow-heading">
                  AI Suggestions
                </h3>

                <div className="suggestions-container">

                  {result.suggestions.map((suggestion, index) => (
                    <div key={index} className="suggestion-box">
                      {suggestion}
                    </div>
                  ))}

                </div>

              </div>

            </div>

          )}

        </div>

      </div>

      {/* FOOTER */}

      <footer className="footer">

        <p>
          Built with ❤️ using React, FastAPI & AI • ATS Resume Analyzer 2026
        </p>

      </footer>

    </div>
  );
}

export default App;