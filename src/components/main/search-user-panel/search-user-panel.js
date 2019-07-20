import React, {Component} from 'react';
import './search-user-panel.scss';
import {connect} from "react-redux";
import {filterUserName} from "../../../actions/user-data-actions";

class SearchUserPanel extends Component {

   render() {
      const {userNameFilterInput, filterUserName} = this.props;
      return (
         <div className="search-panel-wrapper">
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

export default connect(mapStateToProps, {filterUserName})(SearchUserPanel);
