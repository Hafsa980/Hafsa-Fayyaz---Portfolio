// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Hafsa Fayyaz</h2>
      </div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/education" onClick={() => setIsOpen(false)}>Education</Link>
        <Link to="/skills" onClick={() => setIsOpen(false)}>Skills</Link>
        <Link to="/experience" onClick={() => setIsOpen(false)}>Experience</Link>
        <Link to="/certifications" onClick={() => setIsOpen(false)}>Certifications</Link>
        <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
        <Link to="/languages" onClick={() => setIsOpen(false)}>Languages</Link>
        {/* <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link> */}
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar;
