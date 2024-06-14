import React, { useState } from "react";
import axios from "axios";

function Food({ Image, Name, Price, Color, Code }) {
	const Submit = (e) => {
		e.preventDefault();
		const numericPrice = parseInt(Price.replace(".", ""));

		axios
			.post("http://localhost:3001/addFood", {
				kode: Code,
				nama: Name,
				harga: numericPrice,
				quantity: 1,
			})
			.then((result) => console.log(result.data))
			.catch((err) => console.log(err));
	};
	return (
		<div className="col-12 col-md-4">
			<div className="p-1">
				<form className="border shadow-sm bg-menu" onSubmit={Submit}>
					<img
						src={Image}
						alt=""
						className={`w-100 justify-content-center ${Color}`}
					/>

					<h3 className="px-1 pt-1">{Name}</h3>
					<p className="px-1">Rp {Price}</p>
					<button className="btn border bg-white w-100">{`Pilih Menu`}</button>
				</form>
			</div>
		</div>
	);
}

export default Food;
