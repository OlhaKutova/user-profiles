import { GET_USER_DATA } from '../action-types/user-data-action-types';

export const getUserData= () => {
   return async (dispatch) => {
         const response = await fetch("/DATA.json");
         const data = await response.json();
         dispatch({
            type: GET_USER_DATA,
            payload: data
         });
   };
};
