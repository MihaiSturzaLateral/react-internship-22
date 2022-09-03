import axios from "axios";

export const getLocation = (data) => {
  return {
    type: "LOAD_DATA_BY_LAT_LONG",
    payload: data,
  };
};

export const getDataByCity = (data) => {
  return {
    type: "LOAD_DATA_BY_CITY",
    payload: data,
  };
};

export const getCoordinates = (lat, long) => {
  return {
    type: "GET_LOCATION_COORDINATES",
    payload: { lat, long },
  };
};

export const fetchData = (latitude, longitude) => {
  //will return a function
  return (dispatch) => {
    axios
      // .get(
      //   `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=acd3384144582e0d467e4df562bbb351`
      // )
      .get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
          lat: latitude,
          lon: longitude,
          appid: "acd3384144582e0d467e4df562bbb351",
          units: "metric",
        },
      })
      .then((response) => {
        const dt = response.data;
        dispatch(getLocation(dt));
      })
      .catch((error) => {
        const e = error.message;
        console.log(e);
      });
  };
};

export const fetchDataByCity = (town) => {
  return (dispatch) => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
          q: town,
          appid: "acd3384144582e0d467e4df562bbb351",
          units: "metric",
        },
      })
      .then((rsp) => {
        dispatch(getDataByCity(rsp.data));
      })
      .catch((error) => {
        const e = error.message;
        console.log(e);
      });
  };
};

export const fetchCoordinates = (town) => {
  return (dispatch) => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
          q: town,
          appid: "acd3384144582e0d467e4df562bbb351",
          units: "metric",
        },
      })
      .then((rsp) => {
        const dt = rsp.data;
        dispatch(getCoordinates(dt.coord.lon, dt.coord.lat));
      })
      .catch((error) => {
        const e = error.message;
        console.log(e);
      });
  };
};
