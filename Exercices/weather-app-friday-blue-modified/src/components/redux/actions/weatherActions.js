export const loadDataByLat = (latitude, longitude, weather) => {
  return {
    type: "LOAD_DATA_BY_LAT",
    payload: weather,
    latitude: latitude,
    longitude: longitude,
  };
};

export const loadDataByCity = (city, weather) => {
  return {
    type: "LOAD_DATA_BY_CITY",
    payload: weather,
    city: city,
  };
};
