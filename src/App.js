import React, {useEffect} from 'react';
import Home from './pages/Home';
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import ComingSoon from './pages/coming-soon/ComingSoon';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

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
    <Router>   
    <div className="App">
     
    </div>
      <Switch>
      <Route exact path="/"><Home/></Route>
      <Route path="/technology"><ComingSoon/></Route>
      <Route path="/design"><ComingSoon/></Route>
      <Route path="/content"><ComingSoon/></Route>
      <Route path="/videos"><ComingSoon/></Route>
      <Route path="/voice-overs-translations"><ComingSoon/></Route>
      </Switch>
    </Router>
  );
}

export default App;
