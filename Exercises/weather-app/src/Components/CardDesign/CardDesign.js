import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./CardDesign.css";

const CardDesign = ({
  name,
  country,
  wind,
  humidity,
  weather,
  weather2,
  tempMin,
  tempMax,
  icon,
  sunrise,
  sunset,
  time,
}) => {
  return (
    <Card style={{ width: "18rem" }} border="success">
      <Card.Header
        style={{
          backgroundColor: "#D8E9A8",
          color: "green",
          fontWeight: "bold",
        }}
      >
        <img
          src={`http://openweathermap.org/img/wn/${icon}.png`}
          width="100rem"
          alt=""
        />
        {name}, {country}
        <div style={{ textAlign: "center", color: "green" }}>
          {weather2}, {weather}
        </div>
      </Card.Header>
      <ListGroup variant="flush" className="listSpan">
        <ListGroup.Item>
          <span>Wind speed: </span>
          {wind}
        </ListGroup.Item>
        <ListGroup.Item>
          <span>Humidity: </span>
          {humidity}
        </ListGroup.Item>
        <ListGroup.Item>
          <span>Min. temperature: </span>
          {tempMin}
        </ListGroup.Item>
        <ListGroup.Item>
          <span>Max. temperature: </span>
          {tempMax}
        </ListGroup.Item>
        <ListGroup.Item>
          <span>Sunrise: </span>
          {new Date(sunrise).toLocaleTimeString()}
        </ListGroup.Item>
        <ListGroup.Item>
          <span>Sunset: </span>
          {new Date(sunset).toLocaleTimeString()}
        </ListGroup.Item>
        <ListGroup.Item>
          <span>Local time: </span>
          {new Date(time).toLocaleTimeString()}
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default CardDesign;
