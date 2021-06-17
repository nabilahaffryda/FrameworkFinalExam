import React, { Component } from 'react'
import Header from './containers/Header'
import Footer from './containers/Footer'
import Home from './components/Home'
import Product from './components/Product'
import Logout from './components/Logout'
import Login from './components/Login'
import { connect } from "react-redux";
import ContactUs from './components/ContactUs'
import ProtectedRoute from "./components/protectedRoute";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App (props){
  const { isAuthenticated, isVerifying } = props;
    return (
      <Router>
        <div>
          <Header/>
          <Switch>
          <ProtectedRoute
            exact
            path="/contactus"
            component={ContactUs}
            isAuthenticated={isAuthenticated}
            isVerifying={isVerifying}
          />
            <Route exact path="/" component={Home} />
            <Route path="/product" component={Product} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
          </Switch>
          <Footer/>
        </div>
      </Router>
    )
}
function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying,
  };
}
export default connect(mapStateToProps)(App);