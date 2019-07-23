import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import Moment from 'react-moment';
import './user-list-main.scss';
import UserListProfileContent from "../../profile/user-logged-in/user-list-profile/user-list-profile";

class UserListMain extends Component {
   render() {

      const {userData, userNameFilter, lastLoginSortingType} = this.props;

      let filteredUserData;
      if (userNameFilter.length > 0) {
         filteredUserData = userData.filter(item => {
            return item.name.toLowerCase().indexOf(userNameFilter.toLowerCase()) > -1
         });
      } else {
         filteredUserData = userData;
      }

      if (lastLoginSortingType.length > 0) {
         if (lastLoginSortingType === 'desc') {
            filteredUserData.sort((itemA, itemB) => itemB.lastLoginTime - itemA.lastLoginTime)
         } else if (lastLoginSortingType === 'asc') {
            filteredUserData.sort((itemA, itemB) => itemA.lastLoginTime - itemB.lastLoginTime)
         }
      }

      return (
         <Fragment>
            {filteredUserData.map((item, index) => {

               let hiddenPassword = '';
               for (let i = 1; i <= item.password.length; i++) {
                  hiddenPassword += '*';
               }

               return (
                  <div className="user-info" key={index}>
                     <div>
                        <span className="user-name">
                           {item.name}
                        </span>
                     </div>
                     <div className="user-password" >
                        <span>{hiddenPassword}</span>
                        <span className="show-password">
                           {item.password}
                        </span>
                     </div>
                     <div>
                        {(item.lastLoginTime > 0)
                           ? (<span>
                         <Moment unix format="YYYY/MM/DD HH:mm">
                           {item.lastLoginTime}
                         </Moment>
                        </span>)
                           : (<span>no login yet</span>)
                        }
                     </div>
                     <div><span>{item.loginTimeFrame}</span></div>
                     {(this.props.type === 'profile') ? <UserListProfileContent item={item}/> : null}
                  </div>
               )
            })}
         </Fragment>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      userData: state.usersData.users,
      userNameFilter: state.usersData.usernameFilterInput,
      lastLoginSortingType: state.usersData.lastLoginSortingType
   }
};

export default connect(mapStateToProps, {})(UserListMain);