import React, { useState } from "react";
import "./about.css";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  return (
    <div className="about" id="aboutUs">
      <h1 className="text-white text-4xl font-bold">About Us</h1>
      <div className="carousel ">
        <div
          className="carousel-inner rounded-lg"
          style={{ transform: `translateX(-${activeIndex * 100}%)`}}
        >
          <div className="carousel-item">
            <img src="images/odd3.jpg"  />
          </div>
          <div className="carousel-item">
            <img src="images/odd1.jpg" />
          </div>
          <div className="carousel-item">
            <img src="images/odd2.jpg"  />
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
          <a href="https://www.instagram.com/audiobytesiiitd/" target="_blank">
            <img src="images/instagram.png" alt="Instagram" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default About;