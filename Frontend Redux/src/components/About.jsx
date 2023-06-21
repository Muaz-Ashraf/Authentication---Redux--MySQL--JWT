import { Button, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Box, Grid, Typography } from "@mui/material";
import Nav from "./Nav";
import Page from "./Page";
import { motion } from "framer-motion";
function About() {
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(clearToken());
	};
	return (
		<>
			<Nav />
			<Page>
				{" "}
				<motion.div
					initial={{ scale: 0, translateX: 600 }}
					animate={{ translateX: 0, scale: 1 }}
					transition={{
						type: "spring",
						stiffness: 300,
						damping: 50,
					}}
				>
					About
				</motion.div>
			</Page>
		</>
	);
}

export default About;
