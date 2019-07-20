import React, {Component, Fragment} from 'react';
import UserLoggedIn from "./user-logged-in/user-logged-in";
import './profile.scss';
import {connect} from "react-redux";
import UserLogOut from "./user-log-out/user-log-out";

class Profile extends Component {

   render() {
      const {isLoggedIn} = this.props.activeUser;

      return (
        <Fragment>
           {isLoggedIn
           ? <UserLoggedIn/>
           : <UserLogOut/>}
        </Fragment>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      activeUser: state.usersData.activeUser
   }
};

export default connect(mapStateToProps, {})(Profile);
