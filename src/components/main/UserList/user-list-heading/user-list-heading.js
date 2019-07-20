import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import './user-list-heading.scss';

class UserListHeading extends Component {
   render() {

      const userLoggedIn = this.props.activeUser.isLoggedIn;

      return (
         <div className="heading-user-list">
            <div><span>Name</span></div>
            <div><span>Password</span></div>
            <div><span>Last login</span></div>
            <div><span>Login timeframe</span></div>
            {userLoggedIn
               ? (<Fragment>
                  <div><span>Set timeframe login</span></div>
                  <div><span>Edit user information</span></div>
                  <div><span>Delete user</span></div>
               </Fragment>)
               : null}
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      activeUser: state.usersData.activeUser
   }
};

export default connect(mapStateToProps, {})(UserListHeading);
