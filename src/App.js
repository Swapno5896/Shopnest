import React from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Footer from "./components/Shared/Footer";
import Navbar from "./components/Shared/Navbar";
import MainAbout from "./pages/AboutPage/MainAbout/MainAbout";
import Home from "./pages/HomePage/MainHome/MainHome";

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