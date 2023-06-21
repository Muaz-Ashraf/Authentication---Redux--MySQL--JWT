const express = require("express");
const mysql = require("mysql2");
const jwt = require("jsonwebtoken");
const app = express();
const port = 5000;
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(
	cors({
		credentials: true,
		origin: "http://127.0.0.1:5173",
	})
);

// Middleware to parse JSON request bodies
app.use(bodyParser.json());
app.use(cookieParser());

// Create a MySQL connection pool
const pool = mysql.createPool({
	host: "localhost",
	user: "root",
	password: "332211",
	database: "mydatabase",
});

// Secret key for JWT
const jwtSecret = "scm"; // Replace with your own secret key

app.get("/", (req, res) => {
	res.send("Hello EXPRESS World!");
});

// Check if SQL connection is made
pool.getConnection((err, connection) => {
	if (err) {
		console.error("Error connecting to MySQL:", err);
		return;
	}
	console.log("Connected to MySQL!");
	connection.release();
});

app.post("/api/login", (req, res) => {
	const { username, password } = req.body;

	// Perform the MySQL query to check credentials
	pool.getConnection((err, connection) => {
		if (err) {
			console.error("Error connecting to MySQL:", err);
			res
				.status(500)
				.json({ success: false, message: "Internal server error" });
			return;
		}

		const query = "SELECT * FROM users WHERE username = ? AND password = ?";
		connection.query(query, [username, password], (error, results) => {
			connection.release();

			if (error) {
				console.error("Error executing MySQL query:", error);
				res
					.status(500)
					.json({ success: false, message: "Internal server error" });
				return;
			}

			if (results.length === 0) {
				// No matching user found in the database
				res
					.status(401)
					.json({ success: false, message: "Invalid credentials" });
			} else {
				// Login successful
				const user = results[0];

				// Create JWT token
				const token = jwt.sign({ userId: user.id }, jwtSecret, {
					expiresIn: "1hr", // Token expiration time
				});

				// Set the HTTP-only cookie
				res.cookie("token", token, {
					httpOnly: true,
					sameSite: "lax",
					maxAge: 60 * 60 * 1000, // 1 hour in milliseconds
				});

				res.status(200).json({ success: true, user });
			}
		});
	});
});
app.get("/api/user", (req, res) => {
	// Extract the token from the request cookies
	const token = req.cookies.token;

	if (!token) {
		// No token found, user is not authenticated
		res.status(401).json({ success: false, message: "User not authenticated" });
		return;
	}

	// Verify the token
	jwt.verify(token, jwtSecret, (err, decoded) => {
		if (err) {
			// Token verification failed
			console.error("Token verification error:", err);
			res.status(401).json({ success: false, message: "Invalid token" });
			return;
		}

		// Token is valid, retrieve user information based on the decoded payload
		const userId = decoded.userId;

		// Perform the MySQL query to fetch the user information
		pool.getConnection((err, connection) => {
			if (err) {
				console.error("Error connecting to MySQL:", err);
				res
					.status(500)
					.json({ success: false, message: "Internal server error" });
				return;
			}

			const query = "SELECT * FROM users WHERE id = ?";
			connection.query(query, [userId], (error, results) => {
				connection.release();

				if (error) {
					console.error("Error executing MySQL query:", error);
					res
						.status(500)
						.json({ success: false, message: "Internal server error" });
					return;
				}

				if (results.length === 0) {
					// No matching user found in the database
					res.status(404).json({ success: false, message: "User not found" });
				} else {
					// User information found
					const user = results[0];
					res.status(200).json({ success: true, user });
				}
			});
		});
	});
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
