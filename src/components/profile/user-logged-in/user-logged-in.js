import React, {Component} from 'react';
import SearchUserPanel from "../../main/search-user-panel/search-user-panel";
import SortLastLogin from "../../main/sort-last-user-login/sort-last-login";
import './user-logged-in.scss';
import {connect} from "react-redux";
import UserListHeading from "../../main/user-list-heading/user-list-heading";
import UserList from "../../main/user-list/user-list";

class UserLoggedIn extends Component {
   render() {
      const {name, userImg} = this.props.activeUser;
      return (
         <div className="profile-wrapper">
            <div className="profile-info">
               <img src={userImg} alt="user"/>
               <div className="user-data">
                  <p>{name}</p>
                  <button>Log Out</button>
               </div>
            </div>
            <SearchUserPanel/>
            <SortLastLogin/>
            <div className="user-list-wrapper">
               <UserListHeading type="profile" />
               <UserList type="profile"/>
            </div>

         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      activeUser: state.usersData.activeUser
   }
};

export default connect(mapStateToProps, {})(UserLoggedIn);
