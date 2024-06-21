import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Order() {
	const [orderData, setOrderData] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3001/order")
			.then((result) => {
				console.log("Response Data: ", result.data);
				setOrderData(result.data);
			})
			.catch((err) => console.log("Error: ", err));
	}, []);

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
					Orderan
				</p>
			</div>
			<div className="container-fluid pt-2 px-5">
				<table className="table text-center fs-5 table-custom">
					<thead className="fs-4">
						<tr>
							<th className="py-3">No</th>
							<th className="py-3">Nama</th>
							<th className="py-3">Jumlah</th>
							<th className="py-3">Harga</th>
							<th className="py-3">Total</th>
							<th className="py-3">Jumlah Bayar</th>
						</tr>
					</thead>
					<tbody>
						{orderData.map((order, orderIndex) =>
							order.items.map((item, itemIndex) => (
								<tr key={order._id + "-" + item.kode + "-" + itemIndex}>
									{itemIndex === 0 && (
										<td
											className="py-4 align-middle"
											rowSpan={order.items.length}
										>
											{orderIndex + 1}
										</td>
									)}
									<td className="py-4">{item.nama}</td>
									<td className="py-4">{item.quantity}</td>
									<td className="py-4">Rp {item.harga}</td>
									<td className="py-4">Rp {item.total}</td>
									{itemIndex === 0 && (
										<td
											className="py-4 align-middle text-center"
											rowSpan={order.items.length}
										>
											Rp {order.totalPrice}
										</td>
									)}
								</tr>
							))
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Order;
