import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import Moment from 'react-moment';
import './user-list.scss';

class UserList extends Component {
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
               return (
                  <div className="user-info" key={index}>
                     <div><span>{item.name}</span></div>
                     <div><span>{item.password}</span></div>
                     <div>
                        {(item.lastLoginTime > 0) ? (
                           <span>
                         <Moment unix format="YYYY/MM/DD HH:mm">
                        {item.lastLoginTime}
                         </Moment>
                        </span>
                        ) : (
                           <span>no login yet</span>
                        )}
                     </div>
                     <div><span>{item.loginTimeFrame}</span></div>
                     {(this.props.type === 'profile') ? (
                        <Fragment>
                           <div><span>set timeframe login</span></div>
                           <div>
                              <button className="edit-btn">edit</button>
                           </div>
                           <div>
                              <button className="delete-btn">
                                 delete
                              </button>
                           </div>
                        </Fragment>
                     ) : null}
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

export default connect(mapStateToProps, {})(UserList);
