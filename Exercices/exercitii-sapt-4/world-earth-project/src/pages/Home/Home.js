import React, { useState, useEffect } from "react";
import MapComponent from "../../components/MapComponent/MapComponent";
import Buttons from "./components/Buttons/Buttons";
import List from "./components/List/List";
import axios from "axios";
const Home = () => {
	const [detail, setDetail] = useState("");
	const [mag, setMag] = useState("");
	const [earthquakes, setEarthquakes] = useState({});
	const [apiLink, setApiLink] = useState(``);

	const childToParentDetail = (childDetail) => {
		setDetail(childDetail);
	};
	const childToParentMag = (childMag) => {
		setMag(childMag);
	};
	useEffect(() => {
		setApiLink(
			`https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${mag}_${detail}.geojson`
		);
	}, [detail, mag]);

	useEffect(() => {
		axios
			.get(apiLink)

			.then((res) => {
				setEarthquakes(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
		return;
	}, [apiLink]);

	return (
		<div>
			<Buttons
				childToParentDetail={childToParentDetail}
				childToParentMag={childToParentMag}
			/>
			<div
				className="d-flex justify-content-between"
				style={{
					marginRight: 40,
					marginLeft: 40,
					marginTop: 40,
					marginBottom: 40,
				}}
			>
				<div style={{ width: 710, height: 400, backgroundColor: "brown" }}>
					<MapComponent earthquakes={earthquakes} />
				</div>
				<div
					className="d-flex flex-column"
					style={{
						overflow: "scroll",
						backgroundColor: "#ccccff",
						width: 550,
						height: 400,
					}}
				>
					<List mag={mag} earthquakes={earthquakes.features} />
				</div>
			</div>
		</div>
	);
};

export default Home;
