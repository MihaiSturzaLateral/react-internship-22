import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LabelValue from "../../../components/LabelValue";
import MapComponent from "../../../components/MapComponent/MapComponent";
import axios from "axios";

export default function EQDetails() {
  const { state } = useLocation();
  const [details, setDetails] = useState([]);
  const [earthquake, setEarthQuake] = useState([]);
  console.log(state);

  const { title, place, time, status, tsunami, mag } = details;

  const dateEd = new Date(time).toLocaleString("en-US");
  console.log(dateEd);

  const changeColor = () => {
    let color = "";
    if (mag >= 4.5) color = "#ff0000";
    if (mag <= 4.5 && mag > 2.5) color = "#FFA500";
    if (mag <= 2.5) color = "#00D100";
    return color;
  };
  const fetchApiDetail = () => {
    axios
      .get(state.detail)
      .then((res) => {
        setDetails(res.data.properties);
        setEarthQuake(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    fetchApiDetail();
  }, []);
  console.log(title, place, time, status, tsunami, mag);
  console.log(earthquake);
  console.log(details);
  return (
    <div>
      <div className="link-back">
        <Link className="btn btn-secondary " to="/">
          {" "}
          Go Back
        </Link>
      </div>
      <div className="labelvaldet">
        <div>
          <LabelValue title="Title:" info={title} />
          <LabelValue title="Place:" info={place} />
          <LabelValue title="Time:" info={dateEd} />
          <LabelValue title="Status:" info={status} />
          <LabelValue title="Tsunami Risk:" info={tsunami} />
        </div>
        <div className="mag-map">
          <div
            className="label-value"
            style={{ backgroundColor: `${changeColor()}`, height: "5.8rem" }}
          >
            <label>Magnitude:</label>
            <label>{mag}</label>
          </div>
          <div className="miniMap">
            <MapComponent
              earthquake={earthquake}
              className="mapComponent"
              width={750}
              height={500}
            ></MapComponent>
          </div>
        </div>
      </div>
    </div>
  );
}
