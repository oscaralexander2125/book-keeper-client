import React from 'react';
import {Route, Link, NavLink} from 'react-router-dom';
import SignUpForm from './signUpForm';
import LoginForm from './loginForm';

export default class LoginPage extends React.Component {
  
  render() {
    return (
      <div>
        <div>
          <NavLink to = '/'>Sign In</NavLink>
          <NavLink to = '/sign-up'>Sign Up</NavLink>
        </div>
        <Route exact path = '/' component={LoginForm}></Route>
        <Route exact path = '/sign-up' component={SignUpForm}></Route>
      </div>
    )
  }
} 