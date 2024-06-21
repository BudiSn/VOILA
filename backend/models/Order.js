const mongoose = require("mongoose");

const OrderItemSchema = new mongoose.Schema({
	kode: Number,
	nama: String,
	harga: Number,
	quantity: Number,
	total: Number,
});

const OrderSchema = new mongoose.Schema({
	items: [OrderItemSchema],
	totalPrice: Number,
	date: { type: Date, default: Date.now },
});

const OrderModel = mongoose.model("orders", OrderSchema);
module.exports = OrderModel;
