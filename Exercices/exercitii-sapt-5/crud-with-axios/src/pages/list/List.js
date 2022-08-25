import React, { useEffect, useState } from "react";
import axios from "axios";
import CardList from "./components/CardList";
import Card from "./components/Card";
const List = () => {
	const [apiData, setApiData] = useState([]);
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get(`https://63034c269eb72a839d7d1f7e.mockapi.io/CrudWithAxios`)

			.then((res) => {
				setApiData(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
		setData(apiData);
	}, [apiData]);
	return (
		<div>
			<div style={{ marginTop: 50 }}>
				<Card
					id={"Id"}
					name={"Name"}
					email={"Email"}
					message={"Message"}
					isVisible={false}
				/>
				<CardList data={data} />
			</div>
		</div>
	);
};

export default List;
