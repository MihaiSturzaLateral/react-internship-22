import React from "react";
function Cards(props) {
	return (
		<div
			className="card"
			style={{
				width: 50 + "rem",
			}}
		>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<h6 className="card-subtitle mb-2 ">{props.email}</h6>
				<p className="card-text">{props.body}</p>
			</div>
		</div>
	);
}

export default Cards;
