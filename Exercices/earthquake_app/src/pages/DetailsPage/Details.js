import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LabelCard from "./components/LabelCard";
import "./Details.css";
import MapComponent from "../../components/MapComponent/MapComponent";
import axios from "axios";
import moment from "moment";
import Header from "../../components/Header/Header";

const Details = () => {
  const [MagProp, setMagProp] = useState({});
  const [mapData, setMapData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/${id}`)
      .then((res) => {
        setMagProp(res.data.properties);
        setMapData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  console.log(mapData);

  const colorFunc = () => {
    let color = "";
    if ((MagProp.mag <= 1 || MagProp.mag >= 1) && MagProp.mag < 2.5)
      color = "#3CC101";
    else if (MagProp.mag >= 2.5 && MagProp.mag < 4.5) color = "#FF9900";
    else if (MagProp.mag >= 4.5) color = "#FF0000";

    return color;
  };

  return (
    <>
      <Header />
      <div className="detailsContainer">
        <div className="leftDiv">
          <div className="leftTop">
            <Link to="/">
              <button className="backButton">Go back</button>
            </Link>
            <h2 className="pageTitle">EarthQuake Details:</h2>
          </div>
          <div className="leftBottom">
            <LabelCard title="Title: " content={MagProp.title} />
            <LabelCard title="Place: " content={MagProp.place} />
            <LabelCard
              title="Time: "
              //content={moment(MagProp.time).format("DD.MM.yyyy hh:mm:ss")}
              content={Date(MagProp.time)}
            />
            <LabelCard title="Status: " content={MagProp.status} />
            <LabelCard
              title="Tsunami risk: "
              content={MagProp.tsunami === 1 ? "risk" : "no risk"}
            />
          </div>
        </div>
        <div className="rightDiv">
          <div
            className="magnitudeDiv"
            style={{ backgroundColor: `${colorFunc()}` }}
          >
            <span className="magnitudeLabel">{`Magnitude: ${MagProp?.mag?.toFixed(
              2
            )}`}</span>
          </div>
          <div className="mapComp">
            {<MapComponent earthquakes={mapData} height={500} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
