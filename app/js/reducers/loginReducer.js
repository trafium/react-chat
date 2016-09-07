import cookie from '../util/cookie.js';
import axios from 'axios';

import serverPath from '../util/serverPath.js';

import store from '../store.js';

export default function reducer(state={
	logged: false,
	name: ''
}, action) {
	switch (action.type) {
		case "LOGIN": {
			axios.post(serverPath+'action=login', 'name='+action.payload);
			cookie.set('name', action.payload, {expires: 60*60*24});
      cookie.set('logged', true, {expires: 60*60*24});
			return {...state, logged: true, name: action.payload};
		}
		case "LOGOUT": {
			cookie.remove('logged');
			cookie.remove('name');
			return {...state, logged: false, name: ''};
		}
	}
	return state;
}