import React from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from'../local-storage';
import {connect} from 'react-redux';
import './navbar.css';

export class NavBar extends React.Component {
  removeAuthToken() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }
  render() {
    let logOut;
    //if(this.props.user) {
      logOut = <NavLink to='/' className='logout-link' onClick={() => this.removeAuthToken()}>Log Out</NavLink>
    /*} else {
      //logOut = <Redirect to='/' />
    }*/
    if(!this.props.user) {
      return <Redirect to='/' />
    }
  
    return (
      <div className='nav-bar'>
        <NavLink to='/books/add-book' className='add-book-link'>Add Book</NavLink>
        {logOut}
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  auth: state.auth.authToken,
  user: state.auth.currentUser
})

export default connect(mapStateToProps)(NavBar);