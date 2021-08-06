import React, { useState } from "react";
import './header.css';
import logoImg from '../../img/logo.png';
import { Link, useLocation } from 'react-router-dom'

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

  const onMenuBtnClick = () => {
    if (window.innerWidth < 991) {
      setMobileNav(!mobileNav);
    }
  }

  const pageLocation = useLocation();
  const currentLocation = pageLocation.pathname;
  console.log(currentLocation);

  
  // TO reload the page when on home page
  function refreshPage() {
    if(currentLocation == "/"){
      window.location.reload();
    }
  }

  const navLinks = () => {
    if (currentLocation == "/") {
      return (
        <>
          <li>
            <a onClick={() => { onMenuBtnClick() }} className="nav-link scrollto active" href="#hero">
              Home
                </a>
          </li>
          <li>
            <a onClick={() => { onMenuBtnClick() }} className="nav-link scrollto" href="#about">
              About Us
                </a>
          </li>
          <li>
            <a onClick={() => { onMenuBtnClick() }} className="nav-link scrollto" href="#services">
              Our Services
                </a>
          </li>
          <li>
            <a onClick={() => { onMenuBtnClick() }} className="nav-link   scrollto" href="#portfolio">
              Our Portfolio
                </a>
          </li>
          <li>
            <a onClick={() => { onMenuBtnClick() }} className="nav-link scrollto" href="#team">
              Our Team
                </a>
          </li>
          <li>
            <a onClick={() => { onMenuBtnClick() }} className="nav-link scrollto" href="#contact">
              Contact Us
                </a>
          </li>
        </>
      );
    }
    else {
      return (
        <>
          <li>
            <Link onClick={() => { onMenuBtnClick() }} className="nav-link scrollto active" to="/">
              Home
                </Link>
          </li>
          <li>
            <Link onClick={() => { onMenuBtnClick() }} className="nav-link scrollto" to="/">
              About Us
                </Link>
          </li>
          <li>
            <Link onClick={() => { onMenuBtnClick() }} className="nav-link scrollto" to="/">
              Our Services
                </Link>
          </li>
          <li>
            <Link onClick={() => { onMenuBtnClick() }} className="nav-link scrollto" to="/">
              Our Portfolio
                </Link>
          </li>
          <li>
            <Link onClick={() => { onMenuBtnClick() }} className="nav-link scrollto" to="/">
              Our Team
                </Link>
          </li>
          <li>
            <Link onClick={() => { onMenuBtnClick() }} className="nav-link scrollto" to="/">
              Contact Us
                </Link>
          </li>
        </>
      );
    }
  }
  return (
    // Header
    <>
      <header id="header" className={navbar ? "fixed-top header-scrolled" : "fixed-top "}>
        <div className="container navWrapper d-flex align-items-center">
          <Link to="/" onClick={()=>refreshPage()}><div className="siteLogo">
            <img src={logoImg} alt="header logo" />
            <h1 className="logo me-auto">
              SSINGULARITY TECHNOLOGIES
          </h1>
          </div></Link>
          <nav id="navbar" className={mobileNav ? "navbar navbar-mobile" : "navbar"}>
            <ul>
              {navLinks()}
            </ul>
            <i onClick={() => { onMenuBtnClick() }} className={mobileNav ? "bi bi-x mobile-nav-toggle" : "bi bi-list mobile-nav-toggle"}></i>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;