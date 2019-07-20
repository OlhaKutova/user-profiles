import {SET_ACTIVE_USER_DATA} from "../action-types/user-data-action-types";

export const loginUser = (name, password, history) => {
   return async (dispatch, getState) => {
      const users = getState().usersData.users;
      const user = users.find((item) => item.name === name);

      if (user) {
         const isPassValid = user.password === password;
         if (isPassValid) {
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
