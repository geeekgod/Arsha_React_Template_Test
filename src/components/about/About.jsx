import React from "react";
import './about.css';

export const About = () => {
  return (
    <section id="about" className="about section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>About Us</h2>
        </div>

        <div className="row content">
          <div className="col-lg-6">
            <p>
            We are a tech startup providing you with apt, affordable and applicable solutions for all your business needs. We offer a suite of technology services like software development, web development, app development and enterprise architecture consulting. We work to deliver state-of-the-art products across industries.
            </p>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p>
            We are content creators at heart! We design and develop content as per your requirements - from a training module to blogs, marketing posts and video content, we do it all. We also localize your content in multiple languages for your users. We record voiceovers to make the content sound good.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;