import React from "react";

function Cards(props) {
	return (
		<div>
			<div className="card" style={{ width: 18 + "rem" }}>
				<img src={props.url} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
				</div>
			</div>
		</div>
	);
}

export default Cards;
