import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyReports from "./pages/myReports/MyReports.js";
import CheckTool from "./pages/checkTool/CheckTool.js";
import Details from "./pages/details/Details.js";
import Home from "./pages/home/Home.js";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
	return (
		<Router>
			<div className="App">
				<Header />
				<Footer />
			</div>

			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/Details" element={<Details />} />
				<Route path="/CheckTool" element={<CheckTool />} />
				<Route path="/MyReports" element={<MyReports />} />
			</Routes>
		</Router>
	);
};

export default App;
