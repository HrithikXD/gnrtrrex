import { useForm, ValidationError } from "@formspree/react";
import FallingText from "../components/animations/FallingText";
import { useEffect } from "react";
import Connect from "./connect";

const Contact = () => {
  const [state, handleSubmit] = useForm("mwpbgdvk");

  useEffect(()=>{

  },[state.succeeded])

  if (state.succeeded) {
    return (
      <Connect/>
    );
  }

  return (
    <section id="contact" className="section contact">
      <h2 className="section-title">Connect</h2>
      <div className="contact-promo">
        <FallingText
          text={`Limited Offer: 20% Off Your First Project!`}
          highlightWords={["20%", "Project!"]}
          highlightClass="highlighted"
          trigger="hover"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.56}
          fontSize="1.25rem"
          mouseConstraintStiffness={0.9}
        />
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="form-input"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="form-input"
            required
            onInvalid={(e) =>
              e.target.setCustomValidity("Please enter a valid email address")
            }
            onInput={(e) => e.target.setCustomValidity("")}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            className="form-textarea"
            rows="5"
            required
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button
          type="submit"
          className="form-button"
          disabled={state.submitting}
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
