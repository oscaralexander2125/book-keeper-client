import React from 'react';
import {NavLink} from 'react-router-dom';

export default class NavBar extends React.Component {

  render() {
    return (
      <div className='nav-bar'>
        <NavLink to='/books/add-book'>Add Book</NavLink>
        <NavLink to ='/'>Log Out</NavLink>
      </div>
    )
  }
}