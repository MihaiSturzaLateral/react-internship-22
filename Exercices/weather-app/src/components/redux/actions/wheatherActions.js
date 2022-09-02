import { types } from "./types";
export const loadDataLat = (latitude, longitude, weather) => {
  return {
    type: types.LOAD_DATA_BY_LAT_LONG,
    payload: weather,
    latitude: latitude,
    longitude: longitude,
  };
};
export const loadDataCity = (city, weather) => {
  return {
    type: types.LOAD_DATA_BY_LAT_LONG,
    payload: weather,
    city: city,
  };
};
export const getLocation = (latitude, longitude, city) => {
  return {
    type: types.GET_LOCATION_COORDINATES,
    latitude: latitude,
    longitude: longitude,
    city: city,
  };
};
