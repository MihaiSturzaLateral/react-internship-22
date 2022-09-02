import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadDataLatAction, loadDataCityAction } from "./redux/actions/creator";
import "./CheckData.css";
import { Container } from "react-bootstrap";

const CheckData = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [city, setCity] = useState("");
  const [status, setStatus] = useState(null);

  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);
  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setCity(position.coords.city);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };
  const arr = weather.weather;
  const icon = arr?.map((obj, key) => obj?.icon);
  const dataValid = (data) => {
    if (data !== "Invalid Date") return data;
    else return null;
  };

  return (
    <>
      <div className="container">
        <div className="check">
          <div className="but">
            <button id="get-loc" onClick={getLocation}>
              Get location
            </button>
          </div>
          <div className="lat-long">
            <div className="latitude">
              <label>
                Latitude: <br />{" "}
              </label>
              <input
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
              />
            </div>
            <div className="longitude">
              <label>
                Longitude: <br />
              </label>
              <input
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
              />
            </div>
            <div className="city">
              <label>
                Enter a city name: <br />
              </label>
              <input value={city} onChange={(e) => setCity(e.target.value)} />
            </div>
          </div>
        </div>
        <div className="results">
          <div className="buttons">
            <div className="by-lat">
              <button
                id="get-lat"
                onClick={() => {
                  dispatch(loadDataLatAction(latitude, longitude));
                  console.log("from home", weather);
                }}
              >
                Get Weather by lat, long
              </button>
            </div>
            <div className="by-city">
              <button
                id="get-city"
                onClick={() => {
                  dispatch(loadDataCityAction(city));
                  console.log("from home", weather);
                }}
              >
                Get Weather by city
              </button>
            </div>
          </div>
          <div className="info">
            <div className="location">
              <label>Locatie: {weather?.name}</label>
            </div>
            <div className="icon">
              <img
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                alt="icon"
              />
            </div>
            <div className="description">
              <label>
                Descriere: {arr?.map((obj, key) => obj?.description)}
              </label>
            </div>
            <div className="rasare">
              <label>
                Soarele rasare:
                {dataValid(new Date(weather?.sys?.sunrise).toLocaleString())}
              </label>
            </div>
            <div className="apune">
              <label>
                Soarele apune:
                {dataValid(new Date(weather?.sys?.sunset).toLocaleString())}
              </label>
            </div>
            <div className="viteza">
              <label>Viteza vant: {weather?.wind?.speed} km/h</label>
            </div>
            <div className="temperatura">
              <label>Temperatura:{weather?.main?.temp} °C </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckData;
