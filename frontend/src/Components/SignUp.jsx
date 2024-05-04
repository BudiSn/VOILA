import React from "react";
import logo from "../assets/Images/Logo.png";
import { Link } from "react-router-dom";
function SignUp() {
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
				<form className="form-signin">
					<h1 class="h3 mb-5 fw-normal display-4 text-center">
						Create Account
					</h1>
					<label htmlFor="email" class="fs-7 py-1">
						Email address
					</label>
					<input
						type="email"
						id="email"
						className="form-control mb-2"
						placeholder="Email Address"
						required
						autoFocus
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
					/>
					<div className="mt-5 mb-5">
						<p>
							Already have account!! <a href="/login">Login</a>
						</p>
					</div>
					<div className="text-center">
						<button class="btn btn-lg btn-primary btn-block" type="submit">
							Sign Up
						</button>
					</div>
				</form>
			</main>
		</div>
	);
}

export default SignUp;
