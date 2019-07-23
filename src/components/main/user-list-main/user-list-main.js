import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import './user-list-main.scss';
import UserItem from "./user-item/user-item";

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
            {filteredUserData.map((item) => {
               return (
                     <UserItem key={item.id}
                               item={item}
                               type={this.props.type}
                     />
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
