import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, focus} from 'redux-form';
import {Redirect} from 'react-router-dom';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from './input';
import {required, matches, length, isTrimmed} from '../validators';
import './signUpForm.css';
const passwordLength = length({min:10, max:72});
const matchesPassword = matches('password')

export class SignUpForm extends React.Component {
  onSubmit(values) {
    values.username = values.email;
    const {email, password, firstName, lastName, username} = values;
    const user = {email, password, firstName, lastName};
    return this.props
          .dispatch(registerUser(user))
          .then(() => this.props.dispatch(login(username, password)));
  }

  render() {
    if(this.props.user) {
      return <Redirect to='/books/read' />
    }

    return (
      <div className='sign-up-div'>
        <form className='signup-form'
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))
      }>
        <label htmlFor='firstName' className='form-label'>First name</label>
        <Field component={Input} type='text' name='firstName' id='firstName' />
        <label htmlFor='lastName' className='form-label'>Last name</label>
        <Field component={Input} type='text' name='lastName' id='lastName' />
        <label htmlFor='email' className='form-label'>Email</label>
        <Field component={Input} type='email' name='email' id='email' />
        <label htmlFor='password' className='form-label'>Password</label>
        <Field 
            component={Input} 
            type='password' 
            name='password'
            id='password'
            validate={[required, passwordLength, isTrimmed]}
        />
        <label htmlFor='passwordConfirm' className='form-label'>Confirm Password</label>
        <Field 
          component={Input} 
          type='password' 
          name='passwordConfirm'
          validate={[required, passwordLength, matchesPassword]}
        />
        <button
            className='signup-submit'
            type='submit'
            disabled={this.props.pristine || this.props.submitting}>
            Register
        </button>
      </form>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  user: state.auth.currentUser
})

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) => 
    dispatch(focus('registration', Object.keys(errors)[0]))
})(connect(mapStateToProps)(SignUpForm));