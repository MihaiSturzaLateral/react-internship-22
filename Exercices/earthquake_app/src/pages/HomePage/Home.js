import React, { useEffect, useState } from "react";
import "./Home.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import MapComponent from "../../components/MapComponent/MapComponent";
import TestData from "../../components/MapComponent/TestData";
import axios from "axios";
import Card from "./components/Card";

const Home = () => {
  const [magProp, setMagProp] = useState([]);
  const [display, setDisplay] = useState("none");
  const [time, setTime] = useState("");
  const [mapData, setMapData] = useState([]);

  const fetchEarthquakes = (url) => {
    axios
      .get(url)
      .then((res) => {
        setMagProp(res.data.features);
        setMapData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const earthquakesFilter = (filterTime, filterMag) => {
    if ("all_hour" === filterTime) {
      if (filterMag === "any") {
        fetchEarthquakes(
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson"
        );
      }
      if (filterMag === "4.5") {
        fetchEarthquakes(
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_hour.geojson"
        );
      }
      if (filterMag === "2.5") {
        fetchEarthquakes(
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_hour.geojson"
        );
      }
      if (filterMag === "1") {
        fetchEarthquakes(
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_hour.geojson"
        );
      }
    }

    if ("all_day" === filterTime) {
      if (filterMag === "any") {
        fetchEarthquakes(
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
        );
      }
      if (filterMag === "4.5") {
        fetchEarthquakes(
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson"
        );
      }
      if (filterMag === "2.5") {
        fetchEarthquakes(
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson"
        );
      }
      if (filterMag === "1") {
        fetchEarthquakes(
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_day.geojson"
        );
      }
    }

    if ("all_week" === filterTime) {
      if (filterMag === "any")
        fetchEarthquakes(
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"
        );
      if (filterMag === "4.5") {
        fetchEarthquakes(
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson"
        );
      }
      if (filterMag === "2.5") {
        fetchEarthquakes(
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson"
        );
      }
      if (filterMag === "1") {
        fetchEarthquakes(
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_week.geojson"
        );
      }
    }

    if ("all_month" === filterTime) {
      if (filterMag === "any")
        fetchEarthquakes(
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson"
        );
      if (filterMag === "4.5") {
        fetchEarthquakes(
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson"
        );
      }
      if (filterMag === "2.5") {
        fetchEarthquakes(
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson"
        );
      }
      if (filterMag === "1") {
        fetchEarthquakes(
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_month.geojson"
        );
      }
    }
  };

  const loading = () => {
    return (
      <>
        <div className="spinner-grow text-successs status" role="status"></div>
        <p>Waiting to Choose....</p>
      </>
    );
  };

  const lastItem = (link) => {
    let linkSplit = link?.split("/");
    return linkSplit[linkSplit.length - 1]; //if object null doesnt run else splits the object
  };

  return (
    <div className="containerHome">
      <div className="wrapperHome">
        <div className="btns">
          <div className="fourBtns">
            <ButtonGroup>
              <Button
                id="btnComp"
                onClick={() => {
                  setTime("all_hour");
                  earthquakesFilter("all_hour", "any");
                }}
              >
                Past Hour
              </Button>
              <Button
                id="btnComp"
                onClick={() => {
                  setTime("all_day");
                  earthquakesFilter("all_day", "any");
                }}
              >
                Past Day
              </Button>
              <Button
                id="btnComp"
                onClick={() => {
                  setTime("all_week");
                  earthquakesFilter("all_week", "any");
                }}
              >
                Past 7 Days
              </Button>
              <Button
                id="btnComp"
                onClick={() => {
                  setTime("all_month");
                  earthquakesFilter("all_month", "any");
                }}
              >
                Past 30 Days
              </Button>
            </ButtonGroup>
          </div>
          <div className="filterBtn">
            <DropdownButton
              variant="primary"
              id="dropdown-basic-button"
              title="Magnitude "
              onClick={() => {
                if (display === "none") setDisplay("block");
                else setDisplay("none");
              }}
            >
              <Dropdown.Item
                id="dropdownBtn"
                onClick={() => {
                  earthquakesFilter(time, "any");
                }}
              >
                Any
              </Dropdown.Item>
              <Dropdown.Item
                id="dropdownBtn"
                onClick={() => {
                  earthquakesFilter(time, "4.5");
                }}
              >
                4.5+
              </Dropdown.Item>
              <Dropdown.Item
                id="dropdownBtn"
                onClick={() => {
                  earthquakesFilter(time, "2.5");
                }}
              >
                2.5+
              </Dropdown.Item>
              <Dropdown.Item
                id="dropdownBtn"
                onClick={() => {
                  earthquakesFilter(time, "1");
                }}
              >
                1+
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
        <div className="Map-Component">
          {magProp.length === 0 ? (
            loading()
          ) : (
            <MapComponent earthquakes={mapData} height={500} />
          )}
          {/* earthquakes will be the entire result from the api, width and height are integers */}
        </div>
      </div>
      <div className="List-Component">
        {magProp.map((magProp) => {
          let color = "";
          if (
            (magProp.properties.mag <= 1 || magProp.properties.mag >= 1) &&
            magProp.properties.mag < 2.5
          )
            color = "#3CC101";
          else if (
            magProp.properties.mag >= 2.5 &&
            magProp.properties.mag < 4.5
          )
            color = "#FF9900";
          else if (magProp.properties.mag >= 4.5) color = "#FF0000";
          return (
            <Card
              key={magProp.id}
              mag={magProp.properties.mag.toFixed(2)}
              title={magProp.properties.title}
              color={color}
              link={lastItem(magProp.properties.detail)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
