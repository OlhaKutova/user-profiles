import React from 'react';
import { Link } from "react-router-dom";
import './header.scss';

const Header = () => {
   return (
      <header className="header">
         <nav className="nav-menu">
            <Link className="nav-link" to='/'>Main</Link>
            <Link className="nav-link" to='/profile/:id'>Profile</Link>
            <Link className="nav-link" to='/login'>Login</Link>
         </nav>
      </header>

   )
};

export default Header;
