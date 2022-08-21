import React from "react";

import Card from "./components/Card";

const List = (props) => {
	const filteredData = props.earthquakes?.filter((el) => {
		if (props.searchInput === "") return el;
		else {
			return el.properties.place.toLowerCase().includes(props.searchInput);
		}
	});
	return filteredData?.map((el) => {
		return (
			<div style={{ margin: 5 }}>
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
