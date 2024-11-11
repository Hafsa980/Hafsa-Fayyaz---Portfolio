// Header.js
import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className='header'>
      <h1>Hafsa Fayyaz</h1>
      <p>Software Engineer | Web Developer</p>
      <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a  href='#education'>Education</a>
        <a href="#projects">Projects</a>
        <a href='#certifications'>Certifications</a>
        <a href='#languages'>Languages</a>
      </nav>
    </header>
  );
}

export default Header;
