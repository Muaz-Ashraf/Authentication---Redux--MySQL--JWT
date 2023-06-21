import { Button, Stack } from "@mui/material";
import React from "react";

import { Box, Grid, Typography } from "@mui/material";

export default function Page({ children }) {
	return (
		<Grid
			container
			justifyContent={"center"}
			alignItems={"center"}
			height={"100vh"}
			sx={{
				backgroundImage: "url('/pagebg.png')",
			}}
		>
			<Typography
				fontSize={"6rem"}
				color="white"
			>
				{children}
			</Typography>
		</Grid>
	);
}
