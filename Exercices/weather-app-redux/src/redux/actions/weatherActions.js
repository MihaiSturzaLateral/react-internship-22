import axios from "axios";
import {
  LOAD_DATA_BY_LAT_LONG,
  LOAD_DATA_BY_CITY,
} from "../actions/actionTypes";

export const loadDataByLatLong = (payload) => {
  return { type: LOAD_DATA_BY_LAT_LONG, payload };
};

export const loadDataByCity = (payload) => {
  return { type: LOAD_DATA_BY_CITY, payload };
};

export const getDataByCity = (city) => (dispatch) => {
  const getDataByCityPromise = axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=8939f1b14de8ddc41346773db35192fe`
  );
  getDataByCityPromise.then((res) => {
    dispatch(loadDataByCity(res.data));
  });
  return getDataByCityPromise;
};

export const getDataByLatLong = (lat, long) => (dispatch) => {
  const getDataByLatLongPromise = axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&lang=ro&appid=8939f1b14de8ddc41346773db35192fe`
  );
  console.log(lat, long, "lat long:");
  getDataByLatLongPromise.then((res) => {
    dispatch(loadDataByLatLong(res.data));
  });
  return getDataByLatLongPromise;
};
