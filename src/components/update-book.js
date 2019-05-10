import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {fetchUpdateBook} from '../actions';
import './update-book.css';

export class UpdateBook extends React.Component {
  onSubmit(values) {
    values.id=this.props.id
    const bookStatus = values.status || this.props.updateBook.status
    this.props.dispatch(fetchUpdateBook(values, this.props.id))
    this.props.history.push(`/books/${bookStatus}`)
  }

  load(book) {
    this.props.initialize({review:book.review, status:book.status, public:book.public});
  }

  render() {
    let error
    if(this.props.error) {
      error = (
      <div className='form-error' aria-live='polite'>
        {this.props.error}
      </div>
      )
    }

    return (
      <div className='update-book'>
        <h2 className='update-title'>Update Book</h2>
        <div><button className='info-button' type="button" onClick={() => this.load(this.props.updateBook)}>Load Info</button></div>
        <form className='update-form'
        onSubmit={this.props.handleSubmit((values) => this.onSubmit(values))}
        >
          {error}
          <label htmlFor='status' className='update-label'>Status</label>
          <Field name='status' component='select' id='status' >
            <option></option>
            <option value='unread'>Unread</option>
            <option value='read'>Read</option>
            <option value='in-process'>in-process</option>
          </Field>
          <label htmlFor='review' className='update-label'>Review</label>
          <Field name='review' id='review' component='textarea' />
          <label htmlFor='public' className='update-label'>Public or private</label>
          <div className='update-public'>
            <label>
              <Field
                name="public"
                component="input"
                type="radio"
                value="public"
              />{' '}
              Public
            </label>
            <label>
              <Field
                name="public"
                component="input"
                type="radio"
                value="private"
              />{' '}
              Private
            </label>
          </div>
          <button className='update-button' disabled={this.props.pristine || this.props.submitting}>Update</button>
        </form>
      </div>
    )
  } 
}

const mapStateToProps = (state, props) => ({
  id: state.books.id,
  updateBook: state.books.updateBook
})

export default reduxForm({
  form: 'update-book'
})(connect(mapStateToProps)(UpdateBook));
