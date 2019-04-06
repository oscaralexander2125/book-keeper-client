import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {Redirect} from 'react-router-dom';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';
import {connect} from 'react-redux';
import './loginForm.css';

export class LoginForm extends React.Component {
  onSubmit(values) {
    return this.props.dispatch(login(values.email, values.password))
  }

  render () {
    let error;
    if(this.props.error) {
      error = (
      <div className='form-error' aria-live='polite'>
        {this.props.error}
      </div>
      )
    }

    if(this.props.user) {
      return <Redirect to='/books/read' />
    }

    return (
      <div className='sign-in-div'>
        <form className='sign-in-form'
          onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values)
        )}>
          {error}
          <label htmlFor='email' className='form-label'>Email</label>
          <Field
              className='field-input'
              component={Input}
              type='email'
              name='email'
              id='email'
              validate={[required, nonEmpty]}
          />
          <label htmlFor='password' className='form-label'>Password</label>
          <Field
              className='field-input'
              component={Input}
              type='password'
              name='password'
              id='password'
              validate={[required, nonEmpty]}
          />
          <button className='login-submit' disabled={this.props.pristine || this.props.submitting}>Log in</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  user: state.auth.currentUser,
})

export default reduxForm({
  form: 'login',
  onSubmitFail: (error, dispatch) => dispatch(focus('login', 'email'))
})(connect(mapStateToProps)(LoginForm));
