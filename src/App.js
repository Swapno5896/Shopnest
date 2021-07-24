import React from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Footer from "./components/Shared/Footer";
import Header from './components/Shared/Header/Header';
// import MainAbout from "./pages/AboutPage/MainAbout/MainAbout";
import Login from "./Pages/Login/Login";
// import SearchProduct from './pages/SerchProducts/SerchProducts';
// import MainAbout from './Pages/AboutPage/MainAbout/MainAbout';
import MainHome from './Pages/HomePage/MainHome/MainHome';
export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <MainHome/>
        </Route>
        <Route path="/products">
          {/* <SearchProduct /> */}
        </Route>
        <Route path="/about">
          {/* <MainAbout/> */}
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}