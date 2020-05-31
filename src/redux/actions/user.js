import { default_state } from "./../default_state";

// Define constants
// Action name
export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";
export const USER_UPDATE = "USER_UPDATE";
export const USER_RESET = "USER_RESET";

// define actions

export function login() {
	return { type: USER_LOGIN };
}
export function logout() {
	return { type: USER_LOGOUT };
}
export function updateUser(value) {
	return { type: USER_UPDATE, value: value };
}
export function resetUser() {
	return { type: USER_RESET, value: default_state.user };
}
