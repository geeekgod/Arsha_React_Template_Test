import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Clients from "../components/clients/Clients";
import About from "../components/about/About";
import Services from "../components/services/Services";
import CallToAction from '../components/calltoaction/CallToAction';
import Portfolio from '../components/portfolio/Portfolio';
import Team from '../components/team/Team';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import BackToTop from '../components/backtotop/BackToTop';
import PreLoader from '../components/preloader/PreLoader';

export const Home = () => {

  const [loader, setLoader] = useState(true);
  const checkLoader = () => {
    if (Header && Hero && Clients && About && Services && Portfolio && CallToAction && Team && Contact && Footer && BackToTop) {
      setLoader(false);
    }
    else {
      setLoader(true);
    }
  }
  useEffect(() => {
    document.title = "SSINGULARITY";
    setInterval(checkLoader, 3000);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  return (
    <div>
        {loader ? < PreLoader /> : null}
        <Header />
        {loader ? null : <Hero />}
        <Clients />
        <About />
        <Services />
        <Portfolio />
        <CallToAction />
        <Team />
        <Contact />
        <Footer />
        <BackToTop />
    </div>
  );
};

export default Home;
