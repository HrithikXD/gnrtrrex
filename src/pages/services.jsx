import React from "react";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Responsive, SEO-friendly websites for businesses of all sizes.",
    },
    {
      title: "Mobile Apps",
      description:
        "Cross-platform apps for iOS and Android with modern features.",
    },
    {
      title: "UI/UX Design",
      description: "Intuitive and engaging designs to enhance user experience.",
    },
  ];

  return (
    <section id="services" className="section">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.title} className="card">
            <h3 className="card-title">{service.title}</h3>
            <p className="card-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
