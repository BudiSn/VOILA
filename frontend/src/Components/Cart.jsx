import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Cart() {
	const [foods, setFoods] = useState([]);
	useEffect(() => {
		axios
			.get("http://localhost:3001/cart")
			.then((result) => setFoods(result.data))
			.catch((err) => console.log(err));
	});
	const handleDelete = () => {
		axios
			.delete("http://localhost:3001/cart")
			.then(() => setFoods([]))
			.catch((err) => console.log(err));
	};
	const handleCheckout = () => {
		axios
			.post("http://localhost:3001/history")
			.then((response) => {
				console.log(response.data);
				setFoods([]);
			})
			.catch((err) => console.log(err));
	};
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
					style={{
						fontSize: "5vh",
						paddingTop: "10px",
						color: "#7A7052",
					}}
					className="col-1"
				>
					Keranjang
				</p>
			</div>
			<div className="container-fluid px-5">
				<table className="table text-center fs-5">
					<thead className="fs-4">
						<tr>
							<th className="py-3">Nama</th>
							<th className="py-3">Jumlah</th>
							<th className="py-3">Harga</th>
						</tr>
					</thead>
					<tbody>
						{foods.map((food) => {
							return (
								<tr>
									<td className="py-4">{food.nama}</td>
									<td className="py-4">{food.quantity}</td>
									<td className="py-4">Rp {food.harga}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>

			<div
				className="py-auto"
				style={{ right: "60px", bottom: "40px", position: "fixed" }}
			>
				{/* Tombol Hapus */}
				<Link
					style={{ color: "black", fontSize: "4vh" }}
					to="/"
					className="bi bi-trash px-4"
					onClick={handleDelete}
				></Link>
				{/* Tombol CheckOut */}
				<Link
					to="/"
					style={{ color: "#302b1d" }}
					className="text-decoration-none py-3 px-5 fs-5 fw-bold rounded-pill header border border-warning"
					onClick={handleCheckout}
				>
					CheckOut
				</Link>
			</div>
		</div>
	);
}

export default Cart;
