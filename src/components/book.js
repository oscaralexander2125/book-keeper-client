import React from 'react';
import {connect} from 'react-redux';
import {bookId, updateBook, fetchDeleteBook} from '../actions';

export class Book extends React.Component {
  updateBook(e) {
    this.props.dispatch(bookId(this.props.id))
    this.props.dispatch(updateBook(this.props))
    return this.props.history.push('/books/update')
  }

  deleteBook(e) {
    console.log(e.currentTarget.getAttribute('data-book-id'));
    const bookId = e.currentTarget.getAttribute('data-book-id');
    return this.props.dispatch(fetchDeleteBook(bookId))
  }

  render() {
    console.log(this.props)
    let book;
    if (this.props.match.path === '/books/public') {
      book = 
      <div>
        <h2>
          {this.props.name}
        </h2>
        <p>
          {this.props.author}
        </p>
        <p>
          {this.props.review}
        </p>
      </div>
    } else {
      book = 
        <div>
          <h2>
            {this.props.name}
          </h2>
          <p>
            {this.props.author}
          </p>
          <p>
            {this.props.review}
          </p>
          <button onClick={(e) => this.updateBook(e)} > Update </button>
          <button data-book-id={this.props.id} onClick={(e) => this.deleteBook(e)}> Delete </button>
        </div>
    }
    return (
      <div>
        {book}
      </div>
    )
  }
}

export default connect()(Book);