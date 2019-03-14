import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';

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
    return (
      <form className='sign-in-form'
          onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values)
        )}>
        {error}
        <label htmlFor='email' className ='form-label'>Email</label>
        <Field
            component={Input}
            type='text'
            name='email'
            id='email'
            validate={[required, nonEmpty]}
        />
        <label htmlFor='password' className='form-label'>Password</label>
        <Field
            component={Input}
            type='password'
            name='password'
            id='password'
            validate={[required, nonEmpty]}
        />
        <button disabled={this.props.pristine || this.props.submitting}>Log in</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (error, dispatch) => dispatch(focus('login', 'email'))
})(LoginForm);