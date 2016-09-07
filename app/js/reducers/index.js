import {combineReducers} from 'redux';

import users from './usersReducer.js';
import messages from './messagesReducer.js';
import login from './loginReducer.js';

export default combineReducers({
  login,
  users,
  messages
});