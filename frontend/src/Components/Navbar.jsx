import React from "react";
import Logo from "../assets/Images/Logo.png";

const Navbar = () => {
	return (
		<div className=" container-fluid pt-1 px-5 header">
			<header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2  border-bottom border-dark">
				<a
					href="/"
					className="d-flex align-items-center col-md-3 col-sm-2 mb-sm-0 mb-2 mb-md-0 text-dark text-decoration-none"
				>
					<img src={Logo} alt="" className="w-25 h-25" />
				</a>
				<ul className="nav col-sm-8 col-12 col-md-auto mb-2 justify-content-center mb-md-0">
					<li className="mx-2">
						<a href="#" className="nav-link px-2 warna">
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
						<a href="#menu" className="nav-link px-2 warna">
							Makanan
						</a>
					</li>
				</ul>

				<div className="col-sm-2 col-md-3 text-end">
					{/* <i className="bi bi-search fs-3 me-3"></i>
					<i className="bi bi-cart2 fs-3 s">o</i> */}
					<button type="button" className="btn py-2  bg-login me-3">
						Login
					</button>
					<button type="button" className="btn py-2 fw-bold bg-login">
						Sign-up
					</button>
				</div>
			</header>
		</div>
	);
};

export default Navbar;
