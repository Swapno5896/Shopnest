import React from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Footer from "./components/Shared/Footer";
import Header from './components/Shared/Header/Header';
import Home from "./Pages/HomePage/Home";
import Login from './Pages/Login/Login';
import SearchProduct from "./Pages/SearchProducts/SearchProducts";
import SingleShop from "./Pages/SingleShop/SingleShop";
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
        <Route path="/shop/:id">
          <SingleShop />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}