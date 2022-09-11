import React from "react";
import { Link, useLocation } from "react-router-dom";
import ModalCreate from "../modal/ModalCreate";
import "./Header.css";
const Header = () => {
	const location = useLocation();
	return (
		<div>
			<nav
				className="navbar navbar-dark d-flex justify-content-start"
				style={{ backgroundColor: "black" }}
			>
				<div
					className="txt p-2"
					style={{ fontWeight: "bold", color: "#F1FFFA" }}
				>
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
					<div style={{ marginLeft: 1010 }}>
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
					</div>
					<button
						className="btn btn-danger"
						style={{
							marginTop: 5,
							marginLeft: 20,
							marginRight: 10,
							height: 30,
							width: 128,
							borderRadius: 6,
							paddingTop: 2,
							textAlign: "center",
						}}
						data-bs-toggle="modal"
						data-bs-target="#ModalCreate"
					>
						Submit Report
					</button>
					<ModalCreate />
				</div>
			</nav>
		</div>
	);
};

export default Header;
