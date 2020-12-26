import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./Signup.js";
import Signin from "./Signin.js";
import Welcome from "./Welcome.js";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Signup} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/welcome" component={Welcome} />
        </Switch>
      </div>
    </Router>
  );
}
