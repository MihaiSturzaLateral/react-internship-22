import * as types from "./actionType";
import axios from "axios";

const fetchWeatherData = (data) => ({
  type: types.LOAD_DATA_BY_LOCATION,
  payload: data,
});
const fetchWeatherDataByLatLog = (data) => ({
  type: types.LOAD_DATA_BY_LAT_LONG,
  payload: data,
});
export const _fetchWeatherDataByLatLog = (lat, log) => {
  return (dispatch) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${log}&lang=ro&appid=7a32c145929333edc53cf8790d1631da`
      )
      .then((res) => dispatch(fetchWeatherDataByLatLog(res.data)))
      .catch((err) => {
        console.log(err);
      });
  };
};
export const _fetchWeatherData = (location) => {
  return (dispatch) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&appid=7a32c145929333edc53cf8790d1631da`
      )
      .then((res) => dispatch(fetchWeatherData(res.data)))
      .catch((err) => {
        console.log(err);
      });
  };
};
