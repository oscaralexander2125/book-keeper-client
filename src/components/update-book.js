import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {fetchUpdateBook} from '../actions'

export class UpdateBook extends React.Component {
  onSubmit(values) {
    values.id=this.props.id
    return this.props.dispatch(fetchUpdateBook(values, this.props.id))
  }
  render() {
    console.log(this.props.id)
    console.log(this.props.book)
    return (
      <form className='update-form'
        onSubmit={this.props.handleSubmit((values) => this.onSubmit(values))}
      >
      <label htmlFor='status' className='form-label'>Status</label>
        <Field name='status' component='select' id='status' defaultValue={this.props.book.status}>
          <option></option>
          <option value='unread'>Unread</option>
          <option value='read'>Read</option>
          <option value='in-process'>in-process</option>
        </Field>
        <label htmlFor='review' className='form-label'>Review</label>
        <Field name='review' id='review' component='textarea' />
        <label htmlFor='public' className='form-label'>Public or private</label>
        <div>
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
        <button disabled={this.props.pristine || this.props.submitting}>Update</button>
      </form>
    )
  } 
}

const mapStateToProps = (state, props) => ({
  id: state.books.id,
  book: state.books.updateBook
})

export default reduxForm({
  form: 'update-book'
})(connect(mapStateToProps)(UpdateBook));