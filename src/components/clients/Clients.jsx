import React from 'react';
import synclarityLogoImg from '../../img/clients/synclarity-logo_1.png';
import tnaacademyLogoImg from '../../img/clients/tncaademy-logo.png';
import questAllianceImg from '../../img/clients/quest-alliance-logo.jpg';
import arqLogoImg from '../../img/clients/ARQ Logo.png'
import './clients.css';


export const Clients = () => {
    return (
        <section id="cliens" className="cliens ">
        <div className="container">
  
          <div className="row" data-aos="zoom-in">
  
            <div className="col-md-3 col-sm-6 d-flex align-items-center justify-content-center">
              <img src={synclarityLogoImg} className="img-fluid" alt="synclarity"/>
            </div>
  
            <div className="col-md-3 col-sm-6 d-flex align-items-center justify-content-center">
              <img src={tnaacademyLogoImg} className="img-fluid" alt="tnaacademy"/>
            </div>
  
            <div className="col-md-3 col-sm-6 d-flex align-items-center justify-content-center">
              <img src={questAllianceImg} className="img-fluid" alt="questallinace" />
            </div>
  
            <div className="col-md-3 col-sm-6 d-flex align-items-center justify-content-center">
              <img src={arqLogoImg} className="img-fluid" alt="arq" />
            </div>
          </div>
  
        </div>
      </section>
    )
}

export default Clients;