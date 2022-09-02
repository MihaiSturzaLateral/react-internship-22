import { loadDataLat, loadDataCity, getLocation } from "./wheatherActions";
import axios from "axios";

export const loadDataLatAction = (latitude, longitude) => {
  return (dispatch) => {
    console.log("latitude:  ", latitude, "longitude:  ", longitude);
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
          lat: latitude,
          lon: longitude,
          appid: "c0577716454bf6f1d84dcc26ea53fe38",
          units: "metric",
        },
      })
      .then((response) => {
        dispatch(loadDataLat(latitude, longitude, response.data));
      })
      .catch((error) => {
        console.log("eroare load data", error);
      });
  };
};
export const loadDataCityAction = (city) => {
  return (dispatch) => {
    console.log("city", city);
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
          q: city,
          appid: "c0577716454bf6f1d84dcc26ea53fe38",
          units: "metric",
        },
      })
      .then((response) => {
        dispatch(loadDataCity(city, response.data));
      })
      .catch((error) => {
        console.log("eroare load data", error);
      });
  };
};
