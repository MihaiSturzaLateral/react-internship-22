import axios from "axios";
import { loadDataByCity, loadDataByLat } from "./weatherActions";

export const loadDataByLatAction = (latitude, longitude) => {
  return (dispatch) => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
          lat: latitude,
          lon: longitude,
          appid: "d0f7bf97eb69f3e06497d2ee8ad0ccc2",
          units: "metric",
        },
      })
      .then((res) => {
        dispatch(loadDataByLat(latitude, longitude, res.data));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const loadDataByCityAction = (city) => {
  return (dispatch) => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
          q: city,
          appid: "d0f7bf97eb69f3e06497d2ee8ad0ccc2",
          units: "metric",
        },
      })
      .then((res) => {
        dispatch(loadDataByCity(city, res.data));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};
