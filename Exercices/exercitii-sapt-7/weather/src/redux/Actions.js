import axios from "axios";

const dataByLatLongLoad = (weather) => {
	return {
		type: "LOAD_DATA_BY_LAT_LONG",
		payload: weather,
	};
};

export const loadDataByLatLong = (lat, long) => {
	return (dispatch) => {
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?lang=ro&units=metric&lat=${lat}&lon=${long}&appid=c07579e9538ca8769ec326d789a96014`
			)
			.then((res) => {
				dispatch(dataByLatLongLoad(res.data));
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

const dataByCityLoad = (weather) => {
	return {
		type: "LOAD_DATA_BY_CITY",
		payload: weather,
	};
};

export const loadDataByCity = (city) => {
	return (dispatch) => {
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?lang=ro&units=metric&q=${city}&appid=c07579e9538ca8769ec326d789a96014`
			)
			.then((res) => {
				dispatch(dataByCityLoad(res.data));
			})
			.catch((err) => {
				console.log(err);
			});
	};
};
