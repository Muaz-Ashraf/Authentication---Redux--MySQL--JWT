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
import Admin from "./components/Admin";
import User from "./components/User";

const App = () => {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={isAuthenticated ? <Home /> : <Navigate to="/signin" />}
				/>
				<Route
					path="/about"
					element={isAuthenticated ? <About /> : <Navigate to="/signin" />}
				/>
				<Route
					path="/contact"
					element={isAuthenticated ? <Contact /> : <Navigate to="/signin" />}
				/>
				<Route
					path="/admin"
					element={isAuthenticated ? <Admin /> : <Navigate to="/signin" />}
				/>
				<Route
					path="/user"
					element={isAuthenticated ? <User /> : <Navigate to="/signin" />}
				/>
				<Route
					path="/signin"
					element={!isAuthenticated ? <SignIn /> : <Navigate to="/" />}
				/>
				<Route
					path="*"
					element={isAuthenticated ? <NotFound /> : <Navigate to="/signin" />}
				/>
			</Routes>
		</Router>
	);
};

export default App;
