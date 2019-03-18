import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink, Redirect} from 'react-router-dom';
import './App.css';
import LoginPage from'./components/login-page';
import LandingPage from './components/landing-page';
import AddBook from './components/add-book-form';

class App extends Component {
  render() {
    return (
      <div className="Ap">
        <Route exact path='/' component={LoginPage}></Route>
        <Route exact path='/sign-up' component={LoginPage}></Route>
        <Route path='/books/' component={LandingPage}></Route>
        <Route exact path='/books/add-book' component={AddBook}></Route>
        <Redirect exact from='/books' to='/books/read' />
      </div>
    );
  }
}

export default App;
