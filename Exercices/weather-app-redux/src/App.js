import "./App.css";
import {
  getDataByCity,
  getDataByLatLong,
} from "./redux/actions/weatherActions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import moment from "moment";
import useGeolocation from "react-hook-geolocation";

const App = () => {
  const geolocation = useGeolocation({
    enableHighAccuracy: false,
    decisionTimeout: 12000,
  });
  const dispatch = useDispatch();
  const dataFromStore = useSelector((state) => state);
  const [cityValue, setCityValue] = useState("");
  const [latValue, setLatValue] = useState("");
  const [longValue, setLongValue] = useState("");

  const getWeatherCity = () => {
    getDataByCity(cityValue)(dispatch);
  };

  const getWeatherLatLong = () => {
    getDataByLatLong(latValue, longValue)(dispatch);
  };

  console.log(dataFromStore);
  return (
    <div className="container">
      <div className="wrapper">
        <div className="latLongCityWrapper">
          <label>Latitude:</label>
          <input
            value={latValue}
            onChange={(e) => setLatValue(e.target.value)}
          />
        </div>
        <div className="latLongCityWrapper">
          <label>Longitude:</label>
          <input
            value={longValue}
            onChange={(e) => setLongValue(e.target.value)}
          />
        </div>
        <div className="latLongCityWrapper">
          <label>Or enter a city name:</label>
          <input
            value={cityValue}
            onChange={(e) => setCityValue(e.target.value)}
          />
        </div>
        <div className="btnWrapper">
          <button
            className="locBtn"
            onClick={() => {
              setLatValue(geolocation?.latitude);
              setLongValue(geolocation?.longitude);
            }}
          >
            Get Location
          </button>
          <button
            className="reset"
            onClick={() => {
              setLatValue("");
              setLongValue("");
              setCityValue("");
            }}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="weatherWrapper">
        <div className="btnsDiv">
          <button className="latLongBtn" onClick={getWeatherLatLong}>
            Get weather by coordinates
          </button>
          <button className="cityBtn" onClick={getWeatherCity}>
            Get weather by city
          </button>
        </div>
        <div className="infoContainer">
          <div className="header">
            <label className="location">
              Location: {dataFromStore?.weatherData?.name}
            </label>
          </div>
          <div className="details">
            <div className="weatherInfo">
              <h2>{dataFromStore?.weatherData?.weather[0]?.description}</h2>
              <label>
                Sunrise at:{" "}
                {moment(dataFromStore?.weatherData?.sys?.sunrise).format(
                  "hh:mm:ss"
                )}
              </label>
              <label>
                Sunset at:{" "}
                {moment(dataFromStore?.weatherData?.sys?.sunset).format(
                  "hh:mm:ss"
                )}
              </label>
              <label>
                Wind speed: {dataFromStore?.weatherData?.wind?.speed} m/s
              </label>
              <label>
                Temperature: {dataFromStore?.weatherData?.main?.temp} °C
              </label>
            </div>
            <div className="weatherIcon">
              <img
                src={`http://openweathermap.org/img/wn/${dataFromStore?.weatherData?.weather[0]?.icon}@2x.png`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
