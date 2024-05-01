const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const CartModel = require("./models/Cart");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/voilaCoffee");

app.listen(3001, () => {
	console.log("Server terhubung");
});
