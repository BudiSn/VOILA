const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	email: String,
	nama: String,
	pass: String,
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;

// tes//////////////////////////////////////////////////////
// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");

// // Definisi skema untuk model User
// const UserSchema = new mongoose.Schema({
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         trim: true // Menghapus spasi kosong dari inputan
//     },
//     nama: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     pass: {
//         type: String,
//         required: true,
//         minLength: 6 // Minimal panjang password
//     }
// });

// // Sebelum menyimpan, hash kata sandi menggunakan bcrypt
// UserSchema.pre("save", async function (next) {
//     const user = this;
//     if (!user.isModified("pass")) return next();

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(user.pass, salt);
//     user.pass = hashedPassword;
//     next();
// });

// // Metode untuk memverifikasi password
// UserSchema.methods.isValidPassword = async function (password) {
//     return await bcrypt.compare(password, this.pass);
// };

// // Buat model berdasarkan skema
// const UserModel = mongoose.model("User", UserSchema);

// // Ekspor model untuk digunakan di aplikasi lainnya
// module.exports = UserModel;
