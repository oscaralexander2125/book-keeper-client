import React, { Component } from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import './App.css';
import LoginPage from'./components/login-page';
import LandingPage from './components/landing-page';

class App extends Component {
  render() {
    
    return (
      <div className="Ap">
        <Switch>
          <Route exact path='/' component={LoginPage}></Route>
          <Route exact path='/sign-up' component={LoginPage}></Route>
          <Route path='/books' component={LandingPage}></Route>
          <Redirect from='/books' to='/books/read' />
        </Switch>
      </div>
    );
  }
}

export default App;
//have all routes in one file
