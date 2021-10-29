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

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Landing />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/page" component={Work} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
