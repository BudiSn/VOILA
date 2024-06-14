import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Components/style.css";
import "./Components/main.js";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import History from "./Components/History.jsx";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/login" element={<Login />}></Route>
					<Route path="/signup" element={<SignUp />}></Route>
					<Route path="/cart" element={<Cart />}></Route>
					<Route path="/history" element={<History />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
