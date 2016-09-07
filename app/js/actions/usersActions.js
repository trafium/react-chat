import axios from 'axios';
import store from '../store.js';

import serverPath from '../util/serverPath.js';

export function fetchUsers() {
  return {
    type: "FETCH_USERS",
    payload: axios.post(serverPath+'action=getUsers', 'name='+store.getState().login.name)
  };
}

export function stopFetchingUsers() {
  return {
    type: "FETCH_USERS_STOP"
  };
}