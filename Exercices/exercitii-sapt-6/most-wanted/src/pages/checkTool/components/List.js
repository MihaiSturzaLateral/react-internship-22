import React from "react";
import Card from "./Card";
const List = (props) => {
	return props.list?.map((el) => {
		return (
			<div>
				<Card
					report={el}
					color={el?._links?.self?.href.includes("red") ? "red" : "yellow"}
				/>
			</div>
		);
	});
};

export default List;
