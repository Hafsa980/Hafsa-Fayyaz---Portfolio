// Languages.js
import React from 'react';
import '../styles/Languages.css';

function Languages() {
  const languagesList = [
    { name: "English", level: "Professional" },
    { name: "Urdu", level: "Native" },
    { name: "Pushto", level: "Native" }
  ];

  return (
    <section id="languages" className="languages-section">
      <h2>Languages</h2>
      <div className="languages-container">
        {languagesList.map((language, index) => (
          <div key={index} className="language-card">
            <strong>{language.name}</strong>
            <span className="level">{language.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Languages;
