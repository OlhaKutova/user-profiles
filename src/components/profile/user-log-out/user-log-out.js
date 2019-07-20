import React from 'react';
import { Link } from "react-router-dom";
import './user-log-out.scss';


const UserLogOut = () => {
   return (
      <p>You should
         <Link to='/login'> login </Link>
         before viewing this page.
      </p>

   )
};

export default UserLogOut;
