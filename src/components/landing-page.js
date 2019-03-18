import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import NavBar from './navbar';
import SideBar from './sidebar';
import Books from './books';

export default class LandingPage extends React.Component {

  render() {
    return (
      <div>
        <NavBar />
        <SideBar />
        <Route path='/books/read' component={Books}></Route>
        <Route path='/books/un-read' component={Books}></Route>
        <Route path='/books/in-process' component={Books}></Route>
      </div>
    )
  }
}