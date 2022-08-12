import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";
function Photospage() {
	const [photos, setPhotos] = useState([]);
	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/photos`)
			.then((res) => {
				setPhotos(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<>
			<div className="container-md d-flex flex-wrap justify-content-between">
				{photos.map((el) => {
					return <Card key={el.id} url={el.url} title={el.title} />;
				})}
			</div>
		</>
	);
}

export default Photospage;
