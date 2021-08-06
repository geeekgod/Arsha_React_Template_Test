import React from 'react';
import './preloader.css';
export const PreLoader = () => {
    return (
        <div className="preloader">
             <div className="d-flex text">
                <h3>We want to be the best at what we do - at work and at life.</h3>
            </div>
            <div id="preloader"></div>
        </div>
    )
}
export default PreLoader;