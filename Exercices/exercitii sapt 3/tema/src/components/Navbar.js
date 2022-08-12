import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div>
			<nav className="navbar navbar-dark bg-dark d-flex justify-content-start">
				<Link to="/">
					<button className="btn btn-dark m-2 ">Home</button>
				</Link>
				<Link to="/Photospage">
					<button className="btn btn-dark m-2">Photos</button>
				</Link>
				<Link to="/Commentspage">
					<button className="btn btn-dark m-2 ">Comments</button>
				</Link>
			</nav>
		</div>
	);
}

export default Navbar;
