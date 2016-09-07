import store from '../store.js';

import { fetchMessages } from '../actions/messagesActions.js';

var fetchTimeout;
export default function reducer(state={
  messages: [],
  fetching: false,
  fetched: false,
  lastID: 0,
  error: null
}, action) {

	switch (action.type) {

		case "FETCH_MESSAGES_PENDING": {
			return {...state, fetching: true};
		}
		case "FETCH_MESSAGES_REJECTED": {
			return {...state, fetching:false, error: action.payload};
		}
		case "FETCH_MESSAGES_FULFILLED": {
			let newLastID = 0;
			let concatMessages = state.messages.concat(action.payload.data);

			if (concatMessages.length > 0) {
				newLastID = concatMessages[concatMessages.length-1].id;
			}

			fetchTimeout = setTimeout(() => {
	      store.dispatch(fetchMessages());
	    }, 1000);

			return {
				...state,
				fetching: false,
				fetched: true,
				lastID: newLastID,
				messages: concatMessages
			};
		}
		case "FETCH_MESSAGES_STOP": {
		  clearTimeout(fetchTimeout);
		  break;
		}
	}
	return state;
}