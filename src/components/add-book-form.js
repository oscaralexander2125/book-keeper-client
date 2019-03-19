import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {required, nonEmpty, isTrimmed} from '../validators';

export class AddBook extends React.Component {


  render() {
    return (
      <form className='add-book-form'>
        <label htmlFor='name' className='form-label'>Title</label>
        <Field
            component={Input}
            type='text'
            name='name'
            id='name'
            validate={[required, nonEmpty]}
        />
        <label htmlFor='author' className='form-label'>Author</label>
        <Field
            component={Input}
            type='text'
            name='author'
            id='author'
        />
        <label htmlFor='status' className='form-label'>Status</label>
        <Field name='status' component='select' id='status'>
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
        <button disabled={this.props.pristine || this.props.submitting}>Add book</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'add-book',
  //onSubmit: (error, dispatch) => dispatch()
})(AddBook);