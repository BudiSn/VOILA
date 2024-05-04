import React from "react";
import { useState, useEffect } from "react";

function Scroll() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		function handleScroll() {
			if (window.pageYOffset > 400) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		}

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		<div>
			<button
				onClick={scrollToTop}
				className={`top ${isVisible ? "show" : "hide"}`}
				style={{
					fontSize: "25px",
					height: "40px",
					width: "40px",
					position: "fixed",
					bottom: "20px",
					right: "48%",
					display: isVisible ? "block" : "none",
					zIndex: "1000",
					borderRadius: "40px",
					backgroundColor: "#fdd47d",
					borderWidth: "0px",
				}}
			>
				<i class="bi bi-arrow-up"></i>
			</button>
		</div>
	);
}

export default Scroll;
