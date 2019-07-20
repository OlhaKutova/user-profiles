import React, {Component} from 'react';
import {connect} from "react-redux";
import {getUserData} from "../../../actions/user-data-actions";
import './user-list.scss';
import UserListHeading from "./user-list-heading/user-list-heading";

class UserList extends Component {
   render() {
      const {userData} = this.props;
      return (
         <div className="user-list-wrapper">
            <UserListHeading/>
            {userData.map((item, index) => {
               return (
                  <div className="user-info" key={index}>
                     <div><span>{item.name}</span></div>
                     <div><span>{item.password}</span></div>
                     <div><span>{item.lastLoginTime}</span></div>
                     <div><span>{item.loginTimeFrame}</span></div>
                     {this.props.children}
                  </div>
               )
            })}
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      userData: state.usersData.users
   }
};

export default connect(mapStateToProps, {getUserData})(UserList);
