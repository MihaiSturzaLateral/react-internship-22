import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
const Header = () => {
	const location = useLocation();
	return (
		<nav
			className="navbar navbar-dark d-flex justify-content-start"
			style={{ backgroundColor: "#464E47" }}
		>
			<div className="txt p-2" style={{ fontWeight: "bold", color: "#F1FFFA" }}>
				WorldEarthQuakes
			</div>
			<Link to="/">
				<button
					className="button p-2"
					style={location.pathname === "/" ? { opacity: 1 } : { opacity: 0.6 }}
				>
					Home
				</button>
			</Link>
			<Link to="/About">
				<button
					className="button p-2"
					style={
						location.pathname === "/About" ? { opacity: 1 } : { opacity: 0.6 }
					}
				>
					About
				</button>
			</Link>
			<Link to="Contact">
				<button
					className="button p-2"
					style={
						location.pathname === "/Contact" ? { opacity: 1 } : { opacity: 0.6 }
					}
				>
					Contact
				</button>
			</Link>
		</nav>
	);
};

export default Header;
