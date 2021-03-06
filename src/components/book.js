import React from 'react';
import {connect} from 'react-redux';
import {bookId, updateBook, fetchDeleteBook} from '../actions';
import './book.css';

export class Book extends React.Component {
  updateBook() {
    this.props.dispatch(updateBook(this.props))
    this.props.dispatch(bookId(this.props.id))
    return this.props.history.push('/books/update')
  }

  deleteBook(e) {
    const bookId = e.currentTarget.getAttribute('data-book-id');
    return this.props.dispatch(fetchDeleteBook(bookId))
  }

  render() {
    let book;
    if (this.props.match.path === '/books/public') {
      book = 
      <div className='book-item'>
        <h3>
          Title: {this.props.name}
        </h3>
        <p>
          Author: {this.props.author}
        </p>
        <p>
          Review: {this.props.review}
        </p>
      </div>
    } else {
      book = 
        <div className='book-item'>
          <h3>
            Title: {this.props.name}
          </h3>
          <p>
            Author: {this.props.author}
          </p>
          <p>
            Review: {this.props.review}
          </p>
          <button className='book-button' onClick={() => this.updateBook()} > Update </button>
          <button className='book-button' data-book-id={this.props.id} onClick={(e) => this.deleteBook(e)}> Delete </button>
        </div>
    }
    return (
      <div className='render-book'>
        {book}
      </div>
    )
  }
}

export default connect()(Book);