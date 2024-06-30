const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
	meja: {
		type: Number,
		required: true,
	},
	notes: {
		type: String,
	},
	items: [
		{
			kode: Number,
			nama: String,
			harga: Number,
			quantity: Number,
			total: Number,
		},
	],
	totalPrice: Number,
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const OrderModel = mongoose.model("Order", OrderSchema);
module.exports = OrderModel;
