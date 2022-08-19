import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
	return (
		<>
			<div className="card d-flex flex-column" style={{ margin: 5 }}>
				<div className="card-body d-flex">
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
									? "green"
									: props.magnitude < 4.5
									? "orange"
									: "red",
							width: 50,
							height: 50,
							marginLeft: 5,
							marginTop: 5,
							marginBottom: 5,
						}}
					>
						{props.magnitude === null ? 0 : props.magnitude.toPrecision(2)}
					</div>
					<div>
						<div
							className="card-text"
							style={{
								marginLeft: 20,

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
								className="btn btn-success btn-sm"
								style={{ marginLeft: 340, marginTop: 10, height: 30 }}
								onClick={() => {
									console.log(props.details, "test");
								}}
							>
								View Details
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
