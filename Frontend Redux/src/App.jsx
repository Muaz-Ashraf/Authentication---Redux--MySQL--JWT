import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import NotFound from "./components/404";
import { setAuthenticated, setToken, clearToken } from "./authSlice";

const App = () => {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const response = await fetch("http://localhost:5000/api/user", {
					method: "GET",
					credentials: "include",
				});

				if (response.ok) {
					const data = await response.json();
					dispatch(setAuthenticated(data.user));
				} else {
					dispatch(clearToken());
				}
			} catch (error) {
				console.error("Error fetching user:", error);
				dispatch(clearToken());
			}
		};

		const token = document.cookie
			.split("; ")
			.find((cookie) => cookie.startsWith("token="));

		if (token) {
			dispatch(setToken(token.split("=")[1]));
			fetchUser();
		} else {
			dispatch(clearToken());
		}
	}, []);

	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						isAuthenticated ? (
							<Home />
						) : (
							<Navigate
								to="/signin"
								replace
							/>
						)
					}
				/>
				<Route
					path="/about"
					element={
						isAuthenticated ? (
							<About />
						) : (
							<Navigate
								to="/signin"
								replace
							/>
						)
					}
				/>
				<Route
					path="/contact"
					element={
						isAuthenticated ? (
							<Contact />
						) : (
							<Navigate
								to="/signin"
								replace
							/>
						)
					}
				/>
				<Route
					path="/signin"
					element={<SignIn />}
				/>
				<Route
					path="*"
					element={<NotFound />}
				/>
			</Routes>
		</Router>
	);
};

export default App;
