import React from 'react';
import Book from './book';
import {connect} from 'react-redux';
import {fetchBooks, fetchPublicBooks} from '../actions';
import './books.css'

export class Books extends React.Component {
  componentDidMount() {
    if(this.props.status === 'public') {
      return this.props.dispatch(fetchPublicBooks(this.props.status))
    } else {
        return this.props.dispatch(fetchBooks(this.props.status))
      }
  }

  render() {
    const upperCase = this.props.status.charAt(0).toUpperCase() + this.props.status.slice(1);
    if (this.props.loading) {
      return <p>Loading...</p>
    }

    const bookList = this.props.books.map((book, index) => (
      <div key={index} className={`book-item-${index} books-items`}>
        <Book 
          {...this.props}
          {...book}
        />
      </div>
    )) 

    return (
      <div className='list-books'>
        <h2 className='book-title'>{upperCase}</h2>
        <div className='bookList'>
          {bookList}
        </div>
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