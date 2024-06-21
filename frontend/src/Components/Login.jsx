import React, { useState } from "react";
import logo from "../assets/Images/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post("http://localhost:3001/login", {
				email,
				pass,
			});

			if (response.data.message === "Login successful") {
				localStorage.setItem("userEmail", email); // Simpan email ke localStorage
				navigate("/");
			} else {
				setError("Password yang dimasukkan salah");
			}
		} catch (error) {
			setError("Internal server error");
			console.error(error);
		}
	};
	return (
		<div className="bg-account">
			<div className="d-flex">
				<Link
					to="/"
					style={{
						scale: "3",
						color: "#2f5061",
						paddingTop: "2vh",
						paddingLeft: "2vh",
					}}
					className="bi bi-arrow-left-circle"
				></Link>
			</div>
			<main
				style={{ paddingTop: "11.4vh", paddingBottom: "14vh" }}
				className="login container-fluid "
			>
				<img
					style={{ width: "150px", marginLeft: "20vh" }}
					src={logo}
					alt="Voila Cafe"
					className="mb-2"
				/>
				<form className="form-signin" onSubmit={handleSubmit}>
					<h1 className="h3 mb-5 fw-normal display-4 text-center">
						Login Account
					</h1>
					<label htmlFor="email" className="fs-7 py-1">
						Email address
					</label>
					<input
						type="email"
						id="email"
						className="form-control mb-2"
						placeholder="Email Address"
						required
						autoFocus
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<label htmlFor="pass" className="sr-only fs-7 py-1">
						Password
					</label>
					<input
						type="password"
						id="pass"
						className="form-control"
						placeholder="Password"
						required
						value={pass}
						onChange={(e) => setPass(e.target.value)}
					/>
					<div className="mt-5 mb-5">
						<p>
							Don't have an account? <Link to="/create">Create Account</Link>
						</p>
					</div>
					<div className="text-center">
						<button className="btn btn-lg btn-primary btn-block" type="submit">
							Sign in
						</button>
					</div>
				</form>
				{error && (
					<div className="alert alert-danger mt-3" role="alert">
						{error}
					</div>
				)}
			</main>
		</div>
	);
}
export default Login;
