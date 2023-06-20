import { Button, Stack } from "@mui/material";
import React from "react";

import { Box, Grid, Typography } from "@mui/material";
import Nav from "./Nav";

const Homepage = () => {
	return (
		<>
			<Nav />
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
