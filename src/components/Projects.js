// Projects.js
import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    { title: "English Dictionary App", tech: "Android Studio, Java", description: "I develop a English Dictionary app in android studio java, where user can search multiple words related to english. I used java language for this development" },
    { title: "Fitness Training Website", tech: "React.js", description: " I developed a Fitness Training website using reactjs for frontend." },
    { title: "Website Categorization and Recommendation System", tech: "Web, ML", description: "This project leverages machine learning to categorize websites based on content and user preferences, allowing for accurate recommendations of similar sites, enhancing user engagement." },
    { title: "Hotel Booking System", tech: "Html, CSS, JavaScript, PHP", description: "Developed with HTML, CSS, JavaScript, and PHP, this system offers a user-friendly interface for customers to explore available hotel rooms, make bookings, and manage rental details, streamlining the hotel booking process." },
    { title: "Inventory Management System", tech: "Html, CSS, JavaScript, PHP", description: "E-commerce site with dynamic features" },
    { title: "FitMaker", tech: "React.js", description: " I developed a FitMaker using reactjs for frontend." },
    { title: "Fitness App Admin Panel", tech: "React.js", description: " I developed a Fitness App Admin Panel using reactjs for frontend." }
  ];

  return (
    <section id="projects" className='projects-section'>
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p><strong>Tech Stack:</strong> {project.tech}</p>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
