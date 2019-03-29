import React from 'react';
import Book from './book';
import {connect} from 'react-redux';
import {fetchBooks} from '../actions';

export class Books extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchBooks(this.props.status))
  }

  render() {
    console.log(this.props)
    const bookList = this.props.books.map((book, index) => (
      <div key={index}>
        <Book 
          {...this.props}
          {...book}
        />
      </div>
    )) 

    if (this.props.loading) {
      return <p>Loading...</p>
    }

    return (
      <div className='list-books'>
        <ul>
          {bookList}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  books: state.books.books,
  loading: state.books.loading
})

export default connect(mapStateToProps)(Books);