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
        <Award id="awards" />
        <Contact id="contact" />
        <FooterSection />
        <Switch>
          <Route
            path="/linkedin"
            component={() => {
              window.location.href =
                "www.linkedin.com/in/miheretu-teshale-064b39207";
              return null;
            }}
          />{" "}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
