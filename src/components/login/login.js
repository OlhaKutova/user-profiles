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
      const strongRegex =
         new RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.{6,})");

      if (name === '' || name === null) {
         alert("Error: Username can not be blank!");
         return false;
      } else if (!strongRegex.test(password)) {
         alert(`Error: Please enter correct password! 
          You have to input at least 6 characters, 
          1 numeric digit and 1 uppercase letter`);
         return false;
      } else {
         return true;
      }
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

export default connect(null, {loginUser})(withRouter(Login));
