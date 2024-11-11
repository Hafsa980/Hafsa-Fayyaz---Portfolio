// Skills.js
import React, { useState } from 'react';
import '../styles/Skills.css';
import html from '../images/html.jpg';
import css from '../images/css.jpg';
import js from '../images/javascript.jpg';
import php from '../images/php.jpg';
import react from '../images/react.jpg';
import nextjs from '../images/nextjs.jpg';
import bootstrap from '../images/bootstrap.jpg';
import wordpress from '../images/wordpress.jpg';
import angular from '../images/angular.jpg';
import nodejs from '../images/nodejs.jpg';
import git from '../images/git.jpg';
import github from '../images/github.jpg';
import c from '../images/c.jpg';
import cpp from '../images/c++.jpg';
import python from '../images/python.jpg';
import oop from '../images/oop.jpg';
import datastructure from '../images/data structure.jpg';
import sql from '../images/sql.jpg';
import mysql from '../images/mysql.jpg';
import cisco from '../images/cisco.jpg';
import wireshark from '../images/wireshark.jpg';
import infosec from '../images/infosec.jpg';
import vulnerable from '../images/vulnerable.jpg';
import vscode from '../images/vscode.jpg';
import androidstudio from '../images/androidstudio.jpg';
import linux from '../images/linux.jpg';
import xampp from '../images/xampp.jpg';
import office from '../images/office.jpg';
import word from '../images/word.jpg';
import ppt from '../images/ppt.jpg';
import excel from '../images/excel.jpg';
import visio from '../images/visio.jpg';
import agile from '../images/agile.jpg';
import design from '../images/design.jpg';
import architect from '../images/architect.jpg';
import rdb from '../images/rdb.jpg';
import analysis from '../images/analysis.jpg';
import model from '../images/modeling.jpg';
import normal from '../images/normal.jpg';
import uml from '../images/uml.jpg';
import projectmanagement from '../images/projectmanagement.jpg';
import test from '../images/test.jpg';

function Skills() {
  const [showAll, setShowAll] = useState(false);

  const skills = {
    "Frontend Technologies": [
      { name: 'HTML', icon: <img src={html} alt='html' /> },
      { name: 'CSS', icon: <img src={css} /> },
      { name: 'JavaScript', icon: <img src={js} /> },
      { name: 'React.js', icon: <img src={react} /> },
      { name: 'Next.js', icon: <img src={nextjs} /> },
      { name: 'Angular', icon: <img src={angular} /> },
      { name: 'Bootstrap', icon: <img src={bootstrap} /> },
      { name: 'WordPress', icon: <img src={wordpress} alt='wordpress' /> }
    ],
    "Backend Technologies": [
      { name: 'Node.js', icon: <img src={nodejs} /> },
      { name: 'PHP', icon: <img src={php} /> },
      { name: 'C', icon: <img src={c} /> },
      { name: 'C++', icon: <img src={cpp} /> },
      { name: 'Python', icon: <img src={python} /> },
      { name: 'Object Oriented Programming', icon: <img src={oop} /> },
      { name: 'Data Structure and Algorithms', icon: <img src={datastructure} /> }
    ],
    "Databases": [
      { name: 'MySQL', icon: <img src={mysql} /> },
      { name: 'SQL', icon: <img src={sql} /> }
    ],
    "Tools & Frameworks": [
      { name: 'Git', icon: <img src={git} /> },
      { name: 'GitHub', icon: <img src={github} /> },
      { name: 'MS Visio', icon: <img src={visio} /> },
      { name: 'Linux', icon: <img src={linux} /> },
      { name: 'Visual Studio Code', icon: <img src={vscode} /> },
      { name: 'XAMPP', icon: <img src={xampp} /> },
      { name: 'Android Studio', icon: <img src={androidstudio} /> },
      { name: 'Wireshark', icon: <img src={wireshark} /> },
      { name: 'Cisco Packet Tracer', icon: <img src={cisco} /> },
      { name: 'MS Office', icon: <img src={office} /> },
      { name: 'MS Word', icon: <img src={word} /> },
      { name: 'MS PowerPoint', icon: <img src={ppt} /> },
      { name: 'MS Excel', icon: <img src={excel} /> }
    ],
    "Project Management & Methodologies": [
      { name: 'Agile', icon: <img src={agile} /> },
      {name: 'Software Design', icon: <img src={design} /> },
      {name: 'Software Architecture', icon: <img src={architect} /> },
      {name: 'UML', icon: <img src={uml} /> },
      {name: 'Project Management', icon: <img src={projectmanagement} /> },
      {name: 'Data Modeling & Database Design', icon: <img src={model} /> },
      {name: 'Requirement Analysis', icon: <img src={analysis} /> },
      {name: 'Data Normalization and denormalization', icon: <img src={normal} /> },
      {name:'Relational Database Design', icon: <img src={rdb} /> },
      {name: 'Testing', icon: <img src={test} /> }
    ],
    "Security & Networking": [
      { name: 'Information Security', icon: <img src={infosec} /> },
      { name: 'Vulnerability Testing', icon: <img src={vulnerable} /> }
    ]
  };

  return (
    <section id="skills">
      <h1>Skills</h1>
      {Object.keys(skills).map((category, index) => (
        <div key={index} className="skills-category">
          <h3>{category}</h3>
          <ul className="skills-list">
            {skills[category].map((skill, idx) => (
              <li key={idx} className="skill-item">
                {skill.icon && <span className="skill-icon">{skill.icon}</span>}
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Skills;
