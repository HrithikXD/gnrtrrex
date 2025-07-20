import React from "react";
import InfiniteMenu from "../components/animations/InfiniteMenu";
import color1 from "../assets/images/color1.jpg";
import color2 from "../assets/images/color2.jpg";

const Reviews = () => {
  const items = [
    {
      image: color1,
      link: "",
      title: "Local Business Owner",
      description:
        "GNRTRREX delivered a stunning website on time and within budget!",
    },
    {
      image: color2,
      link: "",
      title: "Startup Founder",
      description:
        "The app they built increased our customer engagement significantly.",
    },
  ];

  return (
    <section id="reviews" className="section">
      <h2 className="section-title">What Clients Say</h2>
      <p className="section-para">Drag to explore more reviews</p>
      <InfiniteMenu items={items} />
    </section>
  );
};

export default Reviews;
