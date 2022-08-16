import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Card from "./components/Card";
import axios from "axios";
import { useState } from "react";
import MapComponent from "../../components/MapComponent/MapComponent";
import TestData from "../../components/MapComponent/TestData";

function Home() {
  const [propMag, setPropMag] = useState([]);
  const [display, setDisplay] = useState("none");
  const [time, setTime] = useState("");
  const [mapData, setMapData] = useState([]);

  // useEffect(() => {
  //   if (!apiConnect) {
  //     axios
  //       .get(
  //         `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson`
  //       )
  //       .then((res) => {
  //         setPropMag(res.data.features);
  //         setApiConnect(!apiConnect);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }, [apiConnect]);

  const connectToApi = (url) => {
    axios
      .get(url)
      .then((res) => {
        setPropMag(res.data.features);
        setMapData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
  // onClick={() =>f {
  //   i (display == "none") setDisplay("block");
  //   else setDisplay("none");
  // }}

  const selectApiOption = (timeOption, magOption) => {
    if ("all_hour" === timeOption) {
      if (magOption === "any") {
        connectToApi(
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson"
        );
      }
      if (magOption === "4.5") {
        connectToApi(
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_hour.geojson"
        );
      }
      if (magOption === "2.5") {
        connectToApi(
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_hour.geojson"
        );
      }
      if (magOption === "1") {
        connectToApi(
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_hour.geojson"
        );
      }
    }
    if ("all_day" === timeOption) {
      if (magOption === "any")
        connectToApi(
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
        );
      if (magOption === "4.5") {
        connectToApi(
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson"
        );
      }
      if (magOption === "2.5") {
        connectToApi(
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson"
        );
      }
      if (magOption === "1") {
        connectToApi(
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_day.geojson"
        );
      }
    }
    if ("all_week" === timeOption) {
      if (magOption === "any")
        connectToApi(
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"
        );
      if (magOption === "4.5") {
        connectToApi(
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson"
        );
      }
      if (magOption === "2.5") {
        connectToApi(
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson"
        );
      }
      if (magOption === "1") {
        connectToApi(
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_week.geojson"
        );
      }
    }
    if ("all_month" === timeOption) {
      if (magOption === "any")
        connectToApi(
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson"
        );
      if (magOption === "4.5") {
        connectToApi(
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson"
        );
      }
      if (magOption === "2.5") {
        connectToApi(
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson"
        );
      }
      if (magOption === "1") {
        connectToApi(
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_month.geojson"
        );
      }
    }
  };
  // const map = () => {
  //   if (propMag === []) setPropMag(TestData);
  //   else setPropMag(propMag);
  // };
  const loading = () => {
    return (
      <>
        <div className="spinner-grow text-successs status" role="status"></div>
        <p>Waiting to Choose....</p>
      </>
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
                setTime("all_hour");
                selectApiOption("all_hour", "any");
              }}
            >
              Past Hour
            </button>
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => {
                setTime("all_day");
                selectApiOption("all_day", "any");
              }}
            >
              Past Day
            </button>
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => {
                setTime("all_week");
                selectApiOption("all_week", "any");
              }}
            >
              Past 7 Days
            </button>
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => {
                setTime("all_month");
                selectApiOption("all_month", "any");
              }}
            >
              Past 30 Days
            </button>
          </div>
          <div>
            <div className="dropdown">
              <button
                onClick={() => {
                  if (display === "none") setDisplay("block");
                  else setDisplay("none");
                }}
                className="btn btn-primary"
              >
                Magnitude<i className="arrow down"></i>
              </button>
              <div className="dropdown-content" style={{ display: display }}>
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    selectApiOption(time, "any");
                  }}
                >
                  Any
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    selectApiOption(time, "4.5");
                  }}
                >
                  4.5+
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    selectApiOption(time, "2.5");
                  }}
                >
                  2.5+
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    selectApiOption(time, "1");
                  }}
                >
                  1+
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container-sm">
          <div className="map ">
            {propMag.length === 0 ? (
              loading()
            ) : (
              <MapComponent earthquakes={mapData} height={500}></MapComponent>
            )}
          </div>
        </div>
      </div>
    );
  };
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
              propMag.properties.mag >= 2.5 &&
              propMag.properties.mag < 4.5
            )
              color = "orange";
            else if (propMag.properties.mag >= 4.5) color = "red";

            return (
              <Card
                key={propMag.id}
                mag={propMag.properties.mag.toFixed(2)}
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
