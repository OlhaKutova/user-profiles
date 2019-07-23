import React, {Component} from 'react';
import './user-list-main-heading.scss';
import UserListProfileHeading
   from "../../../profile/user-logged-in/user-list-profile/user-list-profile-heading/user-list-profile-heading";


class UserListMainHeading extends Component {

   render() {

      return (
         <div className="heading-user-list">
            <div><span>Name</span></div>
            <div><span>Password</span></div>
            <div><span>Last login</span></div>
            <div><span>Login timeframe</span></div>
            {(this.props.type === "profile") ? <UserListProfileHeading/> : null}
         </div>
      );
   }
}

export default UserListMainHeading;
