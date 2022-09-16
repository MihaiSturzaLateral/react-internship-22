import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Moment from "react-moment";
import Bootstrap from "bootstrap/dist/css/bootstrap.css";
import Badge from "react-bootstrap/Badge";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Cards = ({
  badgeColor,
  name,
  forename,
  dateOfBirth,
  image,
  nationalities,
  detail,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="cardAlign">
        <Card
          class="shadow-lg p-3 mb-5 bg-white rounded"
          style={{
            width: "16rem",
            float: "left",
            height: "520px",
            margin: "30px 20px 20px 20px",
          }}
        >
          <Card.Header style={{ height: "280px" }}>
            <Badge bg={badgeColor} style={{ width: "70px", height: "20px" }}>
              {" "}
            </Badge>
            <Card.Img
              variant="top"
              src={image}
              alt="pictures"
              style={{ height: "240px" }}
            />
          </Card.Header>
          <Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                {"Full Name: "}
                <span>
                  {forename} {name}
                </span>
              </ListGroup.Item>
              <ListGroup.Item>
                {"Date of birth: "}
                <Moment format="DD-MM-YYYY">{dateOfBirth}</Moment>
              </ListGroup.Item>
              <ListGroup.Item>
                {"Nationalities: "}
                <span>{nationalities}</span>
              </ListGroup.Item>
            </ListGroup>
            <div className="buttonDetail">
              <Button
                variant="outline-dark"
                onClick={() =>
                  navigate("/Details", {
                    state: detail,
                  })
                }
              >
                View More Details
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default Cards;
