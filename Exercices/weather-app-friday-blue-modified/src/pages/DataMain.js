import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment/moment";
import "./DataMain.css";
import {
  loadDataByLatAction,
  loadDataByCityAction,
} from "../components/redux/actions/creators";
const DataMain = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [city, setCity] = useState("");
  const [status, setStatus] = useState(null);

  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus(`Browser can't retrieve location.`);
    } else {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setStatus(null);
          setLatitude(pos.coords.latitude);
          setLongitude(pos.coords.longitude);
          setCity(pos.coords.city);
        },
        () => {
          setStatus(`Couldn't get the information.`);
        }
      );
    }
  };

  return (
    <>
      <div className="container ">
        <div className="get-location">
          <div className="location-button">
            <button className="btn btn-primary" onClick={getLocation}>
              Get Location
            </button>
          </div>
          <div className="details-container">
            <div className="latitude">
              <label id="lat">Latitude:</label>
              <br />
              <input
                name="lat"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
              />
            </div>
            <div className="longitude">
              <label id="lon">Longitude:</label>
              <br />
              <input
                name="lon"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
              />
            </div>
            <div className="city">
              <label id="city">City:</label>
              <br />
              <input
                className="city-value"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="lat-long-city-container">
          <div className="buttons-lat-lon-city">
            <button
              className="btn btn-success"
              onClick={() => {
                dispatch(loadDataByLatAction(latitude, longitude));
                console.log(weather);
              }}
            >
              Get Weather by Lat, Long
            </button>
            <button
              className="btn btn-success"
              onClick={() => dispatch(loadDataByCityAction(city))}
            >
              Get Weather by City
            </button>
          </div>
          <div className="details-container-of-containers">
            <div className="location-title">Location: {weather?.name}</div>
            <div className="details-container-weather">
              <div className="split-these-two">
                <h3 className="weather-description">
                  {weather?.weather?.map((obj) => obj?.description)}
                </h3>

                <p className="sunrise">
                  Soarele Rasare:{" "}
                  {weather?.sys?.sunrise &&
                    moment(weather?.sys?.sunrise).format("h:mm")}
                </p>

                <p className="sunset">
                  Soarele Apune:
                  {weather?.sys?.sunset &&
                    moment(weather?.sys?.sunset).format("h:mm")}
                </p>
                <p className="vant">Viteza Vant: {weather?.wind?.speed} km/h</p>
                <p className="temperatura">
                  Temperatura: {weather?.main?.temp} °C
                </p>
              </div>
              <div className="icon">
                <img
                  src={`http://openweathermap.org/img/wn/${weather?.weather?.map(
                    (obj) => obj?.icon
                  )}@2x.png`}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DataMain;
