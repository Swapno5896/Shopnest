import React from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Footer from "./components/Shared/Footer";
import Header from './components/Shared/Header/Header';
import Trending from "./components/Shared/Trending/Trending";
import Home from "./pages/HomePage/Home";
import Login from './pages/Login/Login';
import SearchProduct from "./pages/SearchProducts/SearchProducts";
import SingleShop from "./pages/SingleShop/SingleShop";
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
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/trendings">
          <Trending />
        </Route>
        <Route path="/shop/:id">
          <SingleShop />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}