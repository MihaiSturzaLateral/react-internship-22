import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Title from "../../components/Title/Title";
import EarthquakeSpecs from "./components/EarthquakeSpecs";
import MapComponent from "../../components/MapComponent/MapComponent";
import axios from "axios";
const EarthquakeDetails = () => {
	const location = useLocation();
	const [earthquake, setEarthquake] = useState({});
	useEffect(() => {
		axios
			.get(location.state.details)

			.then((res) => {
				setEarthquake(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
		return;
	}, [location.state.details]);
	return (
		<div className="d-flex flex-row justify-content-between">
			<div>
				<div className="d-flex">
					<Link to="/">
						<button
							className="btn btn-success btn-sm"
							style={{
								marginLeft: 40,
								height: 35,
								fontWeight: "bold",
								marginTop: 10,
							}}
						>
							Go back
						</button>
					</Link>
					<Title name={"EarthquakeDetails"} />
				</div>
				<EarthquakeSpecs
					title={earthquake?.properties?.title}
					place={earthquake?.properties?.place}
					time={earthquake?.properties?.time}
					status={earthquake?.properties?.status}
					tsunamiRisk={earthquake?.properties?.tsunami}
				/>
			</div>
			<div>
				<div>
					<button
						className="btn"
						style={{
							width: 710,
							height: 80,
							fontWeight: "bold",
							fontSize: 40,
							marginBottom: 30,
							backgroundColor:
								earthquake?.properties?.mag < 2.5
									? "green"
									: earthquake?.properties?.mag < 4.5
									? "orange"
									: "red",
						}}
					>
						Magnitude:{earthquake?.properties?.mag}
					</button>
					<div
						style={{
							width: 710,
							height: 400,
							backgroundColor: "brown",
							marginRight: 50,
						}}
					>
						<MapComponent earthquakes={earthquake} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default EarthquakeDetails;
