import { combineReducers } from 'redux';

import authReducer from './authReducer';
import usersReducer from './usersReducer';
import adminsReducer from './adminsReducer';

export default combineReducers({
    admins: adminsReducer,
    auth: authReducer,
    users: usersReducer
});