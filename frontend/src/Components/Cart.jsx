import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Cart() {
	const [foods, setFoods] = useState([]);
	const [meja, setMeja] = useState("");
	const [notes, setNotes] = useState("");
	const [checkoutStatus, setCheckoutStatus] = useState(null); // null: belum checkout, true: sukses, false: gagal
	const [orderId, setOrderId] = useState(null); // Track if it's an existing order
	const [showNotes, setShowNotes] = useState(true);
	const [initialCartItems, setInitialCartItems] = useState([]); // Store initial cart items
	const [initialNotes, setInitialNotes] = useState("");
	// Fetch initial cart data
	useEffect(() => {
		axios
			.get("http://localhost:3001/cart")
			.then((result) => {
				setFoods(result.data);
				setInitialCartItems(result.data); // Store initial cart items
			})
			.catch((err) => console.log(err));
	}, []);

	const fetchOrderData = (meja) => {
		axios
			.get(`http://localhost:3001/order/${meja}`)
			.then((result) => {
				const order = result.data;

				// Map items from order to the same structure as cart items and give them unique IDs
				const updatedOrderItems = order.items.map((item) => ({
					...item,
					_id: `order-${item._id}`, // Add a prefix to ensure unique IDs
				}));

				// Merge initial cart items and order items by combining and updating quantities
				const mergedItems = mergeCartAndOrderItems(
					initialCartItems,
					updatedOrderItems
				);

				setFoods(mergedItems);
				setNotes(order.notes);
				setOrderId(order._id); // Store the order ID
				setInitialNotes(order.notes); // Store initial notes
			})
			.catch((err) => {
				console.log(err);
				// Handle case where order for the table number is not found
				if (err.response && err.response.status === 404) {
					setFoods(initialCartItems); // Revert to initial cart items if order not found
					setNotes(""); // Clear the notes
					setOrderId(null); // Clear the order ID
					setInitialNotes(""); // Clear initial notes
				}
			});
	};

	const handleDelete = () => {
		axios
			.delete("http://localhost:3001/cart")
			.then(() => setFoods([]))
			.catch((err) => console.log(err));
		setShowNotes(true);
	};
	const mergeCartAndOrderItems = (cartItems, orderItems) => {
		const mergedItems = [];

		// Map through cart items
		cartItems.forEach((cartItem) => {
			// Check if cart item exists in order items
			const foundOrderItem = orderItems.find(
				(orderItem) => orderItem.kode === cartItem.kode
			);

			if (foundOrderItem) {
				// If found, update quantity in order item
				foundOrderItem.quantity += cartItem.quantity;
				mergedItems.push(foundOrderItem);
			} else {
				// If not found, push cart item to merged items
				mergedItems.push(cartItem);
			}
		});

		// Add order items that are not already in cart items
		orderItems.forEach((orderItem) => {
			const foundInMergedItems = mergedItems.find(
				(item) => item._id === `order-${orderItem._id}`
			);

			if (!foundInMergedItems) {
				mergedItems.push(orderItem);
			}
		});

		return mergedItems;
	};

	const handleSearch = () => {
		if (meja) {
			fetchOrderData(meja);
		} else {
			alert("Nomor meja harus diisi!");
		}
	};
	const handleSaveNotes = () => {
		if (!orderId) {
			alert("Tidak ada pesanan yang ditemukan untuk menyimpan catatan.");
			return;
		}

		if (notes !== initialNotes) {
			const updateNotesData = {
				notes,
			};
			axios
				.patch(`http://localhost:3001/order/${orderId}/notes`, updateNotesData)
				.then((response) => {
					console.log(response.data);
					setInitialNotes(notes); // Update initial notes to current notes
					setCheckoutStatus(true);
					setTimeout(() => setCheckoutStatus(null), 3000);
				})
				.catch((err) => {
					console.log(err);
					setCheckoutStatus(false);
					setTimeout(() => setCheckoutStatus(null), 3000);
				});
		} else {
			alert("Tidak ada perubahan yang terdeteksi pada catatan.");
		}
	};

	const handleCheckout = () => {
		if (!meja) {
			alert("Meja harus diisi untuk checkout!");
			return;
		}

		const itemsToCheckout = foods.filter((food) => food.quantity > 0);

		const orderData = {
			meja,
			foods: itemsToCheckout,
		};

		if (orderId) {
			axios
				.put(`http://localhost:3001/order/${orderId}`, orderData)
				.then((response) => {
					console.log(response.data);
					setFoods([]);
					setMeja("");
					setCheckoutStatus(true);
					setOrderId(null); // Reset order ID
					setTimeout(() => setCheckoutStatus(null), 3000);
				})
				.catch((err) => {
					console.log(err);
					setCheckoutStatus(false);
					setTimeout(() => setCheckoutStatus(null), 3000);
				});
		} else {
			axios
				.post("http://localhost:3001/order", { ...orderData, notes })
				.then((response) => {
					console.log(response.data);
					setFoods([]);
					setMeja("");
					setNotes("");
					setCheckoutStatus(true);
					setTimeout(() => setCheckoutStatus(null), 3000);
				})
				.catch((err) => {
					console.log(err);
					setCheckoutStatus(false);
					setTimeout(() => setCheckoutStatus(null), 3000);
				});
		}
	};

	const increaseQuantity = (id) => {
		if (id.startsWith("order-")) {
			const itemId = id.replace("order-", "");
			axios
				.patch(`http://localhost:3001/order/${orderId}/item/${itemId}/increase`)
				.then((response) => {
					const updatedItem = response.data.items.find(
						(item) => item._id === itemId
					);
					setFoods((prevFoods) =>
						prevFoods.map((food) =>
							food._id === id
								? {
										...food,
										quantity: updatedItem.quantity,
										total: updatedItem.total,
								  }
								: food
						)
					);
				})
				.catch((err) => console.log(err));
		} else {
			axios
				.patch(`http://localhost:3001/cart/${id}/increase`)
				.then((response) => {
					setFoods((prevFoods) =>
						prevFoods.map((food) => (food._id === id ? response.data : food))
					);
				})
				.catch((err) => console.log(err));
		}
	};

	const decreaseQuantity = (id) => {
		console.log(`Decreasing quantity for ID: ${id}`); // Debug log
		if (id.startsWith("order-")) {
			const itemId = id.replace("order-", "");
			axios
				.patch(`http://localhost:3001/order/${orderId}/item/${itemId}/decrease`)
				.then((response) => {
					const updatedItem = response.data.items.find(
						(item) => item._id === itemId
					);
					setFoods((prevFoods) =>
						prevFoods.map((food) =>
							food._id === id
								? {
										...food,
										quantity: updatedItem.quantity,
										total: updatedItem.total,
								  }
								: food
						)
					);
				})
				.catch((err) => console.log(err));
		} else {
			axios
				.patch(`http://localhost:3001/cart/${id}/decrease`)
				.then((response) => {
					setFoods((prevFoods) =>
						prevFoods.map((food) => (food._id === id ? response.data : food))
					);
				})
				.catch((err) => console.log(err));
		}
	};

	const handleRemoveItem = (id) => {
		if (id.startsWith("order-")) {
			// Remove item from order
			const itemId = id.replace("order-", "");
			axios
				.delete(`http://localhost:3001/order/${orderId}/item/${itemId}`)
				.then(() => {
					setFoods((prevFoods) => prevFoods.filter((food) => food._id !== id));
				})
				.catch((err) => console.log(err));
		} else {
			// Remove item from cart
			axios
				.delete(`http://localhost:3001/cart/${id}`)
				.then(() => {
					setFoods((prevFoods) => prevFoods.filter((food) => food._id !== id));
				})
				.catch((err) => console.log(err));
		}
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
					style={{ fontSize: "5vh", paddingTop: "10px", color: "#7A7052" }}
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
							<th className="py-3">Actions</th>
						</tr>
					</thead>
					<tbody>
						{foods.map((food) => (
							<tr key={food._id}>
								<td className="py-4">{food.nama}</td>
								<td className="py-4">
									<button
										onClick={() => decreaseQuantity(food._id)}
										className="btn btn-danger"
									>
										-
									</button>
									<span className="px-3">{food.quantity}</span>
									<button
										onClick={() => increaseQuantity(food._id)}
										className="btn btn-success"
									>
										+
									</button>
								</td>
								<td className="py-4">Rp {food.harga}</td>
								<td className="py-4">
									<button
										onClick={() => handleRemoveItem(food._id)}
										className="btn btn-danger"
									>
										Hapus
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className="container-fluid px-5">
				<div className="row mb-3">
					<div className="col">
						<input
							type="number"
							value={meja}
							onChange={(e) => setMeja(e.target.value)}
							className="form-control"
							placeholder="Nomor Meja"
						/>
					</div>
					<div className="col">
						<button onClick={handleSearch} className="btn btn-primary">
							Cari
						</button>
					</div>
				</div>
				{showNotes && (
					<div className="row mb-3">
						<div className="col">
							<textarea
								value={notes}
								onChange={(e) => setNotes(e.target.value)}
								className="form-control"
								placeholder="Catatan Pesanan"
								rows="3"
							></textarea>
						</div>
						<div className="col">
							<button onClick={handleSaveNotes} className="btn btn-secondary">
								Simpan Catatan
							</button>
						</div>
					</div>
				)}
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
					onClick={(e) => {
						e.preventDefault();
						handleDelete();
					}}
				></Link>
				{/* Tombol CheckOut */}
				<button
					onClick={handleCheckout}
					style={{ color: "#302b1d" }}
					className="btn btn-warning py-3 px-5 fs-5 fw-bold rounded-pill header"
				>
					CheckOut
				</button>
				{checkoutStatus === false && (
					<p style={{ color: "red", marginTop: "10px" }}>
						Gagal menyimpan data. Coba lagi.
					</p>
				)}
				{checkoutStatus === true && (
					<p style={{ color: "green", marginTop: "10px" }}>
						Data telah berhasil diubah
					</p>
				)}
			</div>
		</div>
	);
}

export default Cart;
