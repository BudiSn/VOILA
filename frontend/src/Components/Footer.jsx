import React, { useState } from "react";
import PopUp from "./PopUp";

function Footer() {
	const [showPopUp, setShowPopUp] = useState(false);
	const tooglePopUp = () => {
		setShowPopUp(!showPopUp);
	};

	return (
		<div id="footer">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="#ffeec8"
					fillOpacity={"1"}
					d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
				></path>
			</svg>
			<div className="container-fluid py-3 footer display-7">
				<ul className="nav justify-content-center pb-3 mb-3">
					<li className="nav-item">
						<a href="#" className="nav-link px-2 text-muted">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a href="#proses" className="nav-link px-2 text-muted">
							Process
						</a>
					</li>
					<li className="nav-item">
						<a href="#tasty" className="nav-link px-2 text-muted">
							About
						</a>
					</li>
					<li className="nav-item">
						<a href="#menu" className="nav-link px-2 text-muted">
							Menu
						</a>
					</li>
					{/* <li className="nav-item">
						<span
							className="nav-link px-2 text-muted"
							type="button"
							onClick={tooglePopUp}
						>
							Contact
						</span>

						<div
							className={`modal fade ${showModal ? "show" : ""}`}
							id="exampleModalCenter"
							tabindex="-1"
							role="dialog"
							aria-labelledby="exampleModalCenterTitle"
							aria-hidden={!showModal}
						>
							<div
								className="modal-dialog modal-dialog-centered"
								role="document"
							>
								<div className="modal-content">
									<div className="modal-header">
										<h5 className="modal-title" id="exampleModalLongTitle">
											Modal title
										</h5>
										<button
											onClick={handleCloseModal}
											type="button"
											className="close"
											data-dismiss="modal"
											aria-label="Close"
										>
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div class="modal-body">...</div>
								</div>
							</div>
						</div>
					</li> */}
				</ul>
				<p className="text-center text-muted">
					&copy; 2024 VOILA COFFEE by G r i m
				</p>
			</div>
		</div>
	);
}

export default Footer;
