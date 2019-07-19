import { combineReducers } from 'redux';
import userDataReducer from './reducers/user-data-reducer';

export default combineReducers({
   usersData: userDataReducer
})
