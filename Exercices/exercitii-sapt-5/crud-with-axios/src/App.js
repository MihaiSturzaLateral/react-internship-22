import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Update from "./pages/update/Update";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
	return (
		<Router>
			<div className="App"></div>
			<Header />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/List" element={<List />} />
				<Route path="/Update" element={<Update />} />
			</Routes>
		</Router>
	);
}

export default App;
