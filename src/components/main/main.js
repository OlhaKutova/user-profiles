import React, {Component} from 'react';
import './main.scss';
import SearchUserPanel from "./search-user-panel/search-user-panel";
import SortLastLogin from "./sort-last-user-login/sort-last-login";
import UserList from "./UserList/user-list";

class Main extends Component {

   render() {
      return (
         <main>
            <SearchUserPanel/>
            <SortLastLogin/>
            <UserList/>
         </main>
      );
   }
}
export default Main;
