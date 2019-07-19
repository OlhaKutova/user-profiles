import {SET_ACTIVE_USER_DATA} from "../action-types/user-data-action-types";

export const loginUser = (name, password, history) => {
   return async (dispatch, getState) => {
      const users = getState().usersData.users;
      const user = users.find((item) => item.name === name);
      const isPassValid = user.password === password;

      if (isPassValid) {
         dispatch({
            type: SET_ACTIVE_USER_DATA,
            payload: user
         });
         history.push(`/profile/${user.id}`);
      } else {
         alert('Invalid login or password');
      }
   };
};
