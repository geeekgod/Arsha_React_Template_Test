import React from 'react'
import './footer.css';
import {
  Link, useLocation
} from "react-router-dom";

export const Footer = () => {
  
  return (
    <footer id="footer">

      <div className="footer-top">
        <div className="container">
          <div className="row">

            <div className="col-md-4 footer-contact">
              <h3>SSINGULARITY</h3>
              <p>
                Thane, Maharashtra
            <br />
                <br />
                <strong>Phone:</strong> +91 99677 14270 <br />
                <strong>Email:</strong> info@ssingularity.co.in<br />
              </p>
            </div>

            <div className="col-md-4 footer-links">
              <h4>Our Blogs</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <Link to="/technology">Technology</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/design">Design</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/content">Content</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/videos">Videos</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/voice-overs-translations">Voiceovers & Translations</Link></li>
              </ul>
            </div>

            <div className="col-md-4 footer-links">
              <h4>Our Social Networks</h4>
              <p>Connect with Us!</p>
              <div className="social-links mt-3">
                <a href="https://www.facebook.com/SSingularity-Technologies-108597878068952" target="_blank" className="facebook"><i className="bx bxl-facebook"></i></a>
                <a href="https://www.instagram.com/ssingularitytechnologies/" target="_blank" className="instagram"><i className="bx bxl-instagram"></i></a>
                <a href="https://www.linkedin.com/company/ssingularity-technologies/" target="_blank" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                <a href="https://www.youtube.com/channel/UCI-BQW7t7FE9wMOisyssFGg" target="_blank" classNameName="youtube"><i className='bx bxl-youtube'></i></a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="container footer-bottom clearfix">
        <div className="copyright">
          &copy; Copyright <strong><span>SSINGULARITY</span></strong>. <br/> All Rights Reserved
      </div>
        <div className="credits">
          Designed & Developed by Our Team
      </div>
      </div>
    </footer>
  )
}

export default Footer;