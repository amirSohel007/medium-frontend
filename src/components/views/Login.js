import React, { useState } from "react";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [processing, setProcessing] = useState(false);
	const formSubmit = (e) => {
		e.preventDefault();
		setProcessing(true);
		setTimeout(() => {
			setProcessing(false);
		}, 2000);
	};

	return (
		<div id="login-container" className="container">
			<form>
				<div className="form-group text-center">
					<h3 className="text-muted">Login</h3>
				</div>
				<div className="form-group">
					<label htmlFor="">Email/Id</label>
					<input
						type="text"
						className="form-control"
						id="user-id"
						placeholder="Email-id"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="">Password</label>
					<input
						type="password"
						className="form-control"
						id="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button type="submit" className="btn btn-primary" disabled={processing} onClick={formSubmit}>
					{processing ? "Processing...." : "Login"}
				</button>
			</form>
		</div>
	);
};

export default Login;
