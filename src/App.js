import React, { Component } from 'react';
import {Route, Switch, Redirect, BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import './App.css';
import store from './store'
import LoginPage from'./components/login-page';
import LandingPage from './components/landing-page';
import ErrorRoute from './components/error-route';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Redirect exact from='/' to='sign-in' />
              <Route path='/sign-in' component={LoginPage} />
              <Route path='/sign-up' component={LoginPage} />
              <Route path='/books' component={LandingPage} />
              <Route component={ErrorRoute} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

//have all routes in one file
