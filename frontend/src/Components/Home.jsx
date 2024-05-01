import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Delivery from "./Delivery";
import Tasty from "./Tasty";
import Menu from "./Menu";
import Footer from "./Footer";
import Scroll from "./Scroll";
import { useState, useEffect } from "react";

function Home() {
	return (
		<div>
			<Scroll />
			<Navbar />
			<Hero />
			<Delivery />
			<Tasty />
			<Menu />
			<Footer />
		</div>
	);
}

export default Home;
