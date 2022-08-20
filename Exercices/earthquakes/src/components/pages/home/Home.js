import React, { useEffect, useState } from "react";
import axios from "axios";
import MapComponent from "../../MapComponent/MapComponent";
import TestData from "../../MapComponent/TestData.json";
import ListComponent from "../../ListComponent/ListComponent";
import "../../ListComponent/ListComponent.css";

const Home = () => {
  const [post, setPost] = useState(null);
  const [value, setValue] = useState("all");
  const [timeFrame, setTimeFrame] = useState("hour");

  function handleChangeMagnitude(event) {
    setValue(event.target.value);
  }

  React.useEffect(() => {
    axios
      .get(
        `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${value}_${timeFrame}.geojson`
      )
      .then((response) => {
        setPost(response.data.features);
      });
  }, [value, timeFrame]);

  if (!post) return null;

  return (
    <>
      <div>
        <button className="button button1" onClick={() => setTimeFrame("hour")}>
          Past Hour
        </button>
        <button className="button button2" onClick={() => setTimeFrame("day")}>
          Past Day
        </button>
        <button className="button button3" onClick={() => setTimeFrame("week")}>
          Past 7 Days
        </button>
        <button
          className="button button4"
          onClick={() => setTimeFrame("month")}
        >
          Past 30 Days
        </button>
        <div className="dropdownElement">
          <label>
            Magnitude
            <select
              className="dropdown"
              value={value}
              onChange={handleChangeMagnitude}
            >
              <option value="all">Any</option>
              <option value="1.0">1.0+</option>
              <option value="2.5">2.5+</option>
              <option value="4.5">4.5+</option>
            </select>
          </label>
        </div>
      </div>
      <aside>
        {post.map((el) => {
          const { id, mag, title, detail } = el.properties;
          return (
            <ListComponent id={id} mag={mag} title={title} detail={detail} />
          );
        })}
      </aside>
      <MapComponent earthquakes={TestData} height={450} width={700} />
    </>
  );
};

export default Home;
