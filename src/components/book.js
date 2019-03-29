import React from 'react';
import {connect} from 'react-redux';
import {bookId, updateBook, fetchDeleteBook} from '../actions';

export class Book extends React.Component {
  updateBook(e) {
    console.log(this.props)
    this.props.dispatch(bookId(this.props.id))
    this.props.dispatch(updateBook(this.props))
    
    console.log(this.props.bookId)
    console.log('im connected');
    return this.props.history.push('/books/update')
  }

  deleteBook(e) {
    console.log(e.currentTarget.getAttribute('data-book-id'));
    const bookId = e.currentTarget.getAttribute('data-book-id');
    this.props.dispatch(fetchDeleteBook(bookId))
  }

  render() {
    return (
      <div>
        <h2>
          {this.props.name}
        </h2>
        <p>
          {this.props.author}
        </p>
        <button onClick={(e) => this.updateBook(e)} > Update </button>
        <button data-book-id={this.props.id} onClick={(e) => this.deleteBook(e)}> Delete </button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  books: state.books.books,
  bookId: state.books.id
})

export default connect(mapStateToProps)(Book);
/*create element thats hidden and save the id in that element
  click on action and pull up entire object and get id from that object

*/