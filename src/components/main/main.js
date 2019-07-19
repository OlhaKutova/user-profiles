import React, {Component} from 'react';
import './main.scss';
import {connect} from "react-redux";
import { getUserData } from '../../actions/user-data-actions';

class Main extends Component {

   render() {
      const { userData } = this.props;
      return (
         <div>
            {userData.map((item) => {
               return (
                  <span>{item.name}</span>
               )
            })}
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      userData: state.usersData.users
   }
};

export default connect(mapStateToProps, { getUserData })(Main);
