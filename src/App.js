import React from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import MainAbout from "./components/AboutPage/MainAbout/MainAbout";
import Home from "./components/HomePage/MainHome/MainHome";
import Footer from "./components/Shared/Footer";
import Navbar from "./components/Shared/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <MainAbout />
          </Route>
        </Switch>
        <Footer />
    </Router>
  );
}