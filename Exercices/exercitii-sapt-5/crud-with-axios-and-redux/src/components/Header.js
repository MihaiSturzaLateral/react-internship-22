import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
	return (
		<nav className="navbar navbar-dark bg-dark d-flex justify-content-start">
			<div
				className="txt"
				style={{ fontWeight: "bold", color: "white", marginLeft: 20 }}
			>
				CrudWithAxios
			</div>

			<Link to="/">
				<button className="btn btn-dark" style={{ marginLeft: 50 }}>
					Add entry
				</button>
			</Link>
			<Link to="/List">
				<button className="btn btn-dark" style={{ marginLeft: 5 }}>
					See list
				</button>
			</Link>
		</nav>
	);
};

export default Header;
