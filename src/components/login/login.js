import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import "./login.scss";
import {connect} from "react-redux";
import {loginUser} from "../../actions/login-user-actions";

class Login extends Component {

   initialState = {
      name: '',
      password: ''
   };

   state = this.initialState;

   handleChange = (event) => {
      const newState = {...this.state};
      const fieldName = event.target.name;
      const fieldValue = event.target.value;

      newState[fieldName] = fieldValue;
      this.setState({...newState});
   };

   submitHandler = (event) => {
      event.preventDefault();

      const {loginUser, history} = this.props;
      const {name, password} = this.state;

      const isValid = this.validateFields(name, password);

      if (isValid) {
         loginUser(name, password, history)
      }
   };

   validateFields = (name, password) => {
      const {users} = this.props;
      let isValid = false;
      let userIndex = users.findIndex(item => {
         return item.name === name;
      });
      if (userIndex > -1) {
         if (users[userIndex]["password"] === password) {
            isValid = true
         }  else {
            alert('Error: invalid name or password');
         }
      } else {
         alert('Error: invalid name or password');
      }
      return isValid;
   };

   render() {
      return (
         <div className='login-wrapper'>
            <form className='form-login-wrapper' noValidate
                  onSubmit={(event) => this.submitHandler(event)}>
               <h4 className='form-heading'>Sign in</h4>
               <label className='input-login-wrapper'>
                  <span>Name:</span>
                  <input type="text"
                         name="name"
                         value={this.state.name}
                         placeholder='Name'
                         onChange={(event) => {
                            this.handleChange(event);
                         }}
                  />
               </label>
               <label className='input-login-wrapper'>
                  <span>Password:</span>
                  <input
                     type="password"
                     name="password"
                     value={this.state.password}
                     placeholder='password'
                     title='at least 6 characters, 1 numeric digit and 1 uppercase letter'
                     onChange={(event) => {
                        this.handleChange(event);
                     }}
                  />
               </label>
               <input className='btn-submit'
                      type="submit"
                      value="log in"
                      onChange={(event) => {
                         this.handleChange(event);
                      }}
               />
            </form>
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      users: state.usersData.users
   }
};

export default connect(mapStateToProps, {loginUser})(withRouter(Login));
