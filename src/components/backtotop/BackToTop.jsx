import React,{useState} from "react";
import "./backtotop.css";

export const BackToTop = () => {

  
  const [scrollBack, setScrollBack] = useState(false);

  const  toggleBacktotop = ()=>{
    if(window.scrollY>100){
        setScrollBack(!scrollBack);
    }
}

  window.onload = function() {
    toggleBacktotop();
};


  return (
    <div>
      <a
        href="#"
        class={scrollBack ? "back-to-top d-flex align-items-center justify-content-center active" : "back-to-top d-flex align-items-center justify-content-center"}
      >
        <i class="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
};

export default BackToTop;
