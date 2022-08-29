import React from "react";
const Footer = () => {
	return (
		<nav
			className="navbar navbar-dark"
			style={{
				paddingTop: "1rem",
				position: "fixed",
				bottom: 0,
				left: 0,
				width: "100%",
				height: 55,
				backgroundColor: "black",
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
					marginLeft: 450,
					fontSize: 10,
					color: "#F1FFFA",
					width: 200,
				}}
			>
				DATA Source: Interpol Wanted lists
			</div>
			<div
				className="text-start"
				style={{
					marginLeft: 0,
					fontSize: 10,
					color: "#F1FFFA",
					width: 580,
				}}
			>
				Red Notices are issued for fugitives wanted either for prosecution or to
				serve a sentence. A Red Notice is a request to law enforcement worldwide
				to locate and provisionally arrest a person pending extradition,
				surrender or similar legal action.
			</div>
		</nav>
	);
};

export default Footer;
