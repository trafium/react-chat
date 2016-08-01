import {combineReducers} from 'redux';

import users from './usersReducer.js';
import messages from './messagesReducer.js';

export default combineReducers({
   users,
   messages
});