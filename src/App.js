import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/home" exact component={Home} />
            <Redirect to="/home" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
