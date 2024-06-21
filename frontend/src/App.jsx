import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Components/style.css";
import "./Components/main.js";
import Login from "./Components/Login";
import Create from "./Components/Create";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Order from "./Components/Order.jsx";
import PrivateRoute from "./Components/PrivateRoute.jsx";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<PrivateRoute>
								<Home />
							</PrivateRoute>
						}
					></Route>
					<Route path="/login" element={<Login />}></Route>
					<Route path="/create" element={<Create />}></Route>
					<Route path="/cart" element={<Cart />}></Route>
					<Route path="/order" element={<Order />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
