import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Card from "./components/Card";
import axios from "axios";
import { useState } from "react";
import MapComponent from "../../components/MapComponent/MapComponent";
function Home() {
  const [propMag, setPropMag] = useState([]);
  const [display, setDisplay] = useState("none");
  const [time, setTime] = useState("");
  const [mapData, setMapData] = useState([]);
  const [mag, setMag] = useState("");
  const [search, setSearch] = useState("");
  const [filteredCard, setFilteredCard] = useState([]);

  useEffect(() => {
    setFilteredCard(
      propMag.filter((card) => {
        if (search === "") return card;
        else
          return card.properties.title
            .toLowerCase()
            .includes(search.toLocaleLowerCase());
      })
    );
  }, [search, propMag]);

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
              <input
                placeholder="Search"
                className="form-control me-2"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </nav>
      </header>
    );
  };
  useEffect(() => {
    connectToApi(
      `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${mag}_${time}.geojson`
    );
  }, [mag, time]);

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
                setTime("hour");
                setMag("all");
              }}
            >
              Past Hour
            </button>
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => {
                setTime("day");
                setMag("all");
              }}
            >
              Past Day
            </button>
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => {
                setTime("week");
                setMag("all");
              }}
            >
              Past 7 Days
            </button>
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => {
                setTime("month");
                setMag("all");
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
                    setMag("all");
                  }}
                >
                  Any
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    setMag("4.5");
                  }}
                >
                  4.5+
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    setMag("2.5");
                  }}
                >
                  2.5+
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    setMag("1.0");
                  }}
                >
                  1
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
          {filteredCard.map((propMag) => {
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
                url={propMag.properties.detail}
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
