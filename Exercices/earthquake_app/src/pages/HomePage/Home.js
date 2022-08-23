import React, { useEffect, useState } from "react";
import "./Home.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import MapComponent from "../../components/MapComponent/MapComponent";
import axios from "axios";
import Card from "./components/Card";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Home = () => {
  const [magProp, setMagProp] = useState([]);
  const [display, setDisplay] = useState("none");
  const [time, setTime] = useState("hour");
  const [mag, setMag] = useState("all");
  const [mapData, setMapData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCard, setFilteredCard] = useState([]);

  const SearchHeader = () => {
    return (
      <Navbar variant="dark" bg="primary" expand="lg">
        <Container fluid>
          <Navbar.Brand>WorldEarthQuakes</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button id="btn" variant="outline-light">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };

  useEffect(() => {
    setFilteredCard(
      magProp.filter((card) => {
        if (search === "") return card;
        else
          return card.properties.title
            .toLowerCase()
            .includes(search.toLocaleLowerCase());
      })
    );
  }, [search, magProp]);

  const fetchEarthquakes = () => {
    axios
      .get(
        `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${mag}_${time}.geojson`
      )
      .then((res) => {
        setMagProp(res.data.features);
        setMapData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchEarthquakes();
  }, [mag, time]);

  const loading = () => {
    return (
      <>
        <div className="spinner-grow text-successs status" role="status"></div>
        <p>Select the interval of time</p>
      </>
    );
  };

  const lastItem = (link) => {
    let linkSplit = link?.split("/"); //if object null doesnt run else splits the link
    return linkSplit[linkSplit.length - 1]; //returns the link without the last part
  };

  return (
    <>
      {SearchHeader()}
      <div className="containerHome">
        <div className="wrapperHome">
          <div className="btns">
            <div className="fourBtns">
              <ButtonGroup>
                <Button
                  id="btnComp"
                  onClick={() => {
                    setTime("hour");
                    setMag(mag);
                  }}
                >
                  Past Hour
                </Button>
                <Button
                  id="btnComp"
                  onClick={() => {
                    setTime("day");
                    setMag(mag);
                  }}
                >
                  Past Day
                </Button>
                <Button
                  id="btnComp"
                  onClick={() => {
                    setTime("week");
                    setMag(mag);
                  }}
                >
                  Past 7 Days
                </Button>
                <Button
                  id="btnComp"
                  onClick={() => {
                    setTime("month");
                    setMag(mag);
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
                    setMag("all");
                  }}
                >
                  Any
                </Dropdown.Item>
                <Dropdown.Item
                  id="dropdownBtn"
                  onClick={() => {
                    setMag("4.5");
                  }}
                >
                  4.5+
                </Dropdown.Item>
                <Dropdown.Item
                  id="dropdownBtn"
                  onClick={() => {
                    setMag("2.5");
                  }}
                >
                  2.5+
                </Dropdown.Item>
                <Dropdown.Item
                  id="dropdownBtn"
                  onClick={() => {
                    setMag("1.0");
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
          {filteredCard.map((magProp) => {
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
    </>
  );
};

export default Home;
