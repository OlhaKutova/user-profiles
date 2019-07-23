import React, {Component, Fragment} from 'react';
import { connect } from "react-redux";
import { deleteUser } from "../../../../actions/user-data-actions";
import { withRouter } from "react-router-dom";
import moment from 'moment';
import TimePicker from 'rc-time-picker';
import "./user-list-profile.scss";

class UserListProfile extends Component {

   clickEditBtnHandler = () => {
      const { history, item } = this.props;
      history.push(`/profile/:id/edit/${item.id}`);
   };

   render() {
      const { deleteUser, item } = this.props;

      return (
         <Fragment>
            <div className="time-picker-wrapper">
               <TimePicker classname="rc-time-picker"
                           defaultValue={moment()}
                           showSecond={false}
                           minuteStep={5}
               />
            </div>
            <div>
               <button className="btn-profile edit-btn"
                       onClick={this.clickEditBtnHandler}>
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

export default connect(null, {deleteUser})(withRouter(UserListProfile));
