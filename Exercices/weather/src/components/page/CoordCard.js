import Card from "react-bootstrap/Card";
import React from "react";

const CoordCard = ({ latitude, longitude }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Coordinates for the city: </Card.Title>
        <Card.Text>
          <span>Latitude: {latitude}</span>
          <span>Longitude: {longitude}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CoordCard;
