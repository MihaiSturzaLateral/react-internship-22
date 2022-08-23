import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useLocation } from "react-router-dom";
import MapComponent from "../home/components/MapComponent/MapComponent";
import "./worldEarthQuakes.css";
import Label from "./components/labelValue";

export default function WorldEarthQuakes() {
  const [data, setData] = useState(null);
  const location = useLocation();
  const id_details = location.state;

  useEffect(() => {
    axios
      .get(id_details)

      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id_details]);

  const colors = () => {
    let color = " ";
    if (
      (data?.properties?.mag <= 1.0 || data?.properties?.mag >= 1.0) &&
      data?.properties?.mag < 2.5
    )
      color = "#00cc66";
    else if (data?.properties?.mag >= 2.5 && data?.properties?.mag < 4.5)
      color = "#ffb570";
    else if (data?.properties?.mag >= 4.5) color = "#ff1717";
    return color;
  };

  return (
    <div>
      <div className="buton">
        <NavLink to="/">
          <button className="buttonDetails"> &#x2190; Go back</button>
        </NavLink>
        <h1 className="detpag">EarthQuake Details:</h1>
        <Label
          title={data?.properties?.title}
          place={data?.properties?.place}
          time={data?.properties?.time}
          status={data?.properties?.status}
          tsunamiRisk={data?.properties?.tsunami}
        />
      </div>
      <div className="Mag" style={{ backgroundColor: `${colors()}` }}>
        Magnitude : {data?.properties?.mag}
      </div>
      <MapComponent earthquakes={data} height={400} width={500} />
    </div>
  );
}
