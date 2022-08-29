import React from "react";
import Card from "./Card";
const CardList = (props) => {
	return props.contacts?.map((el) => {
		return (
			<div>
				<Card
					id={el.id}
					name={el.name}
					email={el.email}
					message={el.message}
					isVisible={true}
				/>
			</div>
		);
	});
};

export default CardList;
