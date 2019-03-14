import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
const passwordLength = length({min:10, max:72});
const matchesPassword = matches('password')

export class SignUpForm extends React.Component {
  onSubmit(values) {
    const {email, password, firstName, lastName} = values;
    const user = {email, password, firstName, lastName};
    return this.props
          .dispatch(registerUser(user))
          .then(() => this.props.dispatch(login(email, password)));
  }

  render() {
    return (
      <form className='signup-form'>
        <label htmlFor='firstName'>First name</label>
        <Field component={Input} type='text' name='firstName' />
        <label htmlFor='lastName'>Last name</label>
        <Field component={Input} type='text' name='lastName' />
        <label htmlFor='email'>Email</label>
        <Field component={Input} type='email' name='email' />
        <label htmlFor='password'>Password</label>
        <Field 
            component={Input} 
            type='password' 
            name='password'
            validate={[required, passwordLength, isTrimmed]}
        />
        <label htmlFor='passwordConfirm'>Confirm Password</label>
        <Field 
          component={Input} 
          type='password' 
          name='passwordConfirm'
          validate={[required, passwordLength, matchesPassword]}
        />
        <button
            type='submit'
            disabled={this.props.pristine || this.props.submitting}>
            Register
        </button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) => 
    dispatch(focus('registration', Object.keys(errors)[0]))
})(SignUpForm);