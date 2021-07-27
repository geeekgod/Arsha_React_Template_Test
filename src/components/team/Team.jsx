import React from "react";
import shrutiImg from '../../img/team/shruti.png';
import lakshayImg from '../../img/team/lakshay.png';
import shreyasImg from '../../img/team/shreyas.png';
import kritikaImg from '../../img/team/kritika.png';
import './team.css';

export const Team = () => {
  return (
    <section id="team" class="team section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Get to Know Us</h2>
          <p>
          We would like to introduce ourselves to you and would be happy to connect and talk to you!
          </p>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div
              class="member d-flex align-items-start"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div class="pic">
                <img
                  src={shrutiImg}
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="member-info">
                <h4>Shruti Singh</h4>
                <span>Chief Executive Officer</span>
                <p>
                We call her the Founder and Strategist. She looks at Business Development, Marketing, Strategy, Finance and everything that you can think of!
                </p>
                <div class="social">
                  <a href="https://www.facebook.com/people/Shruti-Singh/100067179288460/" target="_blank">
                    <i class="ri-facebook-fill"></i>
                  </a>
                  <a href="https://www.instagram.com/shrutiushinde/" target="_blank">
                    <i class="ri-instagram-fill"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/shruti-shinde-35656178/" target="_blank">
                    {" "}
                    <i class="ri-linkedin-box-fill"></i>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 mt-4 mt-md-0">
            <div
              class="member d-flex align-items-start"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div class="pic">
                <img
                  src={lakshayImg}
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="member-info">
                <h4>Lakshay Mittal</h4>
                <span>Head Project Management & Execution</span>
                <p>
                We call him the execution specialist. He looks at Project Management and Execution. He also takes up the Business Development and Marketing responsibilities for us!
                </p>
                <div class="social">
                  <a href="https://www.facebook.com/lakshaymittal27" target="_blank">
                    <i class="ri-facebook-fill"></i>
                  </a>
                  <a href="https://www.instagram.com/oh_thought/" target="_blank">
                    <i class="ri-instagram-fill"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/lakshaymittalpedagogy/" target="_blank">
                    {" "}
                    <i class="ri-linkedin-box-fill"></i>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 mt-4">
            <div
              class="member d-flex align-items-start"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div class="pic">
                <img
                  src={shreyasImg}
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="member-info">
                <h4>Shreyas Shinde</h4>
                <span>Manager, Marketing</span>
                <p>
                We call him the new-ideas specialist. He looks after Marketing and is an expert to come up with new ideas all the time!
                </p>
                <div class="social">
                  <a href="https://facebook.com/shinde.shreyas?_rdr" target="_blank">
                    <i class="ri-facebook-fill"></i>
                  </a>
                  <a href="https://instagram.com/shrey_srt10" target="_blank">
                    <i class="ri-instagram-fill"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/shreyas-shinde-447527110/" target="_blank">
                    {" "}
                    <i class="ri-linkedin-box-fill"></i>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 mt-4">
            <div
              class="member d-flex align-items-start"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div class="pic">
                <img
                  src={kritikaImg}
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="member-info">
                <h4>Kritika Rangra</h4>
                <span>Illustrator & Visual Designer</span>
                <p>
                We call her an Artist. She looks at designing, illustrating, representing our ideas through visuals making everything look pretty and classic!
                </p>
                <div class="social">
                  <a href="https://www.facebook.com/kritika.rangra" target="_blank">
                    <i class="ri-facebook-fill"></i>
                  </a>
                  <a href="https://www.instagram.com/starrrysea/" target="_blank">
                    <i class="ri-instagram-fill"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/kritika-rangra-09/" target="_blank">
                    {" "}
                    <i class="ri-linkedin-box-fill"></i>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
