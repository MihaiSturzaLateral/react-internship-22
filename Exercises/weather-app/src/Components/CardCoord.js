import React from "react";
import Card from "react-bootstrap/Card";

const CardCoord = ({ latitude, longitude }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Coordinates for the town you`ve selected:</Card.Title>
        <Card.Text>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardCoord;
