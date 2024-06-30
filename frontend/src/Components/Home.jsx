import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Delivery from "./Delivery";
import Tasty from "./Tasty";
import Menu from "./Menu";
import Footer from "./Footer";
import Scroll from "./Scroll";
import Order from "./Order";

function Home() {
	const [email, setEmail] = useState(null);

	useEffect(() => {
		const userEmail = localStorage.getItem("userEmail");
		setEmail(userEmail);
	}, []);

	return (
		<div>
			<Scroll />
			<Navbar />
			{email !== "admin@gmail.com" && <Hero />}
			{email !== "admin@gmail.com" && <Delivery />}
			{email !== "admin@gmail.com" && <Tasty />}
			{email !== "admin@gmail.com" && <Menu />}
			<Order />
			{email !== "admin@gmail.com" && <Footer />}
		</div>
	);
}

export default Home;
