import React from "react";
const Title = (props) => {
	return (
		<div
			style={{
				color: "#464E47",
				fontWeight: "bold",
				fontSize: 35,
				marginLeft: 40,
				paddingTop: 40,
			}}
		>
			{props.name}
		</div>
	);
};

export default Title;
