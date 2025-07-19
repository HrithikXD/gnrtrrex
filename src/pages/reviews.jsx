import React from "react";
import InfiniteMenu from "../components/animations/InfiniteMenu";

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

  const items = [
    {
      image: "https://picsum.photos/300/300?grayscale&blur=10",
      link: "",
      title: "Local Business Owner",
      description:
        "GNRTRREX delivered a stunning website on time and within budget!",
    },
    {
      image: "https://picsum.photos/400/400?grayscale&blur=10",
      link: "",
      title: "Startup Founder",
      description:
        "The app they built increased our customer engagement significantly.",
    },
  ];

  return (
    <section id="reviews" className="section">
      <h2 className="section-title">What Clients Say</h2>
      <InfiniteMenu items={items} />
    </section>
  );
};

export default Reviews;
