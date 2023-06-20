import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputIcon from "@mui/icons-material/Input";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken } from "../authSlice";
import {
	TextField,
	Button,
	Box,
	Stack,
	Typography,
	Card,
	Grid,
} from "@mui/material";

const SignInForm = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
		trigger,
		reset,
	} = useForm();
	const onSubmit = async (data) => {
		try {
			const response = await fetch("http://localhost:5000/api/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (response.ok) {
				// Request was successful
				const responseData = await response.json();
				// Process the response data as needed
				const token = responseData.token;
				console.log(token);
				dispatch(setToken(token));
				navigate("/");
			} else {
				// Request failed
				throw new Error("Error: " + response.status);
			}
		} catch (error) {
			// Handle any errors
			console.error(error);
		}

		setUsername(data.username);
		setPassword(data.password);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "100dvh",
					width: "auto",
					px: { xs: "3rem", md: "10rem", lg: "20rem" },
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
							backgroundImage:
								"linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #ff707b 100%)",
							transition:
								"background-color 2s ease-in-out, letter-spacing 2s ease-in-out",
							"&:hover": {
								letterSpacing: "0.5rem",
								backgroundColor: "#ff707b",
								backgroundImage:
									"linear-gradient(43deg, #ff707b 0%, #C850C0 30%, #4158D0 66%, #f24cbc 100%)",
							},
						}}
					>
						Redux Sign In
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
								type="text"
								placeholder="Enter Username"
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
						>
							<Typography fontWeight={"bold"}>Password:</Typography>
						</Grid>
						<Grid
							item
							xs={9}
						>
							<TextField
								fullWidth
								size="small"
								type="password"
								placeholder="Enter Password"
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
					</Box>
				</Card>
			</Box>
		</form>
	);
};

export default SignInForm;
