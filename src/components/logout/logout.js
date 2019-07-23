import React from 'react';
import {connect} from "react-redux";
import {userLogOut} from "../../actions/login-user-actions";
import "./logout.scss";

const Logout = (props) => {
   const { userLogOut } = props;
   return (
      <button className="btn-user-logout"
              onClick={userLogOut}>
         Logout
      </button>
   )
};

export default connect(null, {userLogOut})(Logout);
