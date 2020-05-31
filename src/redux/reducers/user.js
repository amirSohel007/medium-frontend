import { default_state } from "../default_state";
import { USER_UPDATE, USER_RESET, USER_LOGIN, USER_LOGOUT } from "./../actions/user";
import { localStorageService } from "./../../utils/localStorage";
export default function user(state = default_state, action) {
	const { type, value } = action;
	switch (type) {
		case USER_LOGIN:
			localStorageService.setData({ ...state, login: true });
			return { ...state, login: true };
		case USER_LOGOUT:
			localStorageService.setData({ ...state, login: false });
			return { ...state, login: false };
		case USER_UPDATE:
			localStorageService.setData({ ...state, ...value });
			return { ...state, ...value };
		case USER_RESET:
			localStorageService.setData(default_state.user);
			return default_state.user;
		default:
			return state;
	}
}
