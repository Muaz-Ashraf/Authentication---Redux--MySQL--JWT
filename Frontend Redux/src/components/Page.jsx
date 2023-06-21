import { Button, Stack } from "@mui/material";
import React from "react";

import { Box, Grid, Typography } from "@mui/material";

const Page = ({ children }) => {
	return (
		<Grid
			container
			justifyContent={"center"}
			alignItems={"center"}
			height={"100vh"}
			sx={{
				backgroundImage: "url('/pagebg.png')",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
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
};

export default Page;
