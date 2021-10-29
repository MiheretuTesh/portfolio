import "./App.css";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <>
      <Switch>
        <Navbar />
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route exact path="/page" component={HashLinkPage} /> */}
        {/* <Route render={() => <Redirect to="/" />} /> */}
      </Switch>
    </>
  );
}

export default App;
