import React, { useState } from "react";
import logo from "../assets/Images/Logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
function Create() {
	const [email, setEmail] = useState("");
	const [nama, setNama] = useState("");
	const [pass, setPass] = useState("");
	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const Submit = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:3001/createUser", { email, nama, pass })
			.then((result) => {
				console.log(result);
				setEmail("");
				setNama("");
				setPass("");
				setSuccessMessage("Create Account Successful!");
				setErrorMessage("");
				setTimeout(() => {
					setSuccessMessage("");
				}, 3000);
			})
			.catch((err) => {
				if (err.response && err.response.data.error === "User already exists") {
					setErrorMessage("Account already exists for this email");
				} else {
					setErrorMessage("Error creating account. Please try again later.");
				}
				console.log(err);
			});
	};
	return (
		<div className=" bg-account">
			<div className="d-flex ">
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
				style={{ paddingTop: "8vh", paddingBottom: "8vh" }}
				className="login container-fluid"
			>
				<img
					style={{ width: "150px", marginLeft: "20vh" }}
					src={logo}
					alt="Voila Cafe"
					className="mb-2"
				/>
				<form className="form-signin" onSubmit={Submit}>
					<h1 className="h3 mb-5 fw-normal display-4 text-center">
						Create Account
					</h1>
					{successMessage && (
						<div className="alert alert-success" role="alert">
							{successMessage}
						</div>
					)}
					{errorMessage && (
						<div className="alert alert-danger" role="alert">
							{errorMessage}
						</div>
					)}
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
					<label htmlFor="name" className="sr-only fs-7 py-1">
						Username
					</label>
					<input
						type="text"
						id="name"
						className="form-control mb-2"
						placeholder="Username"
						required
						value={nama}
						onChange={(e) => setNama(e.target.value)}
					/>
					<label htmlFor="pass" className="sr-only fs-7 py-1">
						Password
					</label>
					<input
						type="password"
						id="pass"
						className="form-control mb-2"
						placeholder="Password"
						required
						value={pass}
						onChange={(e) => setPass(e.target.value)}
					/>
					<div className="mt-5 mb-5">
						<p>
							Already have an account? <a href="/login">Login</a>
						</p>
					</div>
					<div className="text-center">
						<button className="btn btn-lg btn-primary btn-block" type="submit">
							Sign Up
						</button>
					</div>
				</form>
			</main>
		</div>
	);
}
export default Create;
