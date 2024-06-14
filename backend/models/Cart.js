const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
	kode: Number,
	nama: String,
	harga: Number,
	quantity: Number,
});

const CartModel = mongoose.model("carts", CartSchema);
module.exports = CartModel;
