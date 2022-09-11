import React, { useState } from "react";
import "./PageHeader.css";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PageHeader = ({ childToParentFilter }) => {
	const location = useLocation();
	const { redReports } = useSelector((state) => state.reports);
	const { yellowReports } = useSelector((state) => state.reports);
	const { myReports } = useSelector((state) => state.myReports);
	const [total, setTotal] = useState(7160);

	return (
		<div className="d-flex justify-content-between">
			{location.pathname === "/" ? (
				<div
					className="d-flex flex-row"
					style={{ marginTop: 30, marginLeft: 100, marginBottom: 30 }}
				>
					<button
						className="btn btn-danger"
						onClick={() => {
							setTotal(redReports?.total);
							childToParentFilter("red");
						}}
					>
						Red Notices
					</button>
					<button
						className="btn btn-warning"
						style={{ marginLeft: 30 }}
						onClick={() => {
							setTotal(yellowReports.total);
							childToParentFilter("yellow");
						}}
					>
						Yellow Notices
					</button>
					<button
						className="Button"
						style={{
							width: 110,
							borderRadius: 6,
							borderWidth: 0,
							opacity: 1,
							marginLeft: 30,
						}}
						onClick={() => {
							setTotal(redReports?.total + yellowReports?.total);
							childToParentFilter("all");
						}}
					>
						All Notices
					</button>
				</div>
			) : (
				<div
					className="d-flex flex-row"
					style={{
						height: 50,
						width: 200,
						marginTop: 30,
						marginLeft: 100,
						marginBottom: 15,
						paddingTop: 6,
						paddingLeft: 25,
						borderRadius: 6,
						borderWidth: 0,
						background: "linear-gradient(to right, #dc3545, #ffc107)",
						fontSize: 25,
						fontWeight: "bold",
					}}
				>
					My Reports:
				</div>
			)}

			<div
				style={{
					height: 38,
					marginTop: 30,
					marginBottom: 30,
					marginRight: 40,
					borderRadius: 6,
					paddingLeft: 20,
					paddingRight: 20,
					paddingTop: 6,
					backgroundColor: "black",
					color: "white",
					textAlign: "center",
				}}
			>
				Total Wanted:
				{location.pathname === "/MyReports" ? myReports.length : total}
			</div>
		</div>
	);
};

export default PageHeader;
