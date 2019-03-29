import React from 'react';
import {Route} from 'react-router-dom';
import NavBar from './navbar';
import SideBar from './sidebar';
import Books from './books';
import AddBook from './add-book-form';
import UpdateBook from './update-book';

export default class LandingPage extends React.Component {

  render() {
    console.log(this.props)
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

    return (
      <div>
        <NavBar />
        <SideBar />
        <Route exact path={`${this.props.match.path}/read`} render={ReadRoute}></Route>
        <Route exact path={`${this.props.match.path}/un-read`} render={UnreadRoute} ></Route>
        <Route exact path={`${this.props.match.path}/in-process`} render={Reading} ></Route>
        <Route exact path={`${this.props.match.path}/add-book`} component={AddBook}></Route>
        <Route exact path={`${this.props.match.path}/update`} component={UpdateBook}></Route>
      </div>
    )
  }
}

//this.props.history.push inside update method
//