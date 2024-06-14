const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const CartModel = require("./models/Cart");
const UserModel = require("./models/User");
const HistoryModel = require("./models/History");

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
app.post("/history", async (req, res) => {
	try {
		const items = await CartModel.find({});
		if (items.length === 0)
			return res.status(400).json({ error: "Cart is empty" });

		const historyItems = items.map((item) => ({
			kode: item.kode,
			nama: item.nama,
			harga: item.harga,
			quantity: item.quantity,
			total: item.harga * item.quantity,
		}));

		const totalPrice = historyItems.reduce((acc, item) => acc + item.total, 0);

		const history = new HistoryModel({ items: historyItems, totalPrice });
		await history.save();

		await CartModel.deleteMany({});

		res.json({ message: "Checkout successful", history });
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
});

app.get("/history", (req, res) => {
	HistoryModel.find({})
		.then((food) => res.json(food))
		.catch((err) => res.json(err));
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
