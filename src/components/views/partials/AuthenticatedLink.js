import React from "react";
import { isAuthenticated } from "./../../view-logic/Login";
import { Link } from "react-router-dom";
const AuthenticatedLink = (props) => {
	if (isAuthenticated()) {
		return <Link {...props}> {props.children}</Link>;
	}
	return "";
};

export default AuthenticatedLink;
