import React, {Component} from 'react';
import "./edit-user-data.scss";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {setActiveEditedUser} from "../../../../actions/user-data-actions";

const initialState = {
   id: null,
   name: '',
   password: '',
   userImg: '',
   lastLoginTime: '',
   loginTimeFrame: ''
};

class EditUserData extends Component {

   state = initialState;

   componentDidMount() {
      const {match, setActiveEditedUser} = this.props;
      if (parseInt(match.params.editID) > 0) {
         setActiveEditedUser(parseInt(match.params.editID))
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
      const {name, value} = event.target;
      this.setState({
         [name]: value
      })
   };

   clickCancelBtnHandler = () => {
      const {history} = this.props;
      history.push(`/profile/:id`);
   };

   render() {
      const {name, password, lastLoginTime, loginTimeFrame} = this.state;

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
                  <div className="edit-btn-wrapper">
                     <button>SAVE CHANGES</button>
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
      activeEditedUser: state.usersData.activeEditedUser
   }
};

export default connect(mapStateToProps, {setActiveEditedUser})(withRouter(EditUserData));
