import React, {Component} from 'react';
import Moment from "react-moment";
import './user-item.scss';
import UserListProfile from "../../../profile/user-logged-in/user-list-profile/user-list-profile";

class UserItem extends Component {

   state = {
      isHoveringPassword: false
   };

   handleMouseHover() {
      this.setState(this.toggleHoverState);
   }

   toggleHoverState(state) {
      return {
         isHoveringPassword: !state.isHoveringPassword,
      };
   }

   render() {
      const {item} = this.props;

      let hiddenPassword = '';
      for (let i = 1; i <= item.password.length; i++) {
         hiddenPassword += '*';
      }

      return (
         <div className="user-info">
            <div>
               <span className="user-name">{item.name}</span>
            </div>
            <div className="user-password"
                 onMouseEnter={this.handleMouseHover.bind(this)}
                 onMouseLeave={this.handleMouseHover.bind(this)}>
               <span>{hiddenPassword}</span>
               {this.state.isHoveringPassword &&
               <span className="password-shown">
                  {item.password}
               </span>}
            </div>
            <div>
               {(item.lastLoginTime > 0)
                  ? (<span>
                         <Moment unix format="YYYY/MM/DD HH:mm">
                           {item.lastLoginTime}
                         </Moment>
                     </span>)
                  : (<span>no login yet</span>)
               }
            </div>
            <div><span>{item.loginTimeFrame}</span></div>
            {(this.props.type === 'profile') ? <UserListProfile item={item}/> : null}
         </div>
      );
   }
}

export default UserItem;
