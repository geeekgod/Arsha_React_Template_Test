import React from 'react';
import synclarityLogoImg from '../../img/clients/synclarity-logo_1.png';
import tnaacademyLogoImg from '../../img/clients/tncaademy-logo.png';
import questAllianceImg from '../../img/clients/quest-alliance-logo.jpg';
import './clients.css';


export const Clients = () => {
    return (
        <section id="cliens" class="cliens ">
        <div class="container">
  
          <div class="row" data-aos="zoom-in">
  
            <div class="col-sm-4 d-flex align-items-center justify-content-center">
              <img src={synclarityLogoImg} class="img-fluid" alt=""/>
            </div>
  
            <div class="col-sm-4 d-flex align-items-center justify-content-center">
              <img src={tnaacademyLogoImg} class="img-fluid" alt=""/>
            </div>
  
            <div class="col-sm-4 d-flex align-items-center justify-content-center">
              <img src={questAllianceImg} class="img-fluid" alt="" />
            </div>
  
          </div>
  
        </div>
      </section>
    )
}

export default Clients;