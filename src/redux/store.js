import { createStore } from "redux";
import { localStorageService } from "./../utils/localStorage";
import reducer from "./reducers";
import { default_state } from "./default_state";
const IS_PRODUCTION = process.env.NODE_ENV === "production";

let inital_state = { ...default_state };

// localStorageService.clearData()
// if data is in localstorage load it
if (localStorageService.isDataPresent()) {
	let userInfo = localStorageService.getData();
	if (userInfo.status === "success") {
		inital_state.user = userInfo;
	}
}

let store = createStore(reducer, inital_state, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// in development attach to redux dev tools
if (IS_PRODUCTION) {
	store = createStore(reducer, inital_state);
}

export default store;
