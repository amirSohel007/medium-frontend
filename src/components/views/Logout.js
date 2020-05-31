import React, { useState } from "react";
import { logout } from "./../view-logic/Logout";
import { Redirect } from "react-router";
const Logout = () => {
	const [output, setOutput] = useState(
		<div className="contianer m-auto p-5 text-center">
			<h2>Logging out....</h2>
		</div>
	);
	setTimeout(() => {
		logout();
		setOutput(<Redirect to="/" />);
	}, 1000);
	return output;
};

export default Logout;
