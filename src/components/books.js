import React from 'react';
import Book from './book';
import {connect} from 'react-redux';
import {fetchBooks, fetchPublicBooks} from '../actions';

export class Books extends React.Component {
  componentDidMount() {
    console.log(this.props.status)
    if(this.props.status === 'public') {
      console.log('hi')
      return this.props.dispatch(fetchPublicBooks(this.props.status))
    } else {
        console.log('books component in didmount method')
        return this.props.dispatch(fetchBooks(this.props.status))
  
    }
  }

  render() {
    const upperCase = this.props.status.charAt(0).toUpperCase() + this.props.status.slice(1);
    if (this.props.loading) {
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
        <h2>{upperCase}</h2>
        <div>
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