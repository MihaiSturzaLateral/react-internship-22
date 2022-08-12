import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import axios from "axios";
function Commentspage() {
	const [comments, setComments] = useState([]);
	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/comments `)
			.then((res) => {
				setComments(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return comments.map((el) => {
		return (
			<div className="d-flex justify-content-center">
				<Card key={el.id} name={el.name} email={el.email} body={el.body} />
			</div>
		);
	});
}

export default Commentspage;
