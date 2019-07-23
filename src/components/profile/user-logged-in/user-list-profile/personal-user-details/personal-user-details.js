import React, {Component} from 'react';
import {connect} from "react-redux";
import {userLogOut} from "../../../../../actions/login-user-actions";
import "./personal-user-details.scss";

class PersonalUserDetails extends Component {
   render() {
      const { name, userImg } = this.props.activeUser;
      const { userLogOut } = this.props;

      return (
         <div className="profile-info">
            <div className="user-img">
               <img src={userImg}
                    alt="user"
               />
            </div>
            <div className="user-data">
               <p>{name}</p>
               <button onClick={userLogOut}>
                  Log Out
               </button>
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

export default connect(mapStateToProps, {userLogOut})(PersonalUserDetails);
