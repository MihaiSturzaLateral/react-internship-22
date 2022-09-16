import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Moment from "react-moment";
import Badge from "react-bootstrap/Badge";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  actionGetReports,
  actionDeleteReport,
} from "../../redux/Reports/reportsActions";
import UpdateModal from "../modal/updateModal";

const CardReports = ({
  firstName,
  lastName,
  dateOfBirth,
  nationality,
  sex,
  id,
}) => {
  let dispatch = useDispatch();
  const reports = useSelector((state) => state);

  const getData = () => {
    dispatch(actionGetReports());
  };

  useEffect(() => {
    dispatch(actionGetReports());
  }, []);

  const Delete = (id) => {
    actionDeleteReport(id)(dispatch)
      .then(() => {
        getData();
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
  const navigate = useNavigate();
  const [UpdateModalIsOpen, setModalIsOpen] = useState(false);
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
            <Card.Img
              variant="top"
              src={require("./image.png")}
              alt="pictures"
              style={{ height: "240px" }}
            />
          </Card.Header>
          <Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                {"Full Name: "}
                <span>
                  {firstName} {lastName}
                </span>
              </ListGroup.Item>
              <ListGroup.Item>
                {"Date of birth: "}
                <Moment format="DD-MM-YYYY">{dateOfBirth}</Moment>
              </ListGroup.Item>
              <ListGroup.Item>
                {"Nationality: "}
                <span>{nationality}</span>
              </ListGroup.Item>
              <ListGroup.Item>
                {"Sex: "}
                <span>{sex}</span>
              </ListGroup.Item>
            </ListGroup>
            <div className="buttonEdit">
              <Button
                variant="outline-dark"
                onClick={() =>
                  navigate("/Update", {
                    state: {
                      updatedId: id,
                      updatedFirstName: firstName,
                      updatedLastName: lastName,
                      updatedDateOfBirth: dateOfBirth,
                      updatedNationality: nationality,
                      updatedSex: sex,
                    },
                  })
                }
              >
                Edit info
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default CardReports;
