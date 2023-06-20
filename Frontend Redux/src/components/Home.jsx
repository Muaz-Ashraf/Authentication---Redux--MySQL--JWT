import { Button, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearToken } from "../authSlice";
import { Box, Grid, Typography } from "@mui/material";

const Homepage = () => {
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(clearToken());
	};
	return (
		<>
			<Stack
				direction={"row"}
				spacing={3}
				justifyContent={"center"}
				alignItems={"center"}
				p={4}
				sx={{
					// CSS styles
					"& a": {
						textDecoration: "none", // Remove underline
						color: "blue",
					},
				}}
			>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>

				<Link to="/contact">Contact</Link>
				<Button
					variant="contained"
					color="error"
					onClick={handleLogout}
				>
					Logout
				</Button>
			</Stack>
			<Grid
				container
				justifyContent={"center"}
				alignItems={"center"}
				height={"100vh"}
				bgcolor="maroon"
			>
				<Typography
					fontSize={"6rem"}
					color="white"
				>
					HOME
				</Typography>
			</Grid>
		</>
	);
};

export default Homepage;
