import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";

export default function ProtectedRoute({ component: Component, ...rest }) {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

	return (
		<Route
			{...rest}
			render={(props) =>
				isAuthenticated ? <Component {...props} /> : <Navigate to="/login" />
			}
		/>
	);
}
