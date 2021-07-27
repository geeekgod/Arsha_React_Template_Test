import React from "react";
import heroImg from '../../img/home-img.png';
import './hero.css';

export const Hero = () => {
    
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h1>Technology, Design and Content All at One Place !</h1>
            <h2>
            If you are thinking of building a software, an app or a training module or simply writing a blog, you need 3 elements - technology, design and content. We have it all for you at one place!
            </h2>
          </div>
          <div
            className="col-lg-6 order-1 order-lg-2 hero-img"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img
              src={heroImg}
              className="img-fluid animated"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
