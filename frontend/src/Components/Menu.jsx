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
				<h2>Menu Terlaris</h2>
			</div>
			<div className="row pt-4 justify-content-center">
				<Food Code="101" Image={Spageti} Name="Spageti" Price={"25.000"} />
				<Food Code="201" Image={DarkChoco} Name="Dark Choco" Price={"12.000"} />
				<Food
					Code="102"
					Image={NasiGoreng}
					Name="Nasi Goreng"
					Price={"18.000"}
				/>
				<Food Code="202" Image={Expresso} Name="Expresso" Price={"13.000"} />
				<Food Code="103" Image={RiceBowl} Name="Rice Bowl" Price={"22.000"} />
				<Food Code="203" Image={LemonTea} Name="Lemon Tea" Price={"8.000"} />
				<Food Code="205" Image={Caramel} Name="Caramel" Price={"12.000"} />
				<Food Code="104" Image={MieRebus} Name="Mie Rebus" Price={"15.000"} />
				<Food Code="206" Image={LycheeTea} Name="Lychee Tea" Price={"15.000"} />
				<Food Code="105" Image={MieGoreng} Name="Mie Goreng" Price={"15.000"} />
			</div>
		</div>
	);
}

export default Menu;
