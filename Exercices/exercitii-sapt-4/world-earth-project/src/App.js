import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import About from "./pages/About/About.js";
import Contact from "./pages/Contact/Contact.js";
import EarthquakeDetails from "./pages/EarthquakeDetails/EarthquakeDetails";

const App = () => {
	return (
		<Router>
			<div className="App">
				<Header />
				<Footer />
			</div>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/About" element={<About />} />
				<Route path="/Contact" element={<Contact />} />
				<Route path="/EarthquakeDetails" element={<EarthquakeDetails />} />
			</Routes>
		</Router>
	);
};

export default App;
