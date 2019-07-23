import React from 'react';
import {Link} from "react-router-dom";
import './header.scss';
import {connect} from "react-redux";
import Logout from "../logout/logout";

const Header = (props) => {
   const {isLoggedIn} = props.activeUser;

   return (
      <header className="header">
         <nav className="nav-menu">
            <Link className="nav-link" to='/'>Main</Link>
            <Link className="nav-link" to='/profile/:id'>Profile</Link>
            {isLoggedIn
               ? <Logout/>
               : <Link className="nav-link" to='/login'>Login</Link>
            }
         </nav>
      </header>
   )
};

const mapStateToProps = (state) => {
   return {
      activeUser: state.usersData.activeUser
   }
};

export default connect(mapStateToProps, {})(Header);
