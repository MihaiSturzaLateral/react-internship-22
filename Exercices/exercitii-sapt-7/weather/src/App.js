import React, { useState } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import moment from "moment";
import { useGeolocated } from "react-geolocated";

import { useDispatch, useSelector } from "react-redux";
import { loadDataByCity, loadDataByLatLong } from "./redux/Actions";

const App = () => {
	let dispatch = useDispatch();

	const { weather } = useSelector((state) => state.data);
	const [lat, setLat] = useState(0);
	const [long, setLong] = useState(0);
	const [city, setCity] = useState("");
	const { coords } = useGeolocated({
		positionOptions: {
			enableHighAccuracy: false,
		},
		userDecisionTimeout: 5000,
	});

	return (
		<div className="App" style={{ backgroundColor: "#a6a6a6" }}>
			<div
				className="d-flex justify-content-evenly"
				style={{ paddingTop: 200, paddingBottom: 233 }}
			>
				<div
					className="card d-flex flex-row"
					style={{
						height: 280,
						width: 500,
						backgroundColor: "#6c757d",
						paddingLeft: 30,
						borderRadius: 15,
					}}
				>
					<div className="flex-column" style={{ paddingTop: 30 }}>
						<label
							className="d-flex justify-content-start"
							style={{ fontWeight: "bold" }}
						>
							Latitude
						</label>
						<input
							id="latitude"
							className="d-flex justify-content-start"
							style={{
								width: 200,
								marginBottom: 20,
								backgroundColor: "#adb5bd",
							}}
							value={lat}
							onChange={(e) => {
								if (e.target.value !== null) setLat(parseInt(e.target.value));
							}}
						></input>
						<label
							className="d-flex justify-content-start"
							style={{ fontWeight: "bold" }}
						>
							Longitude
						</label>
						<input
							id="longitude"
							className="d-flex justify-content-start"
							style={{
								width: 200,
								marginBottom: 20,
								backgroundColor: "#adb5bd",
							}}
							value={long}
							onChange={(e) => {
								if (e.target.value !== null) setLong(parseInt(e.target.value));
							}}
						></input>
						<label
							className="d-flex justify-content-start"
							style={{ fontWeight: "bold" }}
						>
							City
						</label>
						<input
							id="city"
							type="text"
							className="d-flex justify-content-start"
							style={{
								width: 200,
								marginBottom: 20,
								backgroundColor: "#adb5bd",
							}}
							value={city}
							onChange={(e) => {
								if (e.target.value !== null) setCity(e.target.value);
							}}
						></input>
					</div>
					<div style={{ marginTop: 100 }}>
						<button
							className="btn btn-dark"
							style={{ width: 150, margin: "auto" }}
							onClick={() => {
								setLat(coords.latitude);
								setLong(coords.longitude);
							}}
						>
							Get Location
						</button>
						<button
							className="btn btn-dark"
							style={{ width: 150, margin: "auto", marginTop: 10 }}
							onClick={() => {
								setLat(0);
								setLong(0);
								setCity("");
							}}
						>
							Reset
						</button>
					</div>
				</div>
				<div
					className="card d-flex flex-row"
					style={{
						height: 280,
						width: 700,
						backgroundColor: "#6c757d",
						paddingLeft: 30,
						borderRadius: 15,
					}}
				>
					<div className="d-flex flex-column">
						<button
							className="btn btn-dark"
							style={{ width: 150, margin: "auto" }}
							onClick={() => {
								dispatch(loadDataByLatLong(lat, long));
							}}
						>
							Get Weather by Latitude and Longitude
						</button>
						<button
							className="btn btn-dark"
							style={{ width: 150, margin: "auto" }}
							onClick={() => {
								dispatch(loadDataByCity(city));
							}}
						>
							Get Weather by City
						</button>
					</div>
					<div
						className="card"
						style={{
							marginLeft: 30,
							marginTop: 30,
							width: 450,
							height: 220,
							backgroundColor: "#adb5bd",
						}}
					>
						<div className="card-header">
							<h4>Location: {weather?.name}</h4>
						</div>
						<div className="card-body d-flex justify-content-evenly">
							<div>
								<h4>{weather?.weather?.map((el) => el.description)}</h4>
								<h6>
									Sunrise: {moment(weather?.sys?.sunrise).format("hh:mm")}
								</h6>
								<h6>Sunset: {moment(weather?.sys?.sunset).format("hh:mm")}</h6>
								<h6>Wind speed: {weather?.wind?.speed}</h6>
								<h6>Temperature: {weather?.main?.temp}</h6>
							</div>
							<div
								style={{
									height: 140,
									width: 140,
								}}
							>
								<img
									src={`http://openweathermap.org/img/wn/${weather?.weather?.map(
										(el) => el.icon
									)}@2x.png`}
									alt=""
									style={{
										height: 140,
										width: 140,
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
