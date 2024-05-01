import React from "react";

function Food({ Image, Name, Price, Color }) {
	return (
		<div className="col-12 col-md-4">
			<div className="p-1">
				<div className="border shadow-sm bg-menu">
					<img
						src={Image}
						alt=""
						className={`w-100 justify-content-center ${Color}`}
					/>
					<h3 className="px-1 pt-1">{Name}</h3>
					<p className="px-1">{Price}</p>
					<button className="btn border bg-white w-100">Pilih Menu</button>
				</div>
			</div>
		</div>
	);
}

export default Food;
