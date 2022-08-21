import React from "react";
const Footer = () => {
	return (
		<nav
			className="navbar navbar-dark"
			style={{
				paddingTop: "1rem",
				padding: "1rem",
				position: "fixed",
				bottom: 0,
				left: 0,
				width: "100%",
				height: 55,
				backgroundColor: "#464E47",
			}}
		>
			<div
				style={{
					paddingLeft: 30,
					fontSize: 10,
					color: "#F1FFFA",
				}}
			>
				© Copyright 2022 <br></br>Hepes Bogdan
			</div>
			<div
				className="text-start"
				style={{
					fontSize: 10,
					color: "#F1FFFA",
					width: 600,
				}}
			>
				DATA Source: The USGS Earthquake Hazards Program of the U.S Geological
				Survey (USGS), part of the National Earthquake Hazards Reduction Program
				(NEHRP) led by the National Institute of Standards and Technology (NIST)
			</div>
		</nav>
	);
};

export default Footer;
