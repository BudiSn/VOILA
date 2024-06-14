import React from "react";
import Logo from "../assets/Images/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className=" container-fluid pt-1 px-5 header">
			<header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2  border-bottom border-dark">
				<a
					href="/"
					className="d-flex col-md-2 col-sm-2 mb-2 text-dark text-decoration-none"
				>
					<img src={Logo} alt="" className="w-25 h-25" />
				</a>
				<ul className="nav col-sm-8 col-12 col-md-8 mb-2 justify-content-center mb-md-0">
					<li className="mx-2">
						<a href="" className="nav-link px-2 warna">
							Home
						</a>
					</li>
					<li className="mx-2">
						<a href="#proses" className="nav-link px-2 warna">
							Process
						</a>
					</li>
					<li className="mx-2">
						<a href="#tasty" className="nav-link px-2 warna">
							Tentang
						</a>
					</li>
					<li className="mx-2">
						<Link to="/cart" className="nav-link px-2 warna">
							Keranjang
						</Link>
					</li>
					<li className="mx-2">
						<Link to="/history" className="nav-link px-2 warna">
							History
						</Link>
					</li>
				</ul>

				<div className="col-sm-2 col-md-2 text-end">
					<Link to="/login" className="btn py-2 mx-4 fw-bold bg-login">
						<i class="bi bi-person-circle">
							<br></br>Login
						</i>
					</Link>
				</div>
			</header>
		</div>
	);
};

export default Navbar;
