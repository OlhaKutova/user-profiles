import React, {Component} from 'react';
import './user-list-heading.scss';
import HeadingUserListProfilePage
   from "../../profile/user-list-heading-profile-content/user-list-heading-profile-content";


class UserListHeading extends Component {
   render() {

      return (
         <div className="heading-user-list">
            <div><span>Name</span></div>
            <div><span>Password</span></div>
            <div><span>Last login</span></div>
            <div><span>Login timeframe</span></div>
            {(this.props.type === "profile") ? <HeadingUserListProfilePage/> : null}
         </div>
      );
   }
}

export default UserListHeading;
