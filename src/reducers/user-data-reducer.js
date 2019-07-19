import { GET_USER_DATA, SET_ACTIVE_USER_DATA } from "../action-types/user-data-action-types";


const initialState = {
	users: [],
	activeUser: {},
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_USER_DATA:
			return {
				...state,
				users: action.payload
			};
		case SET_ACTIVE_USER_DATA:
			return {
				...state,
				activeUser: action.payload
			};
		default:
			return state;
	}
}
