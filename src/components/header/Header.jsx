import React,{useState} from "react";
import './header.css';

export const Header = () => {

    const [navbar, setNavbar] = useState(false);
    const changeBg = () => {
      if (window.scrollY >= 100) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    window.addEventListener("scroll", changeBg);

    const [mobileNav, setMobileNav] = useState(false);

    const onMenuBtnClick = () =>{
      setMobileNav(!mobileNav);
    }

  return (
    // Header
    <>
      <header id="header" className={navbar ? "fixed-top header-scrolled" : "fixed-top "}>
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <a href="index.html">SSINGULARITY</a>
          </h1>
          <nav id="navbar" className={mobileNav ? "navbar navbar-mobile" : "navbar"}>
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="nav-link   scrollto" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#team">
                  Team
                </a>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Drop Down</span> <i className="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Drop Down 1</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Deep Drop Down</span>{" "}
                      <i className="bi bi-chevron-right"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
              <li>
                <a className="getstarted scrollto" href="#about">
                  Get Started
                </a>
              </li>
            </ul>
            <i onClick={()=>{onMenuBtnClick()}} className={mobileNav ? "bi bi-x mobile-nav-toggle" : "bi bi-list mobile-nav-toggle"}></i>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;