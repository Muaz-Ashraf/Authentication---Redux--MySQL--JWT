import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

function NotFound() {
	const navigate = useNavigate();
	return (
		<Grid
			container
			direction={"column"}
			justifyContent={"center"}
			alignItems={"center"}
			height={"100vh"}
			bgcolor="maroon"
			sx={{
				backgroundImage: "url('/pic.jpg')",
				backgroundSize: "cover",
			}}
		>
			<Typography
				fontSize={"6rem"}
				color="white"
			>
				404 - Page Not Found
			</Typography>
			<Button
				onClick={() => navigate("/")}
				variant="contained"
				color="secondary"
				sx={{
					color: "white",
				}}
			>
				Go back
			</Button>
		</Grid>
	);
}

export default NotFound;
