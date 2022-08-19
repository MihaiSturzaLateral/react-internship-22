import React from "react";
const InfoText = () => {
	return (
		<div
			className="card"
			style={{ marginLeft: 100, marginTop: 70, width: 400, height: 150 }}
		>
			<ul className="list-group list-group-flush">
				<li
					className="list-group-item"
					style={{ fontWeight: "bold", fontSize: 20 }}
				>
					Name: Hepes Bogdan
				</li>
				<li
					className="list-group-item"
					style={{ fontWeight: "bold", fontSize: 20 }}
				>
					Age: 20
				</li>
				<li
					className="list-group-item"
					style={{ fontWeight: "bold", fontSize: 20 }}
				>
					Contact: bogdan.hepes@gmail.com
				</li>
			</ul>
		</div>
	);
};

export default InfoText;
