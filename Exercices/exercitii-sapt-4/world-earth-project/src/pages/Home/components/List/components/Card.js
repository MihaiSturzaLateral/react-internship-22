import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
	return (
		<div
			className="d-flex flex-column"
			style={{
				margin: 5,
			}}
		>
			<div
				className="d-flex flex-row"
				style={{ borderRadius: 8, backgroundColor: "#b9d1bc", height: 90 }}
			>
				<div
					style={{
						display: "flex",
						textAlign: "center",
						alignItems: "center",
						justifyContent: "center",
						fontWeight: "bold",
						fontSize: 15,
						borderRadius: 50,
						backgroundColor:
							props.magnitude < 2.5
								? "#1f8e2e"
								: props.magnitude < 4.5
								? "orange"
								: "red",
						width: 60,
						height: 60,
						margin: 15,
					}}
				>
					{props.magnitude === null ? 0 : props.magnitude.toPrecision(3)}
				</div>
				<div className="d-flex flex-column">
					<div
						style={{
							marginLeft: 20,
							marginTop: 10,
							color: "#303631",
							fontWeight: "bold",
							width: 400,
						}}
					>
						{props.location}
					</div>
					<Link
						to="/EarthquakeDetails"
						state={{
							details: props.details,
						}}
					>
						<button
							className="btn btn-sm btn-secondary"
							style={{
								marginLeft: 315,
								marginTop: 15,
								height: 30,
								color: "#303631",
								backgroundColor:
									props.magnitude < 2.5
										? "#1f8e2e"
										: props.magnitude < 4.5
										? "orange"
										: "red",
								fontWeight: "bold",
							}}
						>
							View Details
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Card;
