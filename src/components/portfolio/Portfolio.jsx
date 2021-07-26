import React,{useEffect} from 'react';
import './portfolio.css';
import AOS from "aos";
import "aos/dist/aos.css";
import sfgImg from '../../img/portfolio/SFG/SFG-01.jpg';
import sfgLogo from '../../img/portfolio/SFG/sfg-logo.png';
import iibLogo from '../../img/portfolio/IIB/Logo-01.png';
export const Portfolio = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: "ease-in-out",
          once: true,
          mirror: false
        });
        AOS.refresh();
      }, []);


    return (
        <section id="portfolio" class="portfolio">
        <div class="container" data-aos="fade-up">
  
          <div class="section-title">
            <h2>Our Projects</h2>
            <p>We have developed multiple projects for our clients across the board ranging from app development to content services including voicoevers and translation.</p>
          </div>
  
          <div class="portfolio-container" data-aos="fade-up" data-aos-delay="200">
            <div className="portfolio-content d-flex">
             <div className="img"><img src={iibLogo} draggable="false" alt=""/></div>
             <div className="portfolio-details d-flex">
               <div className="contentBlock">
               <h4>Insightsinbytes</h4>
               <p>Insightsinbytes is an in-house initiative by the SSingularity Technologies team. It focuses on streamlining content required for competitive examinations in India. The content is planned to reach the users in the form of an app – web and mobile. You can check it out on Instagram, Facebook and YouTube @insightsinbytes.</p>
               </div>
             </div>
            </div>
            <div className="portfolio-content d-flex reverse">
            <div className="img"><img src={sfgLogo} draggable="false" alt=""/></div>
             <div className="portfolio-details d-flex">
               <div className="contentBlock">
               <h4>STEM for Girls</h4>
               <p>We executed the STEM for Girls project to digitize the curriculum designed by the IBM and Quest Alliance team. The project was supported by IBM and the digital content would rest on IBM's self-learning platform. The content was developed in English, Hindi and Kannada. We provided with translation and voiceover recording for the content.</p>
               </div>
             </div>
            </div>
            <div className="portfolio-content d-flex">
            <div className="img"><img src={sfgImg} draggable="false" alt=""/></div>
             <div className="portfolio-details d-flex">
               <div className="contentBlock">
               <h4>Young Innovators Program (YIP)</h4>
               <p>Quest Alliance in collaboration with Selco Foundation created a curriculum to reach out to the youth from the urban and rural settings. As instructional designers, we analyzed the existing content, studied the storyboards and developed digitized lessons in the form of SCORM.</p>
               </div>
             </div>
            </div>
          </div>
  
        </div>
      </section>
    )
}

export default Portfolio;