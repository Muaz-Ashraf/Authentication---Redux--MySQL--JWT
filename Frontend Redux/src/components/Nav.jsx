import {
	Button,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Stack,
} from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Grid, Typography } from "@mui/material";
import { clearAuthenticated, clearToken } from "../authSlice";

function Nav() {
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(clearToken());
		dispatch(clearAuthenticated());
	};
	const [open, setOpen] = React.useState(false);
	function generate(element) {
		return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) =>
			React.cloneElement(element, {
				key: value,
			})
		);
	}
	const location = useLocation();
	return (
		<>
			<Stack
				position="fixed"
				direction={"row"}
				spacing={10}
				justifyContent={"space-around"}
				alignItems={"center"}
				width="100vw"
				py={1}
				sx={{
					background: "linear-gradient(to right, #49a09d, #5f2c82)",
					boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
					backdropFilter: "blur( 5.5px )",
				}}
			>
				<IconButton onClick={() => setOpen(true)}>
					<MenuIcon />{" "}
				</IconButton>
				<Stack
					direction="row"
					spacing={3}
					sx={{
						"& a": {
							borderRadius: 2,
							textDecoration: "none",
							color: "black",
							"&:hover": { bgcolor: "lightpink" },
						},
						"& a.active": {
							// Custom style for active link
							bgcolor: "red",
							color: "white",
						},
					}}
				>
					<Link
						to="/"
						className={location.pathname === "/" ? "active" : ""}
					>
						<Typography
							sx={{
								transition: "all 0.5s ease-in-out",
								p: 2,
							}}
							fontSize={"20px"}
						>
							Home
						</Typography>
					</Link>
					<Link
						to="/about"
						className={location.pathname === "/about" ? "active" : ""}
					>
						<Typography
							sx={{
								transition: "all 0.5s ease-in-out",
								p: 2,
							}}
							fontSize={"20px"}
						>
							About
						</Typography>
					</Link>

					<Link
						to="/contact"
						className={location.pathname === "/contact" ? "active" : ""}
					>
						<Typography
							sx={{
								transition: "all 0.5s ease-in-out",
								p: 2,
							}}
							fontSize={"20px"}
						>
							Contact
						</Typography>
					</Link>
				</Stack>{" "}
				<Button
					variant="contained"
					color="error"
					onClick={handleLogout}
				>
					Logout
				</Button>
			</Stack>
			<Drawer
				open={open}
				variant="temporary"
				onClose={() => setOpen(false)}
				sx={{
					"& .MuiPaper-root": {
						width: "300px",
						overflowY: "scroll",
					},
				}}
			>
				<Box>
					<List>
						{generate(
							<ListItem>
								<ListItemIcon>
									<MenuIcon />
								</ListItemIcon>
								<ListItemText
									primary="App Authentication"
									secondary="Authorization"
								/>
							</ListItem>
						)}
					</List>
				</Box>
			</Drawer>
		</>
	);
}

export default Nav;
