import React from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Footer from "./components/Shared/Footer";
import Header from './components/Shared/Header/Header';
import MainAbout from "./pages/AboutPage/MainAbout/MainAbout";
import Home from "./pages/HomePage/MainHome/MainHome";
import Login from './pages/Login/Login';
import SearchProduct from './pages/SerchProducts/SerchProducts';
export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <SearchProduct />
        </Route>
        <Route path="/about">
          <MainAbout />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}