import React from "react";
import Card from "react-bootstrap/Card";

const ArrestCard = ({ issuing, charge }) => {
  return (
    <Card
      style={{ width: "50rem", marginTop: "20px", marginBottom: "20px" }}
      border="danger"
    >
      <Card.Header>
        Issuing country:{" "}
        <img
          src={`https://cdn.jsdelivr.net/npm/react-flagkit@1.0.2/img/SVG/${issuing}.svg`}
          style={{ marginRight: "5px", height: "20px" }}
        />
      </Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h2 style={{ color: "red" }}>CHARGE WITH: </h2>
          <p> {charge} </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default ArrestCard;
