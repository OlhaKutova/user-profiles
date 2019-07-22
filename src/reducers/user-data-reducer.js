import {
	GET_USER_DATA,
	SET_ACTIVE_USER_DATA,
	SORT_LAST_LOGIN_USER,
	USER_NAME_FILTER,
	DELETE_USER,
	SET_ACTIVE_EDITED_USER
} from "../action-types/user-data-action-types";

const initialState = {
	users: [],
	activeUser: {},
	activeEditedUser: {},
	usernameFilterInput: "",
	lastLoginSortingType: ""
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_USER_DATA:
			return {
				...state,
				users: action.payload
			};
		case SET_ACTIVE_USER_DATA:
			const userIndex = state.users.findIndex(item => item.id ===  action.payload.id);
			let newUsers = [...state.users];
			let newUser = {...state.users[userIndex]};
			newUser.isLoggedIn = true;
			newUser.lastLoginTime = new Date().getTime();
			newUsers[userIndex] = newUser;
			return {
				...state,
				users: newUsers,
				activeUser: action.payload
			};
		case USER_NAME_FILTER:
			return {
				...state,
				usernameFilterInput: action.payload
			};
		case SORT_LAST_LOGIN_USER:
			return {
				...state,
				lastLoginSortingType: action.payload
			};

		case DELETE_USER:
			return {
				...state,
				users: action.payload
			};
		case SET_ACTIVE_EDITED_USER:
			console.log(action.payload)
			return {
				...state,
				activeEditedUser: action.payload
			};
		default:
			return state;
	}
}
