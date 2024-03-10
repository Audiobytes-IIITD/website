import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'bootstrap';
import React from "react";
import "./About.css";
import img1 from "../../images/odd3.jpg";
import img2 from "../../images/odd1.jpg";
import img3 from "../../images/odd2.jpg";
import insta from "../../images/instagram.png"




const About = () => {
  return (
    <div className="about">
      <div id="carouselExampleFade" class="carousel slide carousel-fade">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={img2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={img3} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <h1>
        About Us
      </h1>

      <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h5>

      <hr />

      {/* Footer */}
      <footer className="footer">
        <div className="container">
        <h4>Follow us on : </h4>
          <a href='https://www.instagram.com/audiobytesiiitd/' >
            <img src={insta} alt="Instagram" />
          </a>
        </div>
      </footer>

    </div>
  );
};

export default About;
