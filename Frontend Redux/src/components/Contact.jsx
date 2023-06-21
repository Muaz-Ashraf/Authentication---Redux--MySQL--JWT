import { Button, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Box, Grid, Typography } from "@mui/material";
import Nav from "./Nav";

function Contact() {
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(clearToken());
	};
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
					CONTACT
				</Typography>
			</Grid>
		</>
	);
}

export default Contact;
