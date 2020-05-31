import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";

import { connect } from "react-redux";
import { logout } from "./../../redux/actions/user";
export const Logout = ({ dispatch }) => {
	const [output, setOutput] = useState(
		<div className="contianer m-auto p-5 text-center">
			<h2>Logging out....</h2>
		</div>
	);
	// run logout only once
	useEffect(() => {
		setTimeout(() => {
			dispatch(logout());
			setOutput(<Redirect to="/" />);
		}, 1000);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return output;
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, null)(Logout);
