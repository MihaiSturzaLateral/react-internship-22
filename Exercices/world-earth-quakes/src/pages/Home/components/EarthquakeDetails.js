import React, { useEffect, useState } from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/GenericNavbar";
import { Link } from "react-router-dom";
import CardDet from "./CardForDetails";
import MapComponent from "../../../components/MapComponent/MapComponent";
import { useLocation } from "react-router-dom";
import axios from "axios";
function EarthquakeDetails() {
  const location = useLocation();
  const [details, setDetails] = useState([]);
  const [mapBox, setMapBox] = useState([]);
  const data = location.state;
  useEffect(() => {
    axios
      .get(data)
      .then((res) => {
        setDetails(res.data.properties);
        setMapBox(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);
  let color = "";
  const colorPicker = () => {
    if ((details.mag <= 1 || details.mag >= 1) && details.mag < 2.5)
      color = "green";
    else if (details.mag >= 2.5 && details.mag < 4.5) color = "orange";
    else if (details.mag >= 4.5) color = "red";
  };
  return (
    <>
      <Navbar />
      <div className="container-sm " style={{ marginBottom: "50px" }}>
        <div className="btn-details-page">
          <Link to="/" className="btn btn-warning">
            Go back
          </Link>
          <span className="text-primary fw-bold">EarthQuake Details:</span>
        </div>
        <div className="d-flex">
          {details.length === 0 ? null : (
            <div className="card-details-page-container">
              <CardDet title="Title:" text={details.title} />
              <CardDet title="Place:" text={details.place} />
              <CardDet title="Time:" text={Date(details.time)} />
              <CardDet title="Status:" text={details.status} />
              <CardDet title="Tsunami risk:" text={details.tsunami} />
              {colorPicker()}
            </div>
          )}

          <div className="mapMag-details-page">
            <div
              className="text-details-page"
              style={{ backgroundColor: `${color}` }}
            >
              <span>Magnitude: </span>
              <span>{details.mag}</span>
            </div>
            <MapComponent earthquakes={mapBox} height={400}></MapComponent>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EarthquakeDetails;
