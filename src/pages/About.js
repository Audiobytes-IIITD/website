import React, { useState } from "react";
import "./about.css";
import img1 from "../../images/odd3.jpg";
import img2 from "../../images/odd1.jpg";
import img3 from "../../images/odd2.jpg";
import insta from "../../images/instagram.png";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  return (
    <div className="about">
      <div className="carousel">
        <div
          className="carousel-inner"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          <div className="carousel-item">
            <img src={img1}  />
          </div>
          <div className="carousel-item">
            <img src={img2} />
          </div>
          <div className="carousel-item">
            <img src={img3}  />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          onClick={handlePrev}
          aria-label="Previous"
        >
          &#10094;
        </button>
        <button
          className="carousel-control-next"
          onClick={handleNext}
          aria-label="Next"
        >
          &#10095;
        </button>
      </div>

      <h1>About Us</h1>

      <h3>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and
        more recently with desktop publishing software like Aldus PageMaker
        including versions of Lorem Ipsum.
      </h3>

      <hr />

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <h4>Follow us on:</h4>
          <a href="https://www.instagram.com/audiobytesiiitd/">
            <img src={insta} alt="Instagram" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default About;
