import React from 'react';
import {Route} from 'react-router-dom';
import SideBar from './sidebar';
import Books from './books';
import AddBook from './add-book-form';
import UpdateBook from './update-book';

export default class LandingPage extends React.Component {

  render() {
    const ReadRoute = (props) => {
      return (
        <Books {...props} status={"read"} />
      )                  
    }
    const UnreadRoute = (props) => {
      return (
        <Books {...props} status={'unread'} />
      )                  
    }
    const Reading = (props) => {
      return (
        <Books {...props} status={'in-process'} />
      )                  
    }

    const Public = (props) => {
      return (
        <Books {...props} status={'public'} />
      )                  
    }

    return (
      <div className='landing-page-div'>
        <SideBar />
        <Route exact path={`${this.props.match.path}/read`} render={ReadRoute} />
        <Route exact path={`${this.props.match.path}/unread`} render={UnreadRoute} />
        <Route exact path={`${this.props.match.path}/in-process`} render={Reading} />
        <Route exact path={`${this.props.match.path}/public`} render={Public} />
        <Route exact path={`${this.props.match.path}/add-book`} render={(props) => <AddBook {...props} />} />
        <Route exact path={`${this.props.match.path}/update`} render={(props) => <UpdateBook {...props} />} />
      </div>
    )
  }
}


