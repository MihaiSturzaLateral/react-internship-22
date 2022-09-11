import React from "react";
const DetailsList = (props) => {
	return (
		<div style={{ marginLeft: 20 }}>
			<ul className="list-group " style={{ width: 160 }}>
				<li className="list-group-item" style={{ height: 40 }}>
					{props.item1}
				</li>
				<li className="list-group-item" style={{ height: 40 }}>
					{props.item2}
				</li>
				<li className="list-group-item" style={{ height: 40 }}>
					{props.item3}
				</li>
				<li className="list-group-item" style={{ height: 40 }}>
					{props.item4}
				</li>
				<li className="list-group-item" style={{ height: 40 }}>
					{props.item5}
				</li>
				<li className="list-group-item" style={{ height: 40 }}>
					{props.item6}
				</li>
				<li
					className="list-group-item"
					style={{ height: 40, overflow: "hidden" }}
				>
					{props.item7}
				</li>
				<li className="list-group-item" style={{ height: 40 }}>
					{props.item8}
				</li>
			</ul>
		</div>
	);
};

export default DetailsList;
