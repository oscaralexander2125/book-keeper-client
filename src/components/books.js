import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Books extends React.Component {

  render() {
    return (
      <div className='list-books'>
        <p>Book1</p>
        <p>Book2</p>
      </div>
    )
  }
}