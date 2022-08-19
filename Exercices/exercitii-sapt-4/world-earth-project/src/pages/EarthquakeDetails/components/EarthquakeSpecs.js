import React from "react";
const EarthquakeSpecs = (props) => {
	return (
		<div>
			<div
				className="d-flex flex-column"
				style={{
					marginLeft: 50,
					marginTop: 58,
					width: 600,
					marginBottom: 30,
					height: 394,
					backgroundColor: "black",
					borderRadius: 4,
				}}
			>
				<button
					className="btn btn-success"
					style={{
						marginLeft: 4,
						marginRight: 4,
						fontWeight: "bold",
						fontSize: 20,
						marginTop: 4,
						textAlign: "left",
					}}
				>
					Title:
					<div>{props.title}</div>
				</button>
				<button
					className="btn btn-success"
					style={{
						marginLeft: 4,
						marginRight: 4,
						marginTop: 4,
						fontWeight: "bold",
						fontSize: 20,
						textAlign: "left",
					}}
				>
					Place:
					<div>{props.place}</div>
				</button>
				<button
					className="btn btn-success"
					style={{
						marginLeft: 4,
						marginRight: 4,
						marginTop: 4,
						fontWeight: "bold",
						fontSize: 20,
						textAlign: "left",
					}}
				>
					Time:
					<div>{new Date(props.time).toLocaleString()}</div>
				</button>
				<button
					className="btn btn-success"
					style={{
						marginLeft: 4,
						marginRight: 4,
						marginTop: 4,
						fontWeight: "bold",
						fontSize: 20,
						textAlign: "left",
					}}
				>
					Status:
					<div>{props.status}</div>
				</button>
				<button
					className="btn btn-success"
					style={{
						marginLeft: 4,
						marginRight: 4,
						marginTop: 4,
						fontWeight: "bold",
						fontSize: 20,
						textAlign: "left",
					}}
				>
					Tsunami risk:
					<div>{props.tsunamiRisk}</div>
				</button>
			</div>
		</div>
	);
};

export default EarthquakeSpecs;
