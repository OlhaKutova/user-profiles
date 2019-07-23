import React, {Component} from 'react';
import './main.scss';
import SearchUserNamePanel from "./search-user-name-panel/search-user-name-panel";
import SortLastLogin from "./sort-last-user-login/sort-last-user-login";
import UserListMainHeading from "./user-list-main/user-list-main-heading/user-list-main-heading";
import UserList from "./user-list-main/user-list-main";

class Main extends Component {

   render() {
      return (
         <main>
            <SearchUserNamePanel/>
            <SortLastLogin/>
            <div className="user-list-wrapper">
               <UserListMainHeading type="main" />
               <UserList type="main"/>
            </div>
         </main>
      );
   }
}
export default Main;
