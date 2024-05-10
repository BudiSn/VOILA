import React from "react";
import { Link } from "react-router-dom";

function Carts() {
	return (
		<div>
			<div
				className="container-fluid d-flex align-items-center header"
				style={{ height: "10vh" }}
			>
				<Link
					to="/"
					style={{ fontSize: "5vh", paddingLeft: "2vh", color: "#7A7052" }}
					className="bi bi-arrow-left-circle text-decoration-none col-1"
				></Link>
				<p
					style={{ fontSize: "5vh", paddingTop: "10px", color: "#7A7052" }}
					className="col-1"
				>
					Keranjang
				</p>
			</div>

			<div
				className="py-auto"
				style={{ right: "60px", bottom: "40px", position: "fixed" }}
			>
				<Link
					style={{ color: "black", fontSize: "4vh" }}
					to="/"
					class="bi bi-trash px-4"
				></Link>
				<Link
					to="/"
					style={{ color: "#302b1d" }}
					className="text-decoration-none py-3 px-5 fs-5 fw-bold rounded-pill header border border-warning"
				>
					CheckOut
				</Link>
			</div>
		</div>
	);
}

export default Carts;
