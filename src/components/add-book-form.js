import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {required, nonEmpty, isTrimmed} from '../validators';

export default class AddBook extends React.Component {


  render() {
    return (
      <p>this will be the add form using redux-form</p>
    )
  }
}