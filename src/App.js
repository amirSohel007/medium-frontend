import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router";
import Login from "./components/views/Login";
import Register from "./components/views/Register";
import Menu from "./components/views/Menu";
import Home from "./components/views/Home";
import UserProfile from "./components/views/User";
import Logout from "./components/views/Logout";
import Tag from "./components/views/Tag";
import NewPost from './components/views/New-post'

function App() {
	return (
		<Router>
			<Menu />
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/signin" exact>
					<Login />
				</Route>
				<Route path="/signup" exact>
					<Register />
				</Route>
				<Route path="/logout" exact>
					<Logout />
				</Route>
				<Route path="/user/:id" exact>
					<UserProfile />
				</Route>

				<Route path="/new-post" exact>
					<NewPost />
				</Route>

				{/* if route set like this we get acces to history and location as props */}
				<Route path="/tag/:tag" exact component={Tag}></Route>
			</Switch>
		</Router>
	);
}

export default App;
