import React from "react";
import { Box, Grid, Typography } from "@mui/material";

function NotFound() {
	return (
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
				404 - Page Not Found
			</Typography>
		</Grid>
	);
}

export default NotFound;
