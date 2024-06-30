const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const CartModel = require("./models/Cart");
const UserModel = require("./models/User");
const OrderModel = require("./models/Order");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/voilaCoffee");

app.post("/addFood", (req, res) => {
	const { kode, nama, harga, quantity } = req.body;
	CartModel.findOne({ kode })
		.then((food) => {
			if (food) {
				food.quantity += quantity;
				food
					.save()
					.then((updatedFood) => res.json(updatedFood))
					.catch((err) => res.status(400).json(err));
			} else {
				CartModel.create({ kode, nama, harga, quantity })
					.then((newFood) => res.json(newFood))
					.catch((err) => res.status(400).json(err));
			}
		})
		.catch((err) => res.status(400).json(err));
});
app.get("/cart", (req, res) => {
	CartModel.find({})
		.then((food) => res.json(food))
		.catch((err) => res.json(err));
});
app.delete("/cart/:id", async (req, res) => {
	try {
		const deletedItem = await CartModel.findByIdAndDelete(req.params.id);

		if (!deletedItem) {
			return res.status(404).json({ error: "Item not found" });
		}

		res.json({ message: "Item deleted successfully", deletedItem });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
});

app.post("/createUser", async (req, res) => {
	const { email, nama, pass } = req.body;

	try {
		// Cek apakah user sudah terdaftar berdasarkan email
		const existingUser = await UserModel.findOne({ email });

		if (existingUser) {
			return res.status(400).json({ error: "User already exists" });
		}

		// Jika user belum terdaftar, buat akun baru
		const newUser = await UserModel.create({ email, nama, pass });
		res.json(newUser);
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
});

app.delete("/cart", (req, res) => {
	CartModel.deleteMany({})
		.then(() => res.json({ message: "Semua Item Telah Terhapus" }))
		.catch((err) => res.status(400).json(err));
});

// Pada endpoint POST /order, tambahkan validasi sebelum memproses
app.post("/order", async (req, res) => {
	try {
		const { meja, notes, foods } = req.body;

		// Mengambil item dari cart atau foods dari request body
		let items = await CartModel.find({});
		if (foods && foods.length > 0) {
			items = foods.map((food) => ({
				kode: food.kode,
				nama: food.nama,
				harga: food.harga,
				quantity: food.quantity,
				total: food.harga * food.quantity,
			}));
		}

		const newOrderItems = items.map((item) => ({
			kode: item.kode,
			nama: item.nama,
			harga: item.harga,
			quantity: item.quantity,
			total: item.harga * item.quantity,
		}));

		const existingOrder = await OrderModel.findOne({ meja });

		if (existingOrder) {
			// Gabungkan item baru dengan item yang sudah ada di dalam order
			newOrderItems.forEach((newItem) => {
				const existingItemIndex = existingOrder.items.findIndex(
					(item) => item.kode === newItem.kode
				);
				if (existingItemIndex !== -1) {
					existingOrder.items[existingItemIndex].quantity += newItem.quantity;
					existingOrder.items[existingItemIndex].total =
						existingOrder.items[existingItemIndex].quantity *
						existingOrder.items[existingItemIndex].harga;
				} else {
					existingOrder.items.push(newItem);
				}
			});
			existingOrder.totalPrice = existingOrder.items.reduce(
				(acc, item) => acc + item.total,
				0
			);
			existingOrder.notes = notes;
			await existingOrder.save();
		} else {
			const order = new OrderModel({
				meja,
				notes,
				items: newOrderItems,
				totalPrice: newOrderItems.reduce((acc, item) => acc + item.total, 0),
			});
			await order.save();
		}

		// Hapus semua item dari CartModel setelah membuat/memperbarui order
		await CartModel.deleteMany({});

		res.json({ alert: "Checkout successful" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
});
app.patch("/order/:orderId/notes", (req, res) => {
	const orderId = req.params.orderId;
	const { notes } = req.body;
	OrderModel.findByIdAndUpdate(orderId, { notes }, { new: true })
		.then((order) => res.json(order))
		.catch((err) => res.status(500).json(err));
});

app.get("/order", (req, res) => {
	OrderModel.find({})
		.then((food) => res.json(food))
		.catch((err) => res.json(err));
});
app.post("/completeOrder/:id", async (req, res) => {
	try {
		const orderId = req.params.id;
		await OrderModel.findByIdAndDelete(orderId);
		res.json({ message: "Order completed and removed" });
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
});

app.patch("/cart/:id/increase", async (req, res) => {
	try {
		const cartItem = await CartModel.findById(req.params.id);
		if (!cartItem) return res.status(404).json({ error: "Item not found" });

		cartItem.quantity += 1;
		await cartItem.save();
		res.json(cartItem);
	} catch (err) {
		res.status(500).json({ error: "Internal server error" });
	}
});

app.patch("/order/:orderId/item/:itemId/increase", async (req, res) => {
	try {
		const { orderId, itemId } = req.params;
		const order = await OrderModel.findById(orderId);
		if (!order) return res.status(404).json({ error: "Order not found" });

		const item = order.items.id(itemId);
		if (!item) return res.status(404).json({ error: "Item not found" });

		item.quantity += 1;
		item.total = item.harga * item.quantity;
		order.totalPrice = order.items.reduce((acc, item) => acc + item.total, 0);
		await order.save();

		res.json(order);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Internal server error" });
	}
});

app.patch("/order/:orderId/item/:itemId/decrease", async (req, res) => {
	try {
		const { orderId, itemId } = req.params;
		const order = await OrderModel.findById(orderId);
		if (!order) return res.status(404).json({ error: "Order not found" });

		const item = order.items.id(itemId);
		if (!item) return res.status(404).json({ error: "Item not found" });

		if (item.quantity > 1) {
			item.quantity -= 1;
			item.total = item.harga * item.quantity;
			if (item.quantity === 0) {
				item.remove();
			}
			order.totalPrice = order.items.reduce((acc, item) => acc + item.total, 0);
			await order.save();
		}

		res.json(order);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Internal server error" });
	}
});

// Endpoint untuk mengambil pesanan berdasarkan nomor meja
app.get("/order/:meja", (req, res) => {
	const { meja } = req.params;
	OrderModel.findOne({ meja })
		.then((order) => {
			if (!order) {
				return res.status(404).json({ message: "Order not found" });
			}
			res.json(order);
		})
		.catch((err) => res.status(500).json(err));
});

app.patch("/cart/:id/decrease", async (req, res) => {
	try {
		const cartItem = await CartModel.findById(req.params.id);
		if (!cartItem) return res.status(404).json({ error: "Item not found" });

		if (cartItem.quantity > 1) {
			cartItem.quantity -= 1;
			await cartItem.save();

			if (cartItem.quantity === 0) {
				await cartItem.remove();
				console.log(
					`Item ${cartItem.nama} removed from cart because quantity reached 0`
				);
			}

			res.json(cartItem);
		} else {
			console.log(`Quantity already at 0 for item ${cartItem.nama}`);
			res.json(cartItem); // Jika quantity sudah 0, tetap kirim response dengan item yang ada
		}
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Internal server error" });
	}
});
// Endpoint untuk menghapus item dari order
app.delete("/order/:orderId/item/:itemId", async (req, res) => {
	try {
		const { orderId, itemId } = req.params;

		const order = await OrderModel.findById(orderId);
		if (!order) {
			return res.status(404).json({ error: "Order not found" });
		}

		// Hapus item dari order
		order.items = order.items.filter((item) => item._id.toString() !== itemId);

		// Update totalPrice setelah item dihapus
		order.totalPrice = order.items.reduce((acc, item) => acc + item.total, 0);

		await order.save();

		res.json({ message: "Item removed from order", order });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
});

app.post("/login", async (req, res) => {
	const { email, pass } = req.body;

	try {
		// Cari pengguna berdasarkan email dan password
		const user = await UserModel.findOne({ email, pass });

		if (!user) {
			return res.status(404).json({ error: "Invalid credentials" });
		}

		// Jika login berhasil
		res.json({ message: "Login successful", user });
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
});
app.listen(3001, () => {
	console.log("Server terhubung");
});
