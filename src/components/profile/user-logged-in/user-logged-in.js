import React, {Component} from 'react';
import SearchUserPanel from "../../main/search-user-panel/search-user-panel";
import SortLastLogin from "../../main/sort-last-user-login/sort-last-login";
import UserList from "../../main/UserList/user-list";
import './user-logged-in.scss';
import {connect} from "react-redux";

class UserLoggedIn extends Component {
   render() {
      const {name} = this.props.activeUser;
      return (
         <main className="profile-wrapper">
            <div className="profile-info">
               <img src="/images/user.jpg" alt="user"/>
               <div className="user-data">
                  <p>{name}</p>
                  <button>Log Out</button>
               </div>
            </div>
            <SearchUserPanel/>
            <SortLastLogin/>
            <UserList>
               <div><span>set timeframe login</span></div>
               <div>
                  <button className="edit-btn">edit</button>
               </div>
               <div>
                  <button className="delete-btn">
                     delete
                  </button>
               </div>
            </UserList>
         </main>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      activeUser: state.usersData.activeUser
   }
};

export default connect(mapStateToProps, {})(UserLoggedIn);
