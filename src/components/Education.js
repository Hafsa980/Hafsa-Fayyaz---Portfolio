// Education.js
import React from 'react';
import '../styles/Education.css';

function Education() {
  const educationList = [
    {
      institution: "University of Engineering and Technology, Mardan",
      degree: "BS in Computer Software Engineering",
      duration: "Aug 2020 - Jun 2024",
      grade: "CGPA: 3.80/4.0"
    },
    {
      institution: "Ghazali College for Women, Mardan",
      degree: "FSc Pre-Engineering",
      duration: "Aug 2018 - Aug 2020",
      grade: "GRADE: A+, 89%, 980/1100"
    },
    {
      institution: "The Saro Shah Public High School Saro Shah Mardan",
      degree: "Matric",
      duration: "Mar 2016 - May 2018",
      grade: "GRADE: A+, 90%, 990/1100"
    }
  ];

  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      <div className="education-container">
        {educationList.map((education, index) => (
          <div key={index} className="education-card">
            <div className="education-card-content">
              <h3>{education.degree}</h3>
              <p className="institution"><strong>{education.institution}</strong></p>
              <p className="duration">{education.duration}</p>
              <p className="grade">{education.grade}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
