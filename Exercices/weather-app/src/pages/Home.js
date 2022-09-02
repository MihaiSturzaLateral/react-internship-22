import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { _fetchWeatherData, _fetchWeatherDataByLatLog } from "../redux/action";
import { useGeolocated } from "react-geolocated";
import moment from "moment";
function Home() {
  const { weatherData } = useSelector((state) => ({ ...state.data }));
  const dispatch = useDispatch();
  const [city, setCity] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const { coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });
  //console.log(coords?.latitude);
  //console.log(coords?.longitude);
  //   console.log(weatherData);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark mb-5">
        <div className="container-fluid">
          <a className="navbar-brand text-danger" href="/">
            Weather App
          </a>
        </div>
      </nav>
      <div className="container-sm">
        <div className="">
          <div className="">
            <div className="input-group input-group-sm mb-3 d-flex flex-column">
              <div>
                <h3>Latitude</h3>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  onChange={(e) => {
                    setLat(e.target.value);
                  }}
                  value={lat}
                />
              </div>
              <div>
                <h3>Longitude</h3>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  onChange={(e) => {
                    setLong(e.target.value);
                  }}
                  value={long}
                />
              </div>
              <div>
                <h3>Or enter city name</h3>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  value={city}
                />
              </div>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setLat(coords?.latitude);
                setLong(coords?.longitude);
              }}
            >
              Get Location
            </button>
            <button
              type="button"
              className="btn btn-danger ms-4"
              onClick={() => {
                setLat("");
                setLong("");
                setCity("");
              }}
            >
              Reset
            </button>
          </div>
        </div>
        <div className="mt-5 mb-5">
          <div class="card ">
            <div class="card-header">Location:{weatherData?.name} </div>
            <div class="card-body ">
              {weatherData?.weather?.map((e) => {
                return <h2>{e.description}</h2>;
              })}

              {weatherData?.weather?.map((e) => {
                return (
                  <img
                    src={` http://openweathermap.org/img/wn/${e.icon}.png`}
                    alt="app"
                  ></img>
                );
              })}
              <hr></hr>
              <span>
                Soarele rasare:
                {moment(weatherData?.sys?.sunset).format("h:mm")}
              </span>
              <hr></hr>
              <span>
                Soarele apune:
                {moment(weatherData?.sys?.sunrise).format("h:mm")}
              </span>
              <hr></hr>
              <span>Viteza vant:{weatherData?.wind?.speed}</span>
              <hr></hr>
              <span>Temperatura:{weatherData?.main?.temp}</span>
            </div>
          </div>
          <div className="buttons mb-3 mt-3 ">
            <button
              type="button"
              className="btn btn-success "
              onClick={() => {
                dispatch(_fetchWeatherDataByLatLog(lat, long));
              }}
            >
              Get by lat/long
            </button>
            <button
              type="button"
              className="btn btn-success ms-3"
              onClick={() => {
                dispatch(_fetchWeatherData(city));
              }}
            >
              Get by city
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
