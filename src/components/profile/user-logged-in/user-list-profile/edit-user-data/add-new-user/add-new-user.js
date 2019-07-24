import React from "react";
import "./add-new-user.scss";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setActiveEditedUser } from "../../../../../../actions/user-data-actions";

const AddNewUserBtn = ({ history, activeUser, setActiveEditedUser }) => {

   const handlerBtnAddUser = () => {
      setActiveEditedUser();
      history.push(`/profile/${activeUser.id}/add`);
   };

   return (
      <div className="add-user-wrapper">
         <button className="add-user-btn"
                 onClick={() => {
                    handlerBtnAddUser();
                 }}>
            Add new user
         </button>
      </div>
   );
};

const mapStateToProps = (state) => {
   return {
      activeUser: state.usersData.activeUser
   };
};

export default connect(mapStateToProps, { setActiveEditedUser })(withRouter(AddNewUserBtn));
