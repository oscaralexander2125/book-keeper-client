import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {fetchUpdateBook} from '../actions';
import './update-book.css';

export class UpdateBook extends React.Component {
  onSubmit(values) {
    values.id=this.props.id
    return this.props.dispatch(fetchUpdateBook(values, this.props.id))
  }

  componentWillMount() {
    //console.log(this.props.book)
    //this.props.initialize({review:this.props.book.review})
    
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
                //checked={this.props.book.public == 'public'}
              />{' '}
              Public
            </label>
            <label>
              <Field
                name="public"
                component="input"
                type="radio"
                value="private"
                //checked={this.props.book.public == 'private'}
              />{' '}
              Private
            </label>
          </div>
          <button disabled={this.props.pristine || this.props.submitting}>Update</button>
        </form>
      </div>
    )
  } 
}

const mapStateToProps = (state, props) => ({
  id: state.books.id,
  book: state.books.updateBook,
  //public: state.books.updateBook.public
})

export default reduxForm({
  form: 'update-book'
})(connect(mapStateToProps)(UpdateBook));

//css: responsive, images
//space with containers
//loading values into update form
//hamburger