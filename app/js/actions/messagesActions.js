import axios from 'axios';
import store from '../store.js';

import serverPath from '../util/serverPath.js';

export function fetchMessages() {
	let lastID = store.getState().messages.lastID;
  return {
    type: "FETCH_MESSAGES",
    payload: axios.get(serverPath+'action=getMessages&lastID='+lastID)
  };
}

export function submitMessage(author, text) {
	return {
		type: "SUBMIT_MESSAGE",
		payload: axios.post(serverPath+'action=submitMessage', 'author='+author+'&text='+text),
	};
}

export function stopFetchingMessages() {
  return {
    type: "FETCH_MESSAGES_STOP"
  };
}