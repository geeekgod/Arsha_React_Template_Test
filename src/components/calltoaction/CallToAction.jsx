import React from 'react';
import ctaBg from '../../img/cta-bg.jpg';
import './calltoaction.css';

export const CallToAction = () => {
    return (
        <section id="cta" class="cta" >
      <div class="container" data-aos="zoom-in">

        <div class="row">
          <div class="col-lg-9 text-center text-lg-start">
            <h3>We are excited to work with you!</h3>
            <p>Do get in touch with us for all your requirements and give your business and brand a personalised touch with our services. We will make sure that you will be thrilled as much as we are.</p>
          </div>
          <div class="col-lg-3 cta-btn-container text-center">
            <a class="cta-btn align-middle" href="#">Let's Get In Touch</a>
          </div>
        </div>

      </div>
    </section>
    )
}

export default CallToAction;