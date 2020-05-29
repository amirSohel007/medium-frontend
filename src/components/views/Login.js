import React, { useState } from "react";
import Layout from "./Layout";
import { NavLink } from "react-router-dom";

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
		<Layout>
			<div className="row justify-content-center">
				<div className="col-sm-4">
					<div className="bg-white form-wrapper mt-5 p-4 border-radius-4">
						<form>
							<div className="form-group text-center">
								<img className="w-50 mb-2" src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" />
								<p className="text-13 mb-3">Don't worry, Your credentilas is secured with us.</p>
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
							<button type="submit" className="btn btn-primary w-100 mb-3" disabled={processing} onClick={formSubmit}>
								{processing ? "Processing...." : "Login"}
							</button>

							<p className="mb-0 text-13 text-center">
								No account ?{" "}
								<NavLink className="primary-text" to="register">
									Create one
								</NavLink>
							</p>
						</form>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Login;
