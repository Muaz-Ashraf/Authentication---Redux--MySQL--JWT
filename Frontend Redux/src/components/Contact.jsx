import { Button, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Box, Grid, Typography } from "@mui/material";
import Nav from "./Nav";
import Page from "./Page";

function Contact() {
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(clearToken());
	};
	return (
		<>
			<Nav />
			<Page>Contact</Page>
		</>
	);
}

export default Contact;
