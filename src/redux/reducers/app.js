import { default_state } from "../default_state";
export default function app(state = default_state, action) {
	switch (action.type) {
		default:
			return state;
	}
}
