const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
	nama: String,
	harga: Number,
	quantity: Number,
});

const CartModel = mongoose.model("keranjang", CartSchema);
module.exports = CartModel;
