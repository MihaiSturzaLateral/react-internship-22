import React, { useEffect, useState } from "react";
import axios from "axios";
import MapComponent from "../../components/MapComponent/MapComponent";
import Buttons from "../../components/Buttons";
import CardContainer from "./ComponentsHome/CardContainer";

const Home = () => {
  const [timeframe, setTimeframe] = useState("hour");
  const [magnitude, setMagnitude] = useState("all");
  const [earthQuakes, setEarthQuakes] = useState([]);

  const fetchApi = (url) => {
    try {
      axios.get(url).then((res) => {
        console.log(res.data);
        setEarthQuakes(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi(`https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${magnitude}_${timeframe}.geojson
    `);
  }, [magnitude, timeframe]);

  return (
    <>
      <div className="btnContainer">
        <div className="btns">
          <button
            onClick={() => setTimeframe("hour")}
            className="btn btn-primary"
          >
            Past Hour
          </button>
          <button
            onClick={() => setTimeframe("day")}
            className="btn btn-primary"
          >
            Past Day
          </button>
          <button
            onClick={() => setTimeframe("week")}
            className="btn btn-primary"
          >
            Past Week
          </button>
          <button
            onClick={() => setTimeframe("month")}
            className="btn btn-primary"
          >
            Past Month
          </button>
        </div>
        <div className="selectBtn">
          <select
            className="btn btn-primary"
            onClick={(e) => setMagnitude(e.target.value)}
          >
            <option onClick={(e) => setMagnitude(e.target.value)} value="all">
              Any
            </option>
            <option onClick={(e) => setMagnitude(e.target.value)} value="1.0">
              1+
            </option>
            <option onClick={(e) => setMagnitude(e.target.value)} value="2.5">
              2.5+
            </option>
            <option onClick={(e) => setMagnitude(e.target.value)} value="4.5">
              4.5+
            </option>
          </select>
        </div>
      </div>
      <div className="centerHome">
        <div className="mapContainer">
          <MapComponent className="mapComponent" earthquakes={earthQuakes} />
        </div>
        <div className="quakesContainer">
          <CardContainer earthQuakes={earthQuakes} />
        </div>
      </div>
    </>
  );
};

export default Home;
