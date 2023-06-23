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
import { useDispatch, useSelector } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Grid, Typography } from "@mui/material";
import { logout } from "../authSlice";
import Sidebar from "./Sidebar";
import { items } from "./items";

function Nav() {
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(logout());
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
	const { userRole } = useSelector((state) => state.auth);

	console.log(userRole);

	return (
		<>
			<Stack
				position="fixed"
				direction={"row"}
				justifyContent={"space-between"}
				alignItems={"center"}
				width="100vw"
				py={1.5}
				sx={{
					background: "rgba( 255, 255, 255, 0.2 )",
					boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
					backdropFilter: "blur( 5.5px )",
				}}
			>
				<IconButton
					ml={3}
					onClick={() => setOpen(true)}
				>
					<MenuIcon sx={{ fontSize: "3rem", color: "white" }} />{" "}
				</IconButton>
				<Stack
					direction={{ xs: "column", sm: "row" }}
					spacing={1}
					sx={{
						"& a": {
							borderRadius: 10,
							color: "white",
							textDecoration: "none",
							p: 2,

							"&:hover": { bgcolor: "lightpink" },
						},
						"& a.active": {
							// Custom style for active link
							bgcolor: "red",

							fontWeight: "bold",
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
							}}
							fontSize={"20px"}
						>
							Contact
						</Typography>
					</Link>
					{userRole === "admin" ? (
						<Link
							to="/admin"
							className={location.pathname === "/admin" ? "active" : ""}
						>
							<Typography
								sx={{
									transition: "all 0.5s ease-in-out",
								}}
								fontSize={"20px"}
							>
								Admin
							</Typography>
						</Link>
					) : (
						<Link
							to="/user"
							className={location.pathname === "/user" ? "active" : ""}
						>
							<Typography
								sx={{
									transition: "all 0.5s ease-in-out",
								}}
								fontSize={"20px"}
							>
								User
							</Typography>
						</Link>
					)}
				</Stack>{" "}
				<Box sx={{ mr: 2 }}>
					<Button
						variant="contained"
						color="error"
						onClick={handleLogout}
					>
						Logout
					</Button>
				</Box>
			</Stack>
			<Drawer
				open={open}
				variant="temporary"
				onClose={() => setOpen(false)}
				sx={{
					"& .MuiPaper-root": {
						width: "300px",
						overflowY: "scroll",
						bgcolor: "blue",
						color: "white",
					},
				}}
			>
				<Sidebar items={items} />
			</Drawer>
		</>
	);
}

export default Nav;
