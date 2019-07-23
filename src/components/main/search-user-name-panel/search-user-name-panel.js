import React, {Component} from 'react';
import './search-user-name-panel.scss';
import {connect} from "react-redux";
import {filterUserName} from "../../../actions/user-data-actions";

class SearchUserNamePanel extends Component {

   render() {
      const {userNameFilterInput, filterUserName} = this.props;
      return (
         <div className="search-panel-wrapper">
            <span>Search user name:</span>
            <input type="text"
                   className="search-input"
                   placeholder="Search user name..."
                   value={userNameFilterInput}
                   onChange={filterUserName}
            />
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      userNameFilterInput: state.usersData.usernameFilterInput
   }
};

export default connect(mapStateToProps, {filterUserName})(SearchUserNamePanel);
