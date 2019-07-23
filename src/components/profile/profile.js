import React, {Component, Fragment} from 'react';
import {Route, withRouter} from 'react-router-dom';
import UserLoggedIn from "./user-logged-in/user-logged-in";
import './profile.scss';
import {connect} from "react-redux";
import UserLogOut from "./user-logged-out/user-logged-out";
import EditUserData from "./user-logged-in/user-list-profile/edit-user-data/edit-user-data";

class Profile extends Component {

   render() {
      const { match } = this.props;
      // const { isLoggedIn } = this.props.activeUser;
      const isLoggedIn = true;

      return (
        <Fragment>
           {isLoggedIn ? <UserLoggedIn/> : <UserLogOut/>}
           <Route path={`${match.path}/add`} component={EditUserData} />
           <Route path={`${match.path}/edit/:editID`} component={EditUserData} />
        </Fragment>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      activeUser: state.usersData.activeUser
   }
};

export default connect(mapStateToProps, {})(withRouter(Profile));
