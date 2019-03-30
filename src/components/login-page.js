import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import SignUpForm from './signUpForm';
import LoginForm from './loginForm';

export default function LoginPage() {
   
  return (
    <div>
      <div>
        <NavLink to = '/'>Sign In</NavLink>
        <NavLink to = '/sign-up'>Sign Up</NavLink>
      </div>
      <Route exact path = '/' component={LoginForm} />
      <Route exact path = '/sign-up' component={SignUpForm} />
    </div>
  )
}
