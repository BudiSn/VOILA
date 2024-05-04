import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Components/style.css";
import "./Components/main.js";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Home from "./Components/Home";
import Carts from "./Components/Carts";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/login" element={<Login />}></Route>
					<Route path="/signup" element={<SignUp />}></Route>
					<Route path="/cart" element={<Carts />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
