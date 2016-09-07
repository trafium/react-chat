import store from '../store.js';

import { fetchUsers } from '../actions/usersActions.js';

var fetchTimeout;
export default function reducer(state={
	users: [],
	fetching: false,
	fetched: false,
	count: 0,
	error: null
}, action) {

	switch (action.type) {

		case "FETCH_USERS_PENDING": {
			return {...state, fetching: true};
		}
		case "FETCH_USERS_REJECTED": {
			return {...state, fetching:false, error: action.payload};
		}
		case "FETCH_USERS_FULFILLED": {

			fetchTimeout = setTimeout(() => {
	      store.dispatch(fetchUsers());
	    }, 5000);

			return {
				...state,
				fetching: false,
				fetched: true,
				count: action.payload.data.count,
				users: action.payload.data.users
			};
		}
		case "FETCH_USERS_STOP": {
		  clearTimeout(fetchTimeout);
		  break;
		}
	}
	return state;
}