import React from 'react'

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Site",
      description:
        "Built a fast, secure online store with payment integration.",
      link: "#",
    },
    {
      title: "Mobile App",
      description: "Developed a fitness app with real-time tracking features.",
      link: "#",
    },
  ];

  return (
    <section id="portfolio" className="section">
      <h2 className="section-title">Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <div key={project.title} className="card">
            <h3 className="card-title">{project.title}</h3>
            <p className="card-description">{project.description}</p>
            <a href={project.link} className="card-button">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio