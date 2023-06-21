import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import InputIcon from "@mui/icons-material/Input";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
	TextField,
	Button,
	Box,
	Stack,
	Typography,
	Card,
	Grid,
	CircularProgress,
} from "@mui/material";
import { login } from "../authSlice";

const SignInForm = () => {
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
		trigger,
		reset,
	} = useForm();

	const [loading, setLoading] = useState(false);
	const [userInfo, setUserInfo] = useState("");
	const drag = useRef(null);

	const onSubmit = async (data) => {
		setLoading(true);
		try {
			const response = await fetch("http://localhost:5000/api/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
				credentials: "include", // Include cookies in the request
			});

			if (response.ok) {
				const userData = await response.json();
				console.log(userData);
				setUserInfo(userData);
				dispatch(login());
			} else {
				throw new Error("Error: " + response.status);
			}
		} catch (error) {
			// Handle any errors
			console.error(error);
		}

		setLoading(false);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Typography
				fontWeight={"bold"}
				fontSize={"3rem"}
				textAlign="center"
				bgcolor={"blueviolet"}
				color="white"
				height={"fit-content"}
				display={"flex"}
				alignItems={"center"}
				fontFamily={"cursive"}
				justifyContent={"center"}
				sx={{
					position: "fixed",
					width: "100vw",
				}}
			>
				Redux Authentication
			</Typography>
			<Box
				sx={{
					backgroundImage: "url('/cool-background.png')",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",

					bgcolor: "#ccc",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: `100vh`,

					px: { xs: "3rem", md: "10rem", lg: "20rem" },
				}}
			>
				<motion.div
					ref={drag}
					drag
					initial={{ scale: 0, rotate: 360 }}
					animate={{ rotate: 0, scale: 1 }}
					transition={{
						type: "spring",
						stiffness: 300,
						damping: 50,
					}}
				>
					<Card
						sx={{
							border: "2px solid black",
							borderRadius: 3,
							transition: "all 0.6s ease-in-out",
						}}
					>
						<Typography
							fontSize={40}
							py={3}
							fontWeight={"bold"}
							textAlign={"center"}
							color={"white"}
							sx={{
								backgroundColor: "#4158D0",

								transition:
									"background-color 2s ease-in-out,background-image 2s ease-in-out, letter-spacing 2s ease-in-out",
								"&:hover": {
									letterSpacing: "0.5rem",
									backgroundColor: "#ff707b",
									backgroundImage:
										"linear-gradient(43deg, #ff707b 0%, #C850C0 30%, #4158D0 66%, #f24cbc 100%)",
								},
							}}
						>
							Sign In
						</Typography>

						<Grid
							container
							alignItems={{ xs: "flex-start", sm: "center" }}
							justifyContent={"center"}
							spacing={1}
							my={6}
							px={5}
							width={"100%"}
							height={"100%"}
							direction={{ xs: "column", sm: "row" }}
						>
							<Grid
								item
								xs={3}
								component="label"
								htmlFor="username"
							>
								<Typography fontWeight={"bold"}>Username:</Typography>
							</Grid>
							<Grid
								item
								xs={9}
							>
								<TextField
									fullWidth
									size="small"
									id="username"
									type="text"
									placeholder="Enter your username here"
									{...register("username", {
										required: "Please enter your username.",
										minLength: {
											value: 3,
											message: "Username must be at least 3 characters long.",
										},
									})}
									error={!!errors?.username}
									helperText={errors?.username && errors?.username?.message}
								/>
							</Grid>
							<Grid
								item
								xs={3}
								component="label"
								htmlFor="password"
							>
								<Typography fontWeight={"bold"}>Password:</Typography>
							</Grid>
							<Grid
								item
								xs={9}
							>
								<TextField
									fullWidth
									id="password"
									size="small"
									type="password"
									placeholder="Enter your password here"
									{...register("password", {
										required: "Please enter your password.",
										minLength: {
											value: 3,
											message: "Password must be at least 3 characters long.",
										},
									})}
									error={!!errors?.password} // Corrected error prop
									helperText={errors?.password && errors?.password?.message} // Corrected helperText prop
								/>
							</Grid>
						</Grid>
						<Box
							display="flex"
							justifyContent={"flex-end"}
							alignItems={"flex-end"}
						>
							{loading ? (
								<CircularProgress />
							) : (
								<Button
									sx={{
										display: "flex",
										alignItems: "center",
										textTransform: "none",
										borderRadius: 0,
										transition: "all 0.6s ease-in-out",
										"&:hover": {
											bgcolor: "green",
											borderTopLeftRadius: 10,
											"& svg": {
												transform: "translateX(60px)",
											},
										},
										"& svg": {
											transition: "all 0.6s ease-in-out",
										},
										px: 10,
									}}
									size="small"
									type="submit"
									variant="contained"
									color="primary"
								>
									<Typography
										sx={{
											fontSize: 20,
											fontWeight: "bold",
										}}
									>
										Sign In
									</Typography>
									<InputIcon sx={{ ml: 0.6 }} />
								</Button>
							)}
						</Box>
					</Card>
				</motion.div>
			</Box>
		</form>
	);
};

export default SignInForm;
