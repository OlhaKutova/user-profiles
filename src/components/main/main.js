import React, {Component} from 'react';
import './main.scss';
import SearchUserPanel from "./search-user-panel/search-user-panel";
import SortLastLogin from "./sort-last-user-login/sort-last-login";
import UserListHeading from "./user-list-heading/user-list-heading";
import UserList from "./user-list/user-list";

class Main extends Component {

   render() {
      return (
         <main>
            <SearchUserPanel/>
            <SortLastLogin/>
            <div className="user-list-wrapper">
               <UserListHeading type="main" />
               <UserList type="main"/>
            </div>
         </main>
      );
   }
}
export default Main;
