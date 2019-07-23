import React, {Component} from 'react';
import SearchUserNamePanel from "../../main/search-user-name-panel/search-user-name-panel";
import SortLastLogin from "../../main/sort-last-user-login/sort-last-user-login";
import UserListMainHeading from "../../main/user-list-main/user-list-main-heading/user-list-main-heading";
import UserListMain from "../../main/user-list-main/user-list-main";
import PersonalUserDetails from "./user-list-profile/personal-user-details/personal-user-details";
import './user-logged-in.scss';

class UserLoggedIn extends Component {
   render() {
      return (
         <div className="profile-wrapper">
            <PersonalUserDetails/>
            <SearchUserNamePanel/>
            <SortLastLogin/>
            <div className="user-list-wrapper">
               <UserListMainHeading type="profile"/>
               <UserListMain type="profile"/>
            </div>
         </div>
      );
   }
}



export default UserLoggedIn;
