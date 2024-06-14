import React from "react";
import Heros from "../assets/Images/Heros.png";

function Hero() {
	return (
		<div>
			<div className="container-fluid px-5 pt-3 hero-container">
				<div className="row flex-lg-row-reverse align-items-center g-5">
					<div className="col-10 col-sm-8 col-lg-5">
						<img
							src={Heros}
							className="d-block mx-lg-auto img-fluid"
							alt="Bootstrap Themes"
							width="650"
							height="450"
							loading="lazy"
						/>
					</div>
					<div className="col-lg-6 px-2 py-5 hero-text">
						<h1 className="display-2 fw-bold lh-1 mb-3">Cafe Voila</h1>
						<p className="lead font-hero fs-4 ">
							Café Voila adalah tempat yang memancarkan pesona Prancis di setiap
							sudutnya. Terletak di jantung kota, café ini mengundang para
							pengunjung untuk menikmati suasana yang hangat dan nyaman. Dengan
							dinding bata yang terawat baik, lampu gantung yang lembut, dan
							aroma kopi yang menggoda, Café Voila adalah tempat yang sempurna
							untuk bersantai sambil menikmati secangkir kopi atau croissant
							segar. Staf yang ramah dan menu yang beragam membuat pengalaman di
							Café Voila tak terlupakan. Voila!☕
						</p>
						<div className="d-grid gap-2 d-md-flex pt-4 justify-content-md-start">
							<a
								href="#menu"
								type="button"
								className="btn btn-warning btn-lg px-4 me-md-2 rounded-5"
							>
								Shop Your Food
							</a>
						</div>
					</div>
				</div>
			</div>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="#ffeec8"
					fill-opacity="1"
					d="M0,224L48,218.7C96,213,192,203,288,176C384,149,480,107,576,96C672,85,768,107,864,122.7C960,139,1056,149,1152,149.3C1248,149,1344,139,1392,133.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
				></path>
			</svg>
		</div>
	);
}

export default Hero;
