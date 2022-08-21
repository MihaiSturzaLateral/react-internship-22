import React, { useState, useEffect } from "react";

import MapComponent from "../../components/MapComponent/MapComponent";
import Buttons from "./components/Buttons/Buttons";
import List from "./components/List/List";
import axios from "axios";
import Search from "./components/Search/Search";
const Home = () => {
	const [detail, setDetail] = useState("");
	const [searchInput, setSearchInput] = useState("");
	const [mag, setMag] = useState("");
	const [earthquakes, setEarthquakes] = useState({});
	const [apiLink, setApiLink] = useState(``);

	const childToParentSearchInput = (childSearchInput) => {
		setSearchInput(childSearchInput);
	};

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
		setSearchInput("");
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
			<Search childToParentSearchInput={childToParentSearchInput} />
			<div style={{ backgroundColor: "#b9d1bc", height: 610 }}>
				<Buttons
					childToParentDetail={childToParentDetail}
					childToParentMag={childToParentMag}
				/>
				<div
					className="d-flex justify-content-between"
					style={{
						paddingRight: 40,
						paddingLeft: 40,
						paddingTop: 40,
						paddingBottom: 40,
					}}
				>
					<div style={{ width: 730, height: 400 }}>
						<MapComponent earthquakes={earthquakes} />
					</div>
					<div
						style={{
							backgroundColor: "#464E47",
							width: 560,
							height: 400,
							borderRadius: 4,
						}}
					>
						<div
							className="d-flex flex-column"
							style={{
								overflow: "auto",
								backgroundColor: "#464E47",
								width: 550,
								height: 385,
								borderRadius: 4,
								marginTop: 5,
							}}
						>
							<List
								mag={mag}
								earthquakes={earthquakes.features}
								searchInput={searchInput}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
