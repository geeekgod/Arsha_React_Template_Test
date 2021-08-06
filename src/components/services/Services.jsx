import React from 'react';
import './services.css';
import appDevelopmentImg from '../../img/services-icon/app-devlopment.png';
import contentDevelopmentImg from '../../img/services-icon/content-development.png'
import translationImg from '../../img/services-icon/translation.png'
import videoDevelopmentImg from '../../img/services-icon/video-development.png';

export const Services = () => {
    return (
        <section id="services" className="services">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Our Services</h2>
          <p>We are techies at head and content creators at heart!</p>
        </div>

        <div className="row">
          <div className="col-md-6 my-4 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
              <div className="icon"><img src={contentDevelopmentImg} alt=""/></div>
              <h4>Content Development</h4>
              <p>We design and develop e-Learning, Website, Training and Marketing content to elevate your brand image and ethos.</p>
            </div>
          </div>

          <div className="col-md-6 my-4 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon"><img src={videoDevelopmentImg} alt=""/></div>
              <h4>Video Development</h4>
              <p>We develop captivating and engaging 2D videos with stock character and illustrations. We also create visual characters & assets as per your requirements.</p>
            </div>
          </div>

          <div className="col-md-6 my-4 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
              <div className="icon"><img src={translationImg} alt=""/></div>
              <h4>Translation and Voiceovers</h4>
              <p>We translate and give voices to localize your content making it personalized and contextual for your target audience.</p>
            </div>
          </div>

          <div className="col-md-6 my-4 d-flex align-items-stretch mt-4 mt-xl-0 apps" data-aos="zoom-in" data-aos-delay="400">
            <div className="icon-box">
              <div className="icon"><img src={appDevelopmentImg} alt=""/></div>
              <h4>Bespoke Web and Mobile App</h4>
              <p>We design and develop bespoke web and mobile apps to suit your needs as per your target audience.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    )
}

export default Services;