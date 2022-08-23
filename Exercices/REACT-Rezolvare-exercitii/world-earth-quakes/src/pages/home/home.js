import React, { useState, useEffect } from "react";
import ListQuakes from "./components/listQuakes/listQuakes";
import MapComponent from "./components/MapComponent/MapComponent";
import "./home.css";
//import TestData from "./components/MapComponent/TestData";
import axios from "axios";

export default function Home() {
  const [timeFrame, setTimeFrame] = useState("hour");
  const [mag, setMag] = useState("all");
  const [data, setData] = useState(null);
  const types = ["hour", "day", "week", "month"];
  const magnitudini = ["all", "1.0", "2.5", "4.5"];

  useEffect(() => {
    axios
      .get(
        `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${mag}_${timeFrame}.geojson`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [mag, timeFrame]);

  console.log(data);

  function handleChangeMag(event) {
    setMag(event.target.value);
  }

  return (
    <div>
      <div className="butoane-div">
        {types.map((numB, i) => (
          <button
            key={i}
            className="butoane"
            onClick={() => setTimeFrame(numB)}
          >
            {numB}
          </button>
        ))}
      </div>
      <div className="dropdown-div">
        <button className="button-dropdown">
          Magnitude
          <select className="dropdown" value={mag} onChange={handleChangeMag}>
            {magnitudini.map((numD, index) => (
              <option key={index}>{numD}</option>
            ))}
          </select>
        </button>
      </div>
      <div className="list">
        {data?.features?.map((item, index) => {
          const { id, mag, title, detail } = item.properties;
          return (
            <ListQuakes
              key={index}
              id={id}
              mag={mag}
              title={title}
              detail={detail}
            />
          );
        })}
      </div>
      <MapComponent earthquakes={data} height={500} width={900} />
    </div>
  );
}
