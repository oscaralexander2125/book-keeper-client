import React from 'react';
import Book from './book';
import {connect} from 'react-redux';
import {fetchBooks} from '../actions';

export class Books extends React.Component {
  componentDidMount() {
    console.log('books component in didmount method')
    this.props.dispatch(fetchBooks(this.props.status))
    
  }

  render() {
    if (this.props.loading || this.props.authLoading) {
      return <p>Loading...</p>
    }
    console.log(this.props)
    const bookList = this.props.books.map((book, index) => (
      <div key={index}>
        <Book 
          {...this.props}
          {...book}
        />
      </div>
    )) 

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
  loading: state.books.loading,
  authLoading: state.auth.loading
})

export default connect(mapStateToProps)(Books);