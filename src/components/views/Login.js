import React, { useState } from "react";
import Layout from "./Layout";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { isAuthenticated } from "./../view-logic/Login";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [processing, setProcessing] = useState(false);
	const [isError, setError] = useState("");
	const history = useHistory();
	const apiURL = process.env.REACT_APP_API_URL;

	if (isAuthenticated()) {
		setTimeout(() => history.push("/"), 2000); //redirect after 2s delay
		return (
			<div className="m-auto p-5 text-center container">
				<h3>Your'e already logged in</h3>
				<h5>Redirecting....</h5>
			</div>
		);
	}

	const formSubmit = async (e) => {
		e.preventDefault();
		setProcessing(true);
		const data = { email, password };
		let res = await axios.post(`${apiURL}login`, data);
		if (res.data.status) {
			//Set Token in localStroge
			localStorage.setItem("authToken", res.data.token);

			setProcessing(false);
			history.push("/"); //redirect on home page after login
		} else {
			setProcessing(false);
			setError(res.data.message);
		}
	};

	return (
		<Layout>
			<div className="row justify-content-center">
				<div className="auth-holder">
					<div className="bg-white form-wrapper mt-5 p-4 border-radius-4">
						<form>
							<div className="form-group text-center">
								<img className="w-50 mb-2" src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" alt="logo" />
							</div>
							<div className="form-group">
								<label htmlFor="">Email/Id</label>
								<input type="text" className="form-control" id="user-id" placeholder="Email-id" value={email} onChange={(e) => setEmail(e.target.value)} />
							</div>
							<div className="form-group">
								<label htmlFor="">Password</label>
								<input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
							</div>
							<button type="submit" className="btn btn-primary w-100 mb-3" disabled={processing} onClick={formSubmit}>
								{processing ? "Processing...." : "Sign In"}
							</button>

							<p className="mb-0 text-13 text-center">
								No account ?{" "}
								<NavLink className="primary-text" to="/signup">
									Create one
								</NavLink>
							</p>
							{isError && (
								<div className="alert alert-danger mt-3 text-12 text-center" role="alert">
									{isError}
								</div>
							)}
						</form>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Login;
