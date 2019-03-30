import React, { Component } from 'react';
import {Route, Redirect, Switch, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import LoginPage from'./components/login-page';
import LandingPage from './components/landing-page';

class App extends Component {
  render() {
    
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={LoginPage} />
            <Route exact path='/sign-up' component={LoginPage} />
            <Route path='/books' component={LandingPage} />
            
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
//have all routes in one file
