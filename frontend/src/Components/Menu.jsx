import React from "react";
import Spageti from "../assets/Images/Makanan/Spageti.jpg";
import NasiGoreng from "../assets/Images/Makanan/NasiGoreng.jpg";
import RiceBowl from "../assets/Images/Makanan/RiceBowl.jpg";
import MieGoreng from "../assets/Images/Makanan/MieGoreng.jpg";
import MieRebus from "../assets/Images/Makanan/MieRebus.jpg";
import DarkChoco from "../assets/Images/Minuman/DarkChoco.jpg";
import Expresso from "../assets/Images/Minuman/Expresso.jpg";
import LemonTea from "../assets/Images/Minuman/LemonTea.jpg";
import Caramel from "../assets/Images/Minuman/Caramel.jpg";
import LycheeTea from "../assets/Images/Minuman/LycheeTea.jpg";

import Food from "./Food";

function Menu() {
	return (
		<div id="menu" className="container-fluid px-5">
			<div className="d-flex justify-content-between">
				<h2 className="">Menu Terlaris</h2>
				<button className="btn btn-transparant px-3 rounded-0 border fw-bold">
					Semua Menu
				</button>
			</div>
			<div className="row pt-4 justify-content-center">
				<Food Image={Spageti} Name="Spageti" Price="Rp 25.000" />
				<Food Image={DarkChoco} Name="Dark Choco" Price="Rp 12.000" />
				<Food Image={NasiGoreng} Name="Nasi Goreng" Price="Rp 18.000" />
				<Food Image={Expresso} Name="Expresso" Price="Rp 13.000" />
				<Food Image={RiceBowl} Name="Rice Bowl" Price="Rp 22.000" />
				<Food Image={LemonTea} Name="Lemon Tea" Price="Rp 8.000" />
				<Food Image={Caramel} Name="Caramel" Price="Rp 12.000" />
				<Food Image={MieRebus} Name="Mie Rebus" Price="Rp 15.000" />
				<Food Image={LycheeTea} Name="Lychee Tea" Price="Rp 15.000" />
				<Food Image={MieGoreng} Name="Mie Goreng" Price="Rp 15.000" />
			</div>
		</div>
	);
}

export default Menu;
