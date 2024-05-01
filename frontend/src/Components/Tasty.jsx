import React from "react";
import Info from "./Info";
import Delicious from "../assets/Images/Delicious.jpeg";
import Tasteful from "../assets/Images/Tasteful.jpeg";
import Savory from "../assets/Images/Savory.jpeg";

function Tasty() {
	return (
		<div id="tasty">
			<div className="container-fluid px-4 pb-5 tasty">
				<h2 className="text-center display-4 fw-bold">
					Delicious and Tasty Food
				</h2>
				<div className="container mt-4">
					<div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3 justify-content-center">
						<Info
							Image={Delicious}
							Title="Delicious"
							Deskripsi="Dengan rasa yang memikat, tekstur yang menyenangkan, dan aroma yang menggoda, setiap suapan menjadi sebuah kenikmatan yang tak terlupakan."
						/>

						<Info
							Image={Tasteful}
							Title="Tasteful"
							Deskripsi="Kombinasi yang tepat dari bahan-bahan berkualitas dengan rasa yang lezat, tampilan yang indah, dan kepuasan mulut yang sulit untuk dilupakan."
						/>

						<Info
							Image={Savory}
							Title="Savory"
							Deskripsi="Potongan kentang yang atau digoreng hingga keemasan dengan tambahan garam, memberikan kombinasi rasa yang memuaskan di setiap gigitannya."
						/>
					</div>
				</div>
			</div>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="#ffeec8"
					fill-opacity="1"
					d="M0,64L48,53.3C96,43,192,21,288,48C384,75,480,149,576,165.3C672,181,768,139,864,117.3C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
				></path>
			</svg>
		</div>
	);
}

export default Tasty;
