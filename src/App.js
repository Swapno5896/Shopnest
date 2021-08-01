import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Shared/Footer';
import Header from './components/Shared/Header/Header';
import AuthProvider from './context/AuthContext';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/HomePage/Home';
import Signup from './Pages/Signup/Signup';
import SearchProduct from './Pages/SearchProducts/SearchProducts';
import SingleShop from './Pages/SingleShop/SingleShop';
import Login from './Pages/Login/Login';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import PrivateRoute from './components/Shared/PrivateRoute/PrivateRoute';
import UpdateProfile from './Pages/UpdateProfile/UpdateProfile';
export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <SearchProduct />
          </Route>
          <PrivateRoute path="/updateProfile">
            <UpdateProfile />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/resetPassword">
            <ForgotPassword />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/shop/:id">
            <SingleShop />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}
