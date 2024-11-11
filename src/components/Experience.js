// Experience.js
import React from 'react';
import '../styles/Experience.css';

function Experience() {
  const experiences = [
    {
      company: "CodSoft",
      role: "Web Developer",
      duration: "Feb 2024 - Mar 2024",
      location: "Remote, India",
      description: "Assisted in the development of web applications using HTML, CSS, and JavaScript. Collaborated with the development team to design and implement new features. Created responsive and user-friendly interfaces for web applications. Implemented bug fixes and troubleshooting for existing web applications. Learned and applied version control using Git. Participated in code reviews and contributed to the improvement of the codebase. Gained experience with web development frameworks and tools."
    },
    {
      company: "CodSoft",
      role: "Web Developer",
      duration: "Mar 2024 - Apr 2024",
      location: "Remote, India",
      description: " Assisted in the development and implementation of AI models using machine learning algorithms. Collaborated with the AI team to design and train models for various applications. Worked with large datasets to preprocess and analyze data for model training. Implemented data visualization techniques to illustrate model performance. Researched and implemented natural language processing techniques. Participated in code reviews and contributed to the improvement of the codebase. Gained experience with AI frameworks."
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-card-content">
              <h3>{exp.role} at {exp.company}</h3>
              <p className="duration-location">
                <span>{exp.duration}</span> | <span>{exp.location}</span>
              </p>
              <p className="description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
