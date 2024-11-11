// Certifications.js
import React from 'react';
import '../styles/Certifications.css';

function Certifications() {
  const certificationsList = [
    {  
      title: "Advanced Software Engineering",
      provider: "Walmart Global Tech"
    },
    {
      title: "Software Engineering",
      provider: "Goldman Sachs",
    },
    {
      title: "Introduction to Cybersecurity",
      provider: "Cisco Networking Academy",
    },
    {
      title: "Introduction to Networks and Cisco Devices",
      provider: "Coursera Project Network, Coursera",
    },
    {
      title: "Foundation of Cybersecurity",
      provider: "Google, Coursera",
    },
    {
      title: "Play It Safe: Manage Security Risks",
      provider: "Google, Coursera",
    },
    {
      title: "Connect and Protect: Networks and Network Security",
      provider: "Google, Coursera",
    },
    {
      title: "Tools of the Trade: Linux and SQL",
      provider: "Google, Coursera",
    },
    {
      title: "Assets, Threats and Vulnerabilities",
      provider: "Google, Coursera",
    },
    {
      title: "AI for Everyone",
      provider: "DeepLearning.AI, Coursera",
    },
    {
      title: "Build a Full Website using WordPress",
      provider: "Coursera Project Network, Coursera",
    },
    {
      title: "Foundation of Project Management",
      provider: "Google, Coursera",
    }
  ];

  return (
    <section id="certifications" className="certifications-section">
      <h2>Certifications</h2>
      <div className="certifications-container">
        {certificationsList.map((cert, index) => (
          <div key={index} className="certification-card">
            <div className="certification-card-content">
              <h3>{cert.title}</h3>
              <p className="provider"><strong>{cert.provider}</strong></p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
