import React, { useState, useEffect } from 'react';
import '../../App.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import PreLoader from '../../components/preloader/PreLoader';
import commingSoonImg from '../../img/comming-soon.svg';
import './comming-soon.css';
import BackToTop from '../../components/backtotop/BackToTop';

export const ComingSoon = () => {
    const [loader, setLoader] = useState(true);
    const checkLoader = () => {
        if (Header && Footer) {
            setLoader(false);
        }
        else {
            setLoader(true);
        }
    }
    useEffect(() => {
        document.title = "Comming Soon SSingularity";
        setInterval(checkLoader, 3000);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    return (
        <div className="App">
            {loader ? < PreLoader /> : null}
            <Header />
            <div className="comming-soon">
                <h1>Coming Soon</h1>
                <div className="imgContainer">
                    <img className="commingSoonImg" src={commingSoonImg} alt="" />
                </div>

                <div class="loader">
                    <div class="loaderBar"></div>
                </div>
            </div>
            <Footer />
            <BackToTop />
        </div>
    )
}

export default ComingSoon;