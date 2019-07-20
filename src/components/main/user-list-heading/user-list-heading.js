import React, {Component, Fragment} from 'react';
import './user-list-heading.scss';

class UserListHeading extends Component {
   render() {

      return (
         <div className="heading-user-list">
            <div><span>Name</span></div>
            <div><span>Password</span></div>
            <div><span>Last login</span></div>
            <div><span>Login timeframe</span></div>
            {(this.props.type === "profile") ? (
               <Fragment>
                  <div><span>Set timeframe login</span></div>
                  <div><span>Edit user information</span></div>
                  <div><span>Delete user</span></div>
               </Fragment>
            ) : null}
         </div>
      );
   }
}

export default UserListHeading;
