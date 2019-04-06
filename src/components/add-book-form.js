import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from './input';
import {required, nonEmpty} from '../validators';
import {connect} from 'react-redux';
import {fetchAddBook} from '../actions';
import './add-book-form.css';

export class AddBook extends React.Component {
  onSubmit(values) {
    this.props.dispatch(fetchAddBook(values))
    this.props.history.push(`/books/${values.status}`)
  }

  render() {
    let error;
    if(this.props.error) {
      error = (
      <div className='form-error' aria-live='polite'>
        {this.props.error}
      </div>
      )
    }

    return (
      <div className='add-book'>
        <h2 className='add-book-title'>Add a Book</h2>
        {error}
        <form className='add-book-form'
        onSubmit={this.props.handleSubmit((values) => this.onSubmit(values))}
        >
          <label htmlFor='name' className='add-book-label'>Title</label>
          <Field
              component={Input}
              type='text'
              name='name'
              id='name'
              validate={[required, nonEmpty]}
          />
          <label htmlFor='author' className='add-book-label'>Author</label>
          <Field
              component={Input}
              type='text'
              name='author'
              id='author'
          />
          <label htmlFor='status' className='add-book-label'>Status</label>
          <Field name='status' component='select' id='status' validate={[required, nonEmpty]}>
            <option></option>
            <option value='unread'>Unread</option>
            <option value='read'>Read</option>
            <option value='in-process'>in-process</option>
          </Field>
          <label htmlFor='review' className='add-book-label'>Review</label>
          <Field name='review' id='review' component='textarea' />
          <label htmlFor='public' className='add-book-label'>Public or private</label>
          <div className='radio-public'>
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
          <button className='add-button' disabled={this.props.pristine || this.props.submitting}>Add book</button>
        </form>
      </div>
    )
  }
}

const bookComponent = reduxForm({
  form: 'add-book'
})(connect()(AddBook));

export default bookComponent;