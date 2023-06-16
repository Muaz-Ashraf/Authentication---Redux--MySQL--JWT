import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearToken } from "../authSlice";

const Homepage = () => {
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(clearToken());
	};
	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
			<h1>Welcome to the Homepage</h1>
			<Button onClick={handleLogout}>Logout</Button>
		</div>
	);
};

export default Homepage;
