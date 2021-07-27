import React from 'react'
import './footer.css';

export const Footer = () => {
    return (
        <footer id="footer">

    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-md-4 footer-contact">
            <h3>SSINGULARITY</h3>
            <p>
            Thane, Maharashtra
            <br/>
            <br/>
              <strong>Phone:</strong> +91 99677 14270 <br/>
              <strong>Email:</strong> info@ssingularity.co.in<br/>
            </p>
          </div>

          <div class="col-md-4 footer-links">
            <h4>Our Blogs</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Technology</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Design</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Content</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Videos</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Voiceovers & Translations</a></li>
            </ul>
          </div>

          <div class="col-md-4 footer-links">
            <h4>Our Social Networks</h4>
            <p>Connect with Us!</p>
            <div class="social-links mt-3">
              <a href="" class="facebook"><i class="bx bxl-facebook"></i></a>
              <a href="https://www.instagram.com/ssingularitytechnologies/" target="_blank" class="instagram"><i class="bx bxl-instagram"></i></a>
              <a href="https://www.linkedin.com/company/ssingularity-technologies/"  target="_blank" class="linkedin"><i class="bx bxl-linkedin"></i></a>
              <a href="https://www.youtube.com/channel/UCI-BQW7t7FE9wMOisyssFGg" target="_blank" className="youtube"><i class='bx bxl-youtube'></i></a>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="container footer-bottom clearfix">
      <div class="copyright">
        &copy; Copyright <strong><span>SSINGULARITY</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        Designed by Our Tech Team
      </div>
    </div>
  </footer>
    )
}

export default Footer;