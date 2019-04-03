import React from 'react';
import {NavLink, Redirect, Link} from 'react-router-dom';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from'../local-storage';
import {connect} from 'react-redux';
import './sidebar.css';

export class SideBar extends React.Component {
  removeAuthToken() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  /*<ul className='side-bar-list'>
          <li>
            <NavLink to='/books/read'>Read</NavLink>
          </li>
          <li>
            <NavLink to='/books/un-read'>Unread</NavLink>
          </li>
          <li>
            <NavLink to='/books/in-process'>Reading</NavLink>
          </li>
          <li>
            <NavLink to='/books/public'>Public Books</NavLink>
          </li>
        </ul>*/ 
  
  render () {
    let logOut;
    logOut = <NavLink to='/' className='menuLink' onClick={() => this.removeAuthToken()}>LogOut</NavLink>;
    
    if(!this.props.user) {
      return <Redirect to='/' />
    }

    return (
      <nav className='side-bar'>
        <div className='burger-icon'>
          <h2 className='title-burger'>One Book</h2>
          <label className='burger-label' htmlFor='toggle'>&#9776;</label>
          <input type='checkbox' id='toggle' />
          <div className='menu'>
            <Link to='/books/read' className='menuLink'>Read</Link>
            <Link to='/books/un-read' className='menuLink'>Unread</Link>
            <Link to='/books/in-process' className='menuLink'>Reading</Link>
            <Link to='/books/public' className='menuLink'>Public Books</Link>
            <Link to='/books/add-book' className='menuLink'>Add Book</Link>
            {logOut}
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state, props) => ({
  user: state.auth.currentUser
})

export default connect(mapStateToProps)(SideBar);