import React from 'react';
import { Link } from "react-router-dom";


const UserIsNotLoggedIn = () => {
   return (
      <p>You should
         <Link to='/login'> login </Link>
         before viewing this page.
      </p>

   )
};

export default UserIsNotLoggedIn;
