import React from "react";
import { isAuthenticated } from "./../../view-logic/Login";
import { Link } from "react-router-dom";
const UnauthenticatedLink = (props) => {
	if (isAuthenticated()) {
		return "";
	}
	return <Link {...props}> {props.children}</Link>;
};

export default UnauthenticatedLink;
