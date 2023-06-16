const express = require("express");
const mysql = require("mysql2");
const jwt = require("jsonwebtoken");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

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
					expiresIn: "1h", // Token expiration time
				});

				res.status(200).json({ success: true, token });
			}
		});
	});
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
