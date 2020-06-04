import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// userState=(redux state).user prop is coming from redux-store
export const AuthenticatedLink = ({ className, to, id, children, userState }) => {
	const linkProps = { className, to, id };
	if (userState.login) {
		return {...linkProps}> {children}
	}
	return "";
};

const mapStateToProps = (state) => ({
	userState: state.user,
});

export default connect(mapStateToProps, null)(AuthenticatedLink);
