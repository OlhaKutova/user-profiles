import React from 'react';
import {Link} from "react-router-dom";
import './user-log-out.scss';

const UserLogOut = () => {
   return (
      <div className="user-log-out-wrapper">
         <p>You should
            <Link className="login-link" to='/login'> sign in </Link>
            before viewing this page.
         </p>
      </div>
   )
};

export default UserLogOut;
