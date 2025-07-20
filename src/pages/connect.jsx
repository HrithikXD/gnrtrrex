import FallingText from "../components/animations/FallingText";

const Connect = () => {
  return (
    <section id="contact" className="section contact contact-sent">
      <h2 className="section-title">Thank You!</h2>
      <div className="contact-promo">
        <FallingText
          text={`Your message has been sent. We’ll get back to you soon!`}
          highlightWords={["sent", "back", "to", "you"]}
          highlightClass="highlighted"
          trigger="hover"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.56}
          fontSize="1.25rem"
          mouseConstraintStiffness={0.9}
        />
      </div>
    </section>
  );
};

export default Connect;
