import React, { Component } from 'react';
import {connect} from "react-redux";
import UserLoggedIn from "./userLoggedIn/userLoggedIn"
import UserIsNotLoggedIn from "./userIsNotLoggedIn/user-is-not-logged-in";
import './profile.scss';

class Profile extends Component {

   render() {
      return (
         <div>
            profile
         </div>
      );
   }
}


export default Profile;
