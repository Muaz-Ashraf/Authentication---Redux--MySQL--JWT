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
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearToken } from "../authSlice";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Grid, Typography } from "@mui/material";

function Nav() {
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(clearToken());
	};
	const [open, setOpen] = React.useState(false);
	function generate(element) {
		return [0, 1, 2].map((value) =>
			React.cloneElement(element, {
				key: value,
			})
		);
	}
	return (
		<>
			<Stack
				position="fixed"
				direction={"row"}
				spacing={10}
				justifyContent={"space-around"}
				alignItems={"center"}
				bgcolor={"white"}
				width="100vw"
				py={1}
			>
				<IconButton onClick={() => setOpen(true)}>
					<MenuIcon />{" "}
				</IconButton>
				<Stack
					direction={"row"}
					spacing={3}
					sx={{
						// CSS styles
						"& a": {
							textDecoration: "none", // Remove underline
							color: "blue",
						},
					}}
				>
					<Link to="/">
						<Typography
							sx={{
								transition: "all 0.5s ease-in-out",
								p: 2,
								"&:hover": { bgcolor: "red", color: "white", borderRadius: 2 },
							}}
							fontSize={"20px"}
						>
							Home
						</Typography>
					</Link>
					<Link to="/about">
						<Typography
							sx={{
								transition: "all 0.5s ease-in-out",
								p: 2,
								"&:hover": { bgcolor: "red", color: "white", borderRadius: 2 },
							}}
							fontSize={"20px"}
						>
							About
						</Typography>
					</Link>

					<Link to="/contact">
						<Typography
							sx={{
								transition: "all 0.5s ease-in-out",
								p: 2,
								"&:hover": { bgcolor: "red", color: "white", borderRadius: 2 },
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
						overflow: "hidden",
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
									primary="Single-line item"
									secondary={"Secondary text"}
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
