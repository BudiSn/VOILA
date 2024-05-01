import React from "react";

function Info({ Image, Title, Deskripsi }) {
	return (
		<div class="col">
			<div class="card shadow-sm">
				<img src={Image} alt="" />
				<div class="card-body d-flex">
					<p>
						<h2 className="fs-2">{Title}</h2>
						<p className="fs-5">{Deskripsi}</p>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Info;
