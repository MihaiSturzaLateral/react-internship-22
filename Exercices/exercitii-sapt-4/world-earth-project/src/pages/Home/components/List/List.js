import React from "react";

import Card from "./components/Card";

const List = (props) => {
	return props.earthquakes?.map((el) => {
		return (
			<div className="">
				<div>
					<div>
						<Card
							key={el.id}
							magnitude={el.properties.mag}
							location={el.properties.place}
							details={el.properties.detail}
						/>
					</div>
				</div>
			</div>
		);
	});
};

export default List;
