import React from "react";

const Reviews = () => {
  const testimonials = [
    {
      quote: "GNRTRREX delivered a stunning website on time and within budget!",
      author: "Local Business Owner",
    },
    {
      quote:
        "The app they built increased our customer engagement significantly.",
      author: "Startup Founder",
    },
  ];

  return (
    <section id="testimonials" className="section">
      <h2 className="section-title">What Clients Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.author} className="card testimonial">
            <p className="card-description">"{testimonial.quote}"</p>
            <p className="card-author">{testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
