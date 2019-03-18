import React from 'react';
import {NavLink} from 'react-router-dom';

export default class SideBar extends React.Component {

  render() {
    return (
      <div className='side-bar'>
        <NavLink to='/books/read'>Read</NavLink>
        <NavLink to='/books/un-read'>Unread</NavLink>
        <NavLink to='/books/in-process'>Reading</NavLink>
      </div>
    )
  }
}