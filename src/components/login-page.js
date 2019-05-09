import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import SignUpForm from './signUpForm';
import LoginForm from './loginForm';
import About from './about';
import './login-page.css';

export default function LoginPage() {
   
  return (
    <div className= 'loginPage'>
      <div className='about-wide'>
        <About />
      </div>
      <div className='forms'>
        <h1 className='title'>One Book</h1>
        <div className='mobile-about'>
          <About />
        </div>
        <div className='navLinkDiv'>
          <span className='navLink'><NavLink to = '/sign-in' className='pageSwitcher1'>Sign In</NavLink></span>
          <span className='navLink'><NavLink to = '/sign-up' className='pageSwitcher2'>Sign Up</NavLink></span>
        </div>
        <div>demo <br /> email: test@test.com <br /> password: password1234</div>
        <Route exact path='/sign-in' render={(props) => <LoginForm {...props} />} />
        <Route exact path='/sign-up' render={(props) => <SignUpForm {...props} />} />
      </div>
    </div>
  )
}
