import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export const UnauthenticatedLink = ({ className, to, id, children, userState }) => {
	const linkProps = { className, to, id };

	if (userState.login) {
		return "";
	}
	return <Link {...linkProps}> {children}</Link>;
};

const mapStateToProps = (state) => ({
	userState: state.user,
});

export default connect(mapStateToProps, null)(UnauthenticatedLink);
