import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./CardDetails.css";

const CardDetails = ({
  eyesColor,
  weight,
  height,
  dateOfBirth,
  country,
  sex,
  place,
  nationalities,
}) => {
  return (
    <Card style={{ width: "18rem"}}>
      <ListGroup variant="flush">
        <ListGroup.Item className="listGroup">
          Eyes color: <span>{eyesColor}</span>{" "}
        </ListGroup.Item>
        <ListGroup.Item className="listGroup">
          Weight: <span>{weight}</span>{" "}
        </ListGroup.Item>
        <ListGroup.Item className="listGroup">
          Height: <span>{height}</span>
        </ListGroup.Item>
        <ListGroup.Item className="listGroup">
          Date of birth: <span>{dateOfBirth}</span>
        </ListGroup.Item>
        <ListGroup.Item className="listGroup">
          Country of birth: <span>{country}</span>
        </ListGroup.Item>
        <ListGroup.Item className="listGroup">
          Sex: <span>{sex}</span>{" "}
        </ListGroup.Item>
        <ListGroup.Item className="listGroup">
          Place of birth: <span>{place}</span>{" "}
        </ListGroup.Item>
        <ListGroup.Item className="listGroup">
          Nationalities: <span>{nationalities?.map((item) =>{
            return(
              <img src={`https://cdn.jsdelivr.net/npm/react-flagkit@1.0.2/img/SVG/${item}.svg`} style={{marginRight:'5px', height:'20px'}}/>
            )
          })}</span>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default CardDetails;
