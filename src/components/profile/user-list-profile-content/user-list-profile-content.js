import React, {Component, Fragment} from 'react';
import { connect } from "react-redux";
import { deleteUser } from "../../../actions/user-data-actions";
import { withRouter } from "react-router-dom";
import "./user-list-profile-content.scss";

class UserListProfileContent extends Component {

   clickEditBtnHandler = () => {
      const { history, item} = this.props;
      history.push(`/profile/:id/edit/${item.id}`);
   };

   render() {
      const { deleteUser, item } = this.props;

      return (
         <Fragment>
            <div>
               <select>
                  <option value="12 AM - 3 AM">12 AM - 3 AM</option>
                  <option value="4 AM - 7 AM">4 AM - 7 AM</option>
                  <option value="8 AM - 11 AM">8 AM - 11 AM</option>
                  <option value="12 AM - 3 PM">12 AM - 3 PM</option>
                  <option value="4 PM - 7 PM">4 PM - 7 PM</option>
                  <option value="8 PM - 12 PM">8 PM - 12 PM</option>
               </select>
            </div>
            <div>
               <button className="btn-profile edit-btn" onClick={this.clickEditBtnHandler}>
                  edit
               </button>
            </div>
            <div>
               <button className="btn-profile delete-btn"
                       onClick={deleteUser.bind(this, item.id)}>
                  delete
               </button>
            </div>
         </Fragment>
      );
   }
}

export default connect(null, {deleteUser})(withRouter(UserListProfileContent));
