import React from 'react';
import {NavLink} from 'react-router-dom';
import Book from './book';

export default class Books extends React.Component {

  render() {
    return (
      <div className='list-books'>
        <Book />
      </div>
    )
  }
}