import { GET_USER_DATA, USER_NAME_FILTER, SORT_LAST_LOGIN_USER} from '../action-types/user-data-action-types';

export const getUserData = () => {
   return async (dispatch) => {
         const response = await fetch("/DATA.json");
         const data = await response.json();
         dispatch({
            type: GET_USER_DATA,
            payload: data
         });
   };
};

export const filterUserName = (event) => {
   return {
      type: USER_NAME_FILTER,
      payload: event.target.value
   }
};

export const sortUsersByLastLogin = () => {
   return async (dispatch, getState) => {
      const prevLastLoginSortingType = getState().usersData.lastLoginSortingType;
      let newLastLoginSortingType;
      if (prevLastLoginSortingType === '' || prevLastLoginSortingType==='asc') {
         newLastLoginSortingType = 'desc'
      } else {
         newLastLoginSortingType = 'asc'
      }
      dispatch({
         type: SORT_LAST_LOGIN_USER,
         payload: newLastLoginSortingType
      });
   };

};
