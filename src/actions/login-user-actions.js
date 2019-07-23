import {SET_ACTIVE_USER_DATA, USER_LOG_OUT} from "../action-types/user-data-action-types";

export const loginUser = (name, password, history) => {
   return async (dispatch, getState) => {
      const users = getState().usersData.users;
      const user = users.find((item) => item.name === name);

      if (user) {
         const isPassValid = user.password === password;
         if (isPassValid) {
            user.isLoggedIn = true;
            dispatch({
               type: SET_ACTIVE_USER_DATA,
               payload: user
            });
            alert('Login Successful!');
            history.push(`/profile/${user.id}`);
         } else {
            alert('Error: Invalid name or password');
         }
      } else {
         alert('Error: Invalid name or password');
      }
   };
};

export const userLogOut = () => {
   return(dispatch, getState) => {
      const {users, activeUser } = getState().usersData;

      const newUsers = [...users];
      const activeUserIndex = newUsers.findIndex(item => item.id === activeUser.id);
      newUsers[activeUserIndex] = {...activeUser, isLoggedIn: false};

      dispatch({
         type: USER_LOG_OUT,
         payload: {
            users: newUsers,
            activeUser: {}
         }
      });
      alert('Logout Successful !');
   }
};


