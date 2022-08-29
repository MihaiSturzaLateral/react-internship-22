import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
const Header = () => {
	const location = useLocation();
	return (
		<nav
			className="navbar navbar-dark d-flex justify-content-start"
			style={{ backgroundColor: "black" }}
		>
			<div className="txt p-2" style={{ fontWeight: "bold", color: "#F1FFFA" }}>
				MostWanted
			</div>
			<div className="d-flex justify-content-between">
				<div>
					<Link to="/">
						<button
							className="button p-2"
							style={
								location.pathname === "/" ? { opacity: 1 } : { opacity: 0.6 }
							}
						>
							Home
						</button>
					</Link>
					<Link to="CheckTool">
						<button
							className="button p-2"
							style={
								location.pathname === "/CheckTool"
									? { opacity: 1 }
									: { opacity: 0.6 }
							}
						>
							Check Tool
						</button>
					</Link>
				</div>
				<div style={{ marginLeft: 1020 }}>
					<Link to="MyReports">
						<button
							className="button p-2"
							style={
								location.pathname === "/MyReports"
									? { opacity: 1 }
									: { opacity: 0.6 }
							}
						>
							My Reports
						</button>
					</Link>
					<button className="btn btn-danger p-2" style={{ marginLeft: 20 }}>
						Submit Report
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Header;
