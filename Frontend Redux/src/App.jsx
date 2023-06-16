import React from "react";
import { useSelector } from "react-redux";
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

const App = () => {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	console.log(isAuthenticated);

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
