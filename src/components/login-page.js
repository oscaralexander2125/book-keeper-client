import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import SignUpForm from './signUpForm';
import LoginForm from './loginForm';
import './login-page.css';

export default function LoginPage() {
   
  return (
    <div className= 'loginPage'>
      <h1 className='title'>One Book</h1>
      <div className='navLinkDiv'>
        <span className='navLink'><NavLink to = '/' className='pageSwitcher1'>Sign In</NavLink></span>
        <span className='navLink'><NavLink to = '/sign-up' className='pageSwitcher2'>Sign Up</NavLink></span>
      </div>
      <Route exact path = '/' component={LoginForm} />
      <Route exact path = '/sign-up' component={SignUpForm} />
    </div>
  )
}
