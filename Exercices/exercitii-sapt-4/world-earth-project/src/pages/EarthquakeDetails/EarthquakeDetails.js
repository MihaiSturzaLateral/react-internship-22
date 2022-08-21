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
		<div
			className="d-flex flex-row justify-content-between"
			style={{ backgroundColor: "#b9d1bc", height: 610 }}
		>
			<div>
				<div className="d-flex">
					<Link to="/">
						<button
							className="btn btn-sm"
							style={{
								marginLeft: 50,
								height: 35,
								fontWeight: "bold",
								fontSize: 15,
								marginTop: 50,
								borderColor: "#464E47",
								borderWidth: 3,
								backgroundColor: "#1f8e2e",
								color: "black",
							}}
						>
							Back
						</button>
					</Link>
					<Title name={"EarthquakeDetails"} />
				</div>
				<div
					className="d-flex flex-column"
					style={{
						marginLeft: 50,
						marginTop: 58,
						width: 600,
						marginBottom: 30,
						height: 394,
						backgroundColor: "#464E47",
						borderRadius: 4,
					}}
				>
					<EarthquakeSpecs
						titleDisplayed={"Title:"}
						info={earthquake?.properties?.title}
					/>
					<EarthquakeSpecs
						titleDisplayed={"Place:"}
						info={earthquake?.properties?.place}
					/>
					<EarthquakeSpecs
						titleDisplayed={"Time:"}
						info={new Date(earthquake?.properties?.time).toLocaleString()}
					/>
					<EarthquakeSpecs
						titleDisplayed={"Status:"}
						info={earthquake?.properties?.status}
					/>
					<EarthquakeSpecs
						titleDisplayed={"Tsunami risk:"}
						info={earthquake?.properties?.tsunami}
					/>
				</div>
			</div>
			<div>
				<div style={{ paddingTop: 40 }}>
					<button
						className="btn"
						style={{
							width: 710,
							height: 80,
							fontWeight: "bold",
							fontSize: 40,
							marginBottom: 30,
							color: "#303631",
							borderColor: "#464E47",
							borderWidth: 4,
							backgroundColor:
								earthquake?.properties?.mag < 2.5
									? "#1f8e2e"
									: earthquake?.properties?.mag < 4.5
									? "orange"
									: "red",
						}}
					>
						Magnitude:{earthquake?.properties?.mag.toPrecision(3)}
					</button>
					<div
						style={{
							width: 710,
							height: 400,
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
