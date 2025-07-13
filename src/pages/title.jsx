import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Title = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <div className="hero-content-inner">
          <h1 className="hero-title">We Build Relationships, Not Just Projects</h1>
          <h3 className="hero-description">
            Custom websites and mobile apps tailored to your business needs.
          </h3>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="hero-button"
            onClick={() =>
              window.gtag &&
              window.gtag("event", "cta_click", {
                event_category: "Hero",
                event_label: "Connect",
              })
            }
          >
            Connect
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default Title;
