import { GET_USER_DATA, USER_NAME_FILTER, SORT_LAST_LOGIN_USER, DELETE_USER, SET_ACTIVE_EDITED_USER} from '../action-types/user-data-action-types';

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

export const deleteUser = (id) => {
   return (dispatch, getState) => {
      const users = getState().usersData.users;
      const newUsers = [...users];
      const userIndex = newUsers.findIndex(elem => elem.id === id);
      console.log(userIndex);

      if (userIndex !== -1) {
         newUsers.splice(userIndex, 1)
      }

      dispatch({
         type: DELETE_USER,
         payload: newUsers
      })
   }
};

export const setActiveEditedUser = (id) => {
   return (dispatch, getState) => {
      const users = getState().usersData.users;
      const user = users.find(elem => elem.id === id);

      dispatch({
         type: SET_ACTIVE_EDITED_USER,
         payload: user
      })
   }
};
