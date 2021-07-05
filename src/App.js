import React, {useEffect} from 'react';
import Home from './pages/Home';
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
    AOS.refresh();
  }, []);
  return (
    <div className="App">
     <Home />
    </div>
  );
}

export default App;
