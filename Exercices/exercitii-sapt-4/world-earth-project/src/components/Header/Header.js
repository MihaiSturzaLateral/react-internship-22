import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
const Header = () => {
	let isVisible;
	const location = useLocation();
	location.pathname === "/" ? (isVisible = true) : (isVisible = false);

	return (
		<nav
			className="navbar navbar-dark bg-success d-flex justify-content-start"
			style={{ marginBottom: 40 }}
		>
			<div className="txt p-2" style={{ color: "white", fontWeight: "bold" }}>
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
			{isVisible && (
				<form
					className="d-flex ms-auto"
					role="search"
					style={{ marginRight: 10 }}
				>
					<input
						className="form-control me-2"
						type="search"
						placeholder="Search"
						aria-label="Search"
					/>
					<button className="btn btn-outline-light" type="submit">
						Search
					</button>
				</form>
			)}
		</nav>
	);
};

export default Header;
