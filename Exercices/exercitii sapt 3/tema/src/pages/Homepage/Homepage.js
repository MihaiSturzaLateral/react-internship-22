import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import PageElement from "./components/PageElement";
import Photospage from "../Photospage/Photospage";
function Homepage() {
	const [nasaPhoto, setNasaPhoto] = useState([]);
	useEffect(() => {
		axios
			.get(
				"https://api.nasa.gov/planetary/apod?api_key=x9jTTnTIasvDHpurRDMKBYSbDW8ho1PRTBG9kBB0"
			)
			.then((res) => {
				setNasaPhoto(res.data);
			})
			.catch((err) => console.log(err));
	}, []);
	const lastCharacters = nasaPhoto.url || "";
	return (
		<>
			<PageElement
				url={
					lastCharacters.slice(-4) !== ".jpg" &&
					lastCharacters.slice(-4) !== ".png"
						? "https://www.pinterest.com/pin/27725353947577227/"
						: nasaPhoto.url
				}
			/>
			<Routes>
				<Route path="/Photospage" element={<Photospage />} />
			</Routes>
		</>
	);
}

export default Homepage;
