import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import Work from "./components/pages/Work";
import Award from "./components/pages/Award";
import Contact from "./components/pages/Contact";
import Landing from "./components/layout/Landing";
import FooterSection from "./components/layout/FooterSection";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Landing />
        <About id="about" />
        <Work id="works" />
        <Award id="awrads" />
        <Contact id="contact" />
        <FooterSection />
        {/* <Switch>
          <Route exact path="/" component={About} id="about"/>
          <Route exact path="/" component={Work} />
        </Switch> */}
      </div>
    </Router>
  );
}

export default App;
