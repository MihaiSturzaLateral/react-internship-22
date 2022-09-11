import React from "react";
import { useLocation } from "react-router-dom";
import Card from "../card/Card";

const List = (props) => {
	const location = useLocation();
	return props.list?.map((el) => {
		return (
			<div>
				<Card
					report={el}
					color={
						location === "/"
							? el._links.self.href.includes("red")
								? "red"
								: "yellow"
							: null
					}
				/>
			</div>
		);
	});
};

export default List;
