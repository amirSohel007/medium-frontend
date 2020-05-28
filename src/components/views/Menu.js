import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu as Hamburger } from "react-icons/ai";
import { FiBell as Bell } from "react-icons/fi";
const Menu = () => {
	return (
		<nav className="navbar navbar-light">
			<div className="nav-chunk" id="left-nav">
				<Link className="navbar-brand" to="/">
					<h4>Logo Here</h4>
				</Link>
				<input type="text" placeholder="Search...." />
			</div>

			<div className="nav-chunk" id="right-nav">
				<button className="btn">Write Article</button>
				<ul className="navbar-nav">
					<li className="nav-item">
						<Link className="nav-link" to="#">
							<Bell size={30} />
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="#">
							<Hamburger size={30} />
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Menu;
