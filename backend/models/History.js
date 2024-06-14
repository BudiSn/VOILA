const mongoose = require("mongoose");

const HistoryItemSchema = new mongoose.Schema({
	kode: Number,
	nama: String,
	harga: Number,
	quantity: Number,
	total: Number,
});

const HistorySchema = new mongoose.Schema({
	items: [HistoryItemSchema],
	totalPrice: Number,
	date: { type: Date, default: Date.now },
});

const HistoryModel = mongoose.model("historys", HistorySchema);
module.exports = HistoryModel;
