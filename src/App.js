import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Wrapper from "./components/wrapper/wrapper";
import Profile from "./components/profile/profile";
import Main from "./components/main/main";
import Login from "./components/login/login";
import ErrorMessage from "./components/error-message/error-message";
import './App.scss';
import {connect} from "react-redux";
import {getUserData} from "./actions/user-data-actions";

class App extends Component {

   componentDidMount() {
      this.props.getUserData();
   }

   render() {
      return (
         <BrowserRouter>
            <div className="App">
               <Wrapper>
                  <Switch>
                     <Route exact path='/' component={Main}/>
                     <Route exact path='/profile/:id' component={Profile}/>
                     <Route exact path='/login' component={Login}/>
                     <Route path='*' component={ErrorMessage}/>
                  </Switch>
               </Wrapper>
            </div>
         </BrowserRouter>
      );
   }
}

export default connect(null, { getUserData })(App);
