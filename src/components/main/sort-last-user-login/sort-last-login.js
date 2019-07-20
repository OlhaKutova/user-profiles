import React from 'react';
import './sort-last-login.scss';
import { connect } from "react-redux";
import {sortUsersByLastLogin} from "../../../actions/user-data-actions";

const SortLastLogin = ({sortUsersByLastLogin}) => {
   return (
      <button className="sort-last-login" onClick={sortUsersByLastLogin}>
         sort users by last login time
      </button>
   )
};

export default connect(null, {sortUsersByLastLogin})(SortLastLogin);
