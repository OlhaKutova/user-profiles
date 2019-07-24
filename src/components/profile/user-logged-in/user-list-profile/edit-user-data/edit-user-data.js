import React, { Component } from "react";
import "./edit-user-data.scss";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { saveEditedUserData, saveNewUserData, setActiveEditedUser } from "../../../../../actions/user-data-actions";

const initialState = {
   error: null,
   id: null,
   name: "",
   password: "",
   userImg: "",
   lastLoginTime: "",
   loginTimeFrame: ""
};

class EditUserData extends Component {

   state = initialState;

   componentDidMount() {
      const { match, setActiveEditedUser } = this.props;
      if (parseInt(match.params.editID) > 0) {
         setActiveEditedUser(parseInt(match.params.editID));
      }
   }

   static getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.match.params.id && nextProps.activeEditedUser.id !== prevState.id) {
         return {
            ...nextProps.activeEditedUser
         };
      } else {
         return null;
      }
   }

   onChangeInputHandler = (event) => {
      const { name, value } = event.target;
      let errorMsg;
      if (name === "name") {
         if (value.trim().length === 0) {
            errorMsg = "Error: User name can not be blank!";
         }
      }

      if (name === "password") {
         const strongRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/;
         if (!strongRegex.test(value)) {
            errorMsg = "Error: Please input at least 6 chars, 1 numeric digit and 1 uppercase letter";
         }
      }

      this.setState({
         error: errorMsg,
         [name]: value
      });
   };

   clickCancelBtnHandler = () => {
      const { history, activeUser } = this.props;
      history.push(`/profile/${activeUser.id}`);
   };

   handleSaveClick = () => {
      const {
         history, saveEditedUserData,
         activeUser, match, saveNewUserData
      } = this.props;

      if (parseInt(match.params.editID) > 0) {
         saveEditedUserData(this.state);
      } else {
         saveNewUserData(this.state);
      }

      history.push(`/profile/${activeUser.id}`);
   };

   render() {
      const { error, name, password, lastLoginTime, loginTimeFrame } = this.state;

      return (
         <dialog open className="modal-wrapper">

            <div className="modal-edit-user-wrapper">
               <h5>Edit User Data</h5>
               <div className="input-edit-wrapper">
                  <label className='input-edit-field'>
                     <span>Name:</span>
                     <input type="text"
                            name="name"
                            value={name}
                            onChange={this.onChangeInputHandler}
                     />
                  </label>
                  <label className='input-edit-field'>
                     <span>Password:</span>
                     <input type="password"
                            name="password"
                            value={password}
                            onChange={this.onChangeInputHandler}
                     />
                  </label>
                  <label className='input-edit-field'>
                     <span>Last login time:</span>
                     <input type="text"
                            name="lastLoginTime"
                            value={lastLoginTime}
                            onChange={this.onChangeInputHandler}
                     />
                  </label>
                  <label className='input-edit-field'>
                     <span>Login timeframe:</span>
                     <input type="text"
                            name="loginTimeFrame"
                            value={loginTimeFrame}
                            onChange={this.onChangeInputHandler}
                     />
                  </label>
                  <div className="error-msg">
                     {error ? <span>{error}</span> : null}
                  </div>
                  <div className="edit-btn-wrapper">
                     <button disabled={error || !name || !password} onClick={() => {
                        this.handleSaveClick();
                     }}>
                        SAVE CHANGES
                     </button>
                     <button className="btn-cancel"
                             onClick={this.clickCancelBtnHandler}>
                        CANCEL
                     </button>
                  </div>
               </div>
            </div>
         </dialog>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      activeEditedUser: state.usersData.activeEditedUser,
      activeUser: state.usersData.activeUser
   };
};

export default connect(
   mapStateToProps,
   { setActiveEditedUser, saveEditedUserData, saveNewUserData }
)(withRouter(EditUserData));
