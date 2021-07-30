import React,{useState ,useEffect} from "react";
import "./backtotop.css";

export const BackToTop = () => {

  
  const [scrollBack, setScrollBack] = useState(false);

  const  toggleBacktotop = ()=>{
    if(window.scrollY>100){
        setScrollBack(true);
    }
    else if(window.scrollY<=100){
      setScrollBack(false);
    }
}
const scrollToTop = () =>{
  window.scrollTo({
    top: 0, 
    behavior: 'smooth'
  });
};
window.addEventListener('scroll', toggleBacktotop);
  return (
    <div>
      <a
        href="#"
        onClick={scrollToTop}
        className={scrollBack ? "back-to-top active d-flex align-items-center justify-content-center" : "back-to-top d-flex align-items-center justify-content-center"}
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
};

export default BackToTop;
