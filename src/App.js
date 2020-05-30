import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router";
import Login from "./components/views/Login";
import Register from "./components/views/Register";
import Menu from "./components/views/Menu";
import Home from "./components/views/Home";
import UserProfile from "./components/views/User";

function App() {
	return (
		<Router>
			<Menu />
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/login" exact>
					<Login />
				</Route>
				<Route path="/register" exact>
					<Register />
				</Route>
				<Route path="/user/:id" exact>
					<UserProfile />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
