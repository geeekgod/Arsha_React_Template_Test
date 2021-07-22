import React,{useEffect} from "react";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Clients from "../components/clients/Clients";
import About from "../components/about/About";
import WhyUs from "../components/whyus/WhyUs";
import Skills from "../components/skills/Skills";
import Services from "../components/services/Services";
import CallToAction from '../components/calltoaction/CallToAction';
import Portfolio from '../components/portfolio/Portfolio';
import Team from '../components/team/Team';
import Pricing from '../components/pricing/Pricing';
import Faq from '../components/faq/Faq';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import BackToTop from '../components/backtotop/BackToTop';

export const Home = () => {
  useEffect(() => {
    document.title = "SSINGULARITY";
  });
  return (
    <div>
      <Header />
      <Hero />
      <Clients />
      <About />
      {/* <WhyUs />
      <Skills /> */}
      <Services />
      <Portfolio />
      <CallToAction />
      <Team />
      {/* <Pricing />
      <Faq /> */}
      <Contact/>
      <Footer />
      <BackToTop/>
    </div>
  );
};

export default Home;
