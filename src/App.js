import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainAbout from './components/AboutPage/MainAbout/MainAbout';
import Home from './components/HomePage/MainHome/MainHome';
import Footer from './components/Shared/Footer';
import Header from './components/Shared/Header/Header';

export default function App() {
  return (
    <Router>
      <Header />
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
