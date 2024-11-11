// About.js
import React from 'react';
import '../styles/About.css';

function About() {
  const handleDownloadCV = () => {
    // Path to your CV file
    window.open('/CV/Hafsa Updated CV.pdf', '_blank');
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <p>Software Engineer</p>
          <p>Web Developer</p>
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p className="introduction">
            High-achieving recent graduate in Software Engineering, with a strong academic record (highest GPA in class). Proficient in a range of programming languages, including:
          </p>          
          <ul className="highlights">
            <li>Web development: HTML, CSS, JavaScript, PHP</li>
            <li>Programming fundamentals: Python, C, C++</li>
            <li>Database management: SQL, MySQL</li>
            <li>Cybersecurity related Knowledge</li>
          </ul>
          <p className='introduction'>
            With a solid foundation in Software Engineering principles and a passion for innovative problem-solving, I am excited to bring my skills and enthusiasm to a dynamic team and contribute to cutting-edge projects. Eager to learn and grow with a forward-thinking organization.
          </p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/hafsa-fayyaz-0b3373283" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/Hafsa980" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="mailto:hafsafayyaz980@gmail.com">Email Me</a>
          </div>
          <button className="download-cv-button" onClick={handleDownloadCV}>
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
