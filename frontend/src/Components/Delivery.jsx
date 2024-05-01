import React from "react";
import Order from "../assets/Images/Order.png";
import Cook from "../assets/Images/Cook.png";
import Eat from "../assets/Images/Eat.png";

function Delivery() {
	return (
		<div id="proses">
			<div className="container-fluid px-4 warna-proses">
				<h2 className="text-center display-3 fw-bold">Food Ordering Work</h2>
				<div className="row g-4 py-5 row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 proses justify-content-center">
					<div className=" col px-5 ">
						<div className=" bg-gradient">
							<img src={Order} className="w-50 h-50 mb-2" alt="" />
						</div>
						<h2>Choose and Order Food</h2>
						<p>
							Melakukan pemesanan dengan meng-scan QR code untuk melakukan
							pemesanan dan memilih makanan yang ingin dipesan. Setelah memilih
							dapat melakukan Order agar bisa dikonfirmasikan oleh petugas Cafe.
						</p>
					</div>
					<div className="col px-5">
						<div className=" bg-gradient">
							<img src={Cook} className="w-50 h-50 mb-2" alt="" />
						</div>
						<h2>Cooking Your Food</h2>
						<p>
							Makanan sedang disiapkan, mungkin membutuhkan beberapa waktu.
							Karena semua makanan yang tersedia itu adalah makanan yang baru
							dimasak, jadi masih segar untuk dinikmati oleh pelanggan.
						</p>
					</div>
					<div className="col px-5">
						<div className=" bg-gradient">
							<img src={Eat} className="w-50 h-50 mb-2" alt="" />
						</div>
						<h2>Enjoy Your Food</h2>
						<p>
							Makanan siap dihidangkan. Selamat menikmati makanan yang telah
							dipesan sebelumnya.
						</p>
						<span className="text-center">😊😊😊</span>
					</div>
				</div>
			</div>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="#ffeec8"
					fill-opacity="1"
					d="M0,128L48,138.7C96,149,192,171,288,160C384,149,480,107,576,96C672,85,768,107,864,112C960,117,1056,107,1152,90.7C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
				></path>
			</svg>
		</div>
	);
}

export default Delivery;
