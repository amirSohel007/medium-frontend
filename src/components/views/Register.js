import React, { useState } from "react";
import Layout from "./Layout";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Register = () => {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [processing, setProcessing] = useState(false);
	const [isRegister, registerStatus] = useState(false);
	const apiURL = process.env.REACT_APP_API_URL;
	
	const formSubmit = async (e) => {
		setProcessing(true); //start button processing text
		e.preventDefault();
		const data = { username, email, password };
		let res = await axios.post(`${apiURL}register`, data);
		if (res.data) {
			localStorage.setItem("token", res.data.token);
			setProcessing(false);
			registerStatus(true);
		} else console.log("something went wrong");
	};

	return (
		<Layout>
			<div className="row justify-content-center">
				<div className="col-sm-4">
					<div className="bg-white form-wrapper mt-5 p-4 border-radius-4">
						<form>
							<div className="form-group text-center">
								<img className="w-50 mb-2" src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" />
							</div>
							<div className="form-group">
								<label htmlFor="">Your Name</label>
								<input
									type="text"
									className="form-control"
									id="user"
									placeholder="Name"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="">Email/Id</label>
								<input
									type="email"
									className="form-control"
									id="email"
									placeholder="Email-id"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
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
								{processing ? "Processing...." : "Register"}
							</button>
							<p className="mb-0 text-13 text-center">
								Alredy have account ?{" "}
								<NavLink className="primary-text" to="login">
									Login
								</NavLink>
							</p>
							{isRegister && (
								<div className="alert alert-success mt-3 text-12 text-center" role="alert">
									Your account is created. Please{" "}
									<NavLink className="primary-text" to="login">
										Login
									</NavLink>
								</div>
							)}
						</form>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Register;
