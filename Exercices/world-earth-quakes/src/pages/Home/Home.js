import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Card from "./components/Card";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [apiConnect, setApiConnect] = useState("false");
  const [propMag, setPropMag] = useState([]);
  useEffect(() => {
    if (!apiConnect) {
      axios
        .get(
          `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson`
        )
        .then((res) => {
          setPropMag(res.data.features);
          setApiConnect(!apiConnect);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [apiConnect]);

  const header = () => {
    return (
      <header>
        <nav className="navbar ">
          <div className="container-sm">
            <div className="left-side ">
              <div className="logo">WorldEarthQuakes</div>
              <div className="nav-items">
                <Link to="/" className="nav-link">
                  Home
                </Link>

                <Link to="/pages/About/About" className="nav-link">
                  About
                </Link>

                <Link to="/pages/Contact/Contact" className="nav-link">
                  Contact
                </Link>
              </div>
            </div>
            <div className="right-side">
              <input placeholder="Search" className="form-control me-2" />
              <button className="btn btn-outline-light">Search</button>
            </div>
          </div>
        </nav>
      </header>
    );
  };
  const mapButton = () => {
    return (
      <div>
        <div className="btn-container container-sm">
          <div className="left-side-btn">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => {
                setApiConnect(!apiConnect);
              }}
            >
              Past Hour
            </button>
            <button type="button" className="btn btn-outline-primary">
              Past Day
            </button>
            <button type="button" className="btn btn-outline-primary">
              Past 7 Days
            </button>
            <button type="button" className="btn btn-outline-primary">
              Past 30 Days
            </button>
          </div>
          <button type="button" className="btn btn-primary right-side-btn">
            Any
          </button>
        </div>
        <div className="container-sm">
          <div className="map "></div>
        </div>
      </div>
    );
  };
  console.log(propMag);
  return (
    <>
      {header()}
      <div className="container-main-home container-sm">
        {mapButton()}
        <div className="card-list">
          {propMag.map((propMag) => {
            let color = "";
            if (
              (propMag.properties.mag <= 1 || propMag.properties.mag >= 1) &&
              propMag.properties.mag < 2.5
            )
              color = "green";
            else if (
              propMag.properties.mag > 2.5 &&
              propMag.properties.mag < 4.5
            )
              color = "orange";
            else if (propMag.properties.mag > 4.5) color = "red";

            return (
              <Card
                key={propMag.id}
                mag={propMag.properties.mag}
                title={propMag.properties.title}
                color={color}
              />
            );
          })}
        </div>
      </div>
      <div className="wrapper">
        <Footer />
      </div>
    </>
  );
}

export default Home;
