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
			<Box sx={{ p: { xs: "3rem", md: "10rem", lg: "15rem" } }}>
				<Card>
					<Typography
						bgcolor={"blue"}
						fontSize={40}
						py={3}
						fontWeight={"bold"}
						textAlign={"center"}
						color={"white"}
						letterSpacing={5}
					>
						Redux Sign In
					</Typography>
					<Grid
						container
						alignItems={{ xs: "flex-start", md: "center" }}
						justifyContent={"center"}
						spacing={1}
						my={6}
						px={5}
						direction={{ xs: "column", md: "row" }}
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
						<Grid
							item
							xs={12}
						>
							<Box
								display="flex"
								justifyContent={"flex-end"}
								alignItems={"flex-end"}
							>
								<Button
									sx={{
										p: 1,
										textTransform: "none",
										fontWeight: "bold",
									}}
									size="small"
									type="submit"
									variant="contained"
									color="primary"
								>
									Sign In
									<InputIcon sx={{ ml: 0.6 }} />
								</Button>
							</Box>
						</Grid>
					</Grid>
				</Card>
			</Box>
		</form>
	);
};

export default SignInForm;
