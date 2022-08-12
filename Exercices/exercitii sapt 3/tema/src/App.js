import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Photospage from "./pages/Photospage/Photospage";
import Commentspage from "./pages/Commentspage/Commentspage";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
			</div>
			<Routes>
				<Route exact path="/" element={<Homepage />} />
				<Route path="/Photospage" element={<Photospage />} />
				<Route path="/Commentspage" element={<Commentspage />} />
			</Routes>
		</Router>
	);
}

export default App;
