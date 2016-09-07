

export function login(name) {
	return {
		type: "LOGIN",
		payload: name
	};
}

export function logout() {
	return {
		type: "LOGOUT"
	};
}