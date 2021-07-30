import React from 'react';
import synclarityLogoImg from '../../img/clients/synclarity-logo_1.png';
import tnaacademyLogoImg from '../../img/clients/tncaademy-logo.png';
import questAllianceImg from '../../img/clients/quest-alliance-logo.jpg';
import './clients.css';


export const Clients = () => {
    return (
        <section id="cliens" className="cliens ">
        <div className="container">
  
          <div className="row" data-aos="zoom-in">
  
            <div className="col-sm-4 d-flex align-items-center justify-content-center">
              <img src={synclarityLogoImg} className="img-fluid" alt=""/>
            </div>
  
            <div className="col-sm-4 d-flex align-items-center justify-content-center">
              <img src={tnaacademyLogoImg} className="img-fluid" alt=""/>
            </div>
  
            <div className="col-sm-4 d-flex align-items-center justify-content-center">
              <img src={questAllianceImg} className="img-fluid" alt="" />
            </div>
  
          </div>
  
        </div>
      </section>
    )
}

export default Clients;