import React from "react";
import { Link, NavLink } from "react-router-dom";
import Layout from "./Layout";
import { AiOutlineMenu as Hamburger } from "react-icons/ai";
import { FiBell as Bell } from "react-icons/fi";
import UnauthenticatedLink from "./partials/UnauthenticatedLink";
import AuthenticatedLink from "./partials/AuthenticatedLink";

const Menu = () => {
	return (
		<header>
			<Layout>
				<nav className="navbar navbar-expand-lg p-0">
					<Link className="navbar-brand" to="/">
						<img style={{ width: "150px" }} className="mb-2" src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" alt="logo" />
					</Link>
					<ul className="navbar-nav mr-auto">
						<input type="text" placeholder="Search...." className="search" />
					</ul>
					<div className="my-2 my-lg-0 form-inline sm-position-relative">
					<AuthenticatedLink><NavLink to="new-post"><button className="btn btn-primary d-none d-lg-block d-md-block">Write Article</button></NavLink> </AuthenticatedLink>
						<ul className="navbar-nav header-icons">
							<li className="nav-item">
								<Link className="nav-link" to="#">
									<Bell size={30} />
								</Link>
							</li>
							<li className="nav-item user-menu">
								<Link className="nav-link" to="#">
									<Hamburger size={30} />
								</Link>
								<ul className="dropdown-menus m-0 p-0 list-unstyled">
									<li>
										<UnauthenticatedLink className="highlight-hover" to="/signin">
											Sign In
										</UnauthenticatedLink>
									</li>
									<li>
										<UnauthenticatedLink className="highlight-hover" to="/signup">
											Sign Up
										</UnauthenticatedLink>
									</li>
									<li>
										<AuthenticatedLink className="highlight-hover" to="/logout">
											Logout
										</AuthenticatedLink>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</nav>
			</Layout>
		</header>
	);
};

export default Menu;
