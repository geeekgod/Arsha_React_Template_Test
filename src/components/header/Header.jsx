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
      if(window.innerWidth < 991){
        setMobileNav(!mobileNav);
      }
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
                <a onClick={()=>{onMenuBtnClick()}} className="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a onClick={()=>{onMenuBtnClick()}} className="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a onClick={()=>{onMenuBtnClick()}} className="nav-link scrollto" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a onClick={()=>{onMenuBtnClick()}} className="nav-link   scrollto" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a onClick={()=>{onMenuBtnClick()}} className="nav-link scrollto" href="#team">
                  Team
                </a>
              </li>
              <li>
                <a onClick={()=>{onMenuBtnClick()}} className="nav-link scrollto" href="#contact">
                  Contact
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