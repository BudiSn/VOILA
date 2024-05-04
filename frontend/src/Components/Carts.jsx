import React from "react";
import { Link } from "react-router-dom";

function Carts() {
	return (
		<div>
			<div
				className="d-flex align-items-center"
				style={{ backgroundColor: "#ffeec8", height: "10vh" }}
			>
				<Link
					to="/"
					style={{ scale: "2.8", paddingLeft: "2vh", color: "#a6976d" }}
					className="bi bi-arrow-left-circle"
				></Link>
			</div>
			<div></div>
		</div>
	);
}

export default Carts;
