import React, { useEffect } from "react";
import CardList from "./components/CardList";
import Card from "./components/Card";

import { useDispatch, useSelector } from "react-redux";
import { loadContacts } from "../../redux/Actions";

const List = () => {
	let dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadContacts());
	}, [dispatch]);
	const { contacts } = useSelector((state) => state.contacts);

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
				<CardList contacts={contacts} />
			</div>
		</div>
	);
};

export default List;
