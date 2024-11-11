// Footer.js
import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Hafsa Fayyaz</h3>
        <p>&copy; 2024 Hafsa Fayyaz. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/hafsa-fayyaz-0b3373283" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/Hafsa980" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="mailto:hafsafayyaz980@gmail.com">Email Me</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
