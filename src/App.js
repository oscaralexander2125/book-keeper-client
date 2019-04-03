import React, { Component } from 'react';
import {Route, Redirect, Switch, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import LoginPage from'./components/login-page';
import LandingPage from './components/landing-page';
import ErrorRoute from './components/error-route';

class App extends Component {
  render() {
    
    return (
      <Router>
        <div className="Ap">
          <Switch>
            <Route exact path='/' component={LoginPage} />
            <Route exact path='/sign-up' component={LoginPage} />
            <Route path='/books' component={LandingPage} />
            <Route component={ErrorRoute} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
//have all routes in one file
