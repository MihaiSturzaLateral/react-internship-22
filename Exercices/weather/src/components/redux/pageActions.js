import axios from "axios";
import { GET_LOCATION } from "./pageTypes";
import { GET_COORDINATES } from "./pageTypes";
import { GET_CITY } from "./pageTypes";

export const getLocation = (weather) => {
  return {
    type: GET_LOCATION,
    payload: weather,
  };
};

export const getCoordinates = (lat, lon) => {
  return {
    type: GET_COORDINATES,
    payload: { lat, lon },
  };
};

export const getCity = (weather) => {
  return {
    type: GET_CITY,
    payload: weather,
  };
};

export const actionGetLocation = (lat, lon) => {
  return (dispatch) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=3434a0883f8ca94e4455725c2919d917`
      )
      // .get(`https://api.openweathermap.org/data/2.5/weather`, {
      //   params: {
      //     lat: latitude,
      //     lon: longitude,
      //     appid: "3434a0883f8ca94e4455725c2919d917",
      //     units: "metric",
      //   },
      // })
      .then((response) => {
        dispatch(getLocation(response.data));
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
};

export const actionGetCoordinates = (city) => {
  return (dispatch) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3434a0883f8ca94e4455725c2919d917`
      )
      .then((response) => {
        const data = response.data;
        dispatch(getCoordinates(data.coord.lat, data.coord.lon));
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
};

export const actionGetCity = (city) => {
  return (dispatch) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3434a0883f8ca94e4455725c2919d917`
      )
      .then((response) => {
        dispatch(getCity(response.data));
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
};
