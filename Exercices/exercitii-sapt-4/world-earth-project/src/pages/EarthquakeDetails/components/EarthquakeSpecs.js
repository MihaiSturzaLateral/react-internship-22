import React from "react";
const EarthquakeSpecs = (props) => {
	return (
		<div>
			<div
				className="btn "
				style={{
					marginLeft: 4,
					marginRight: 4,
					fontWeight: "bold",
					fontSize: 20,
					width: 593,
					marginTop: 4,
					textAlign: "left",
					backgroundColor: "#1f8e2e",
					color: "#303631",
				}}
			>
				{props.titleDisplayed}
				<div>{props.info}</div>
			</div>
		</div>
	);
};

export default EarthquakeSpecs;
