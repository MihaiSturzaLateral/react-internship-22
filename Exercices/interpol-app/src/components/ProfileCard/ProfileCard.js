import React from "react";
import { Link } from "react-router-dom";
import "./ProfileCard.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const ProfileCard = ({
  forenameWanted,
  nameWanted,
  nationalityWanted,
  birthWanted,
  imgWanted,
  url,
  Color,
  Warning,
  imgDetails,
}) => {
  const getAge = (birthday) => {
    let today = new Date();
    let birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const navigate = useNavigate();
  const navigateToDetails = () => {
    navigate("/details", { state: { url, Warning, imgDetails } });
  };

  return (
    <div className="profileContainer">
      <div className="imgContainer">
        <div className="noticeColor" style={{ backgroundColor: Color }}></div>
        <img className="imageCard" src={imgWanted} alt="" />
      </div>
      <div className="cardText">
        <h5 className="cardTitle">
          {forenameWanted} {nameWanted}
        </h5>
        <ul>
          <li className="text">Date of birth: {birthWanted}</li>
          <li className="text">Age: {getAge(birthWanted)}</li>
          <li className="text">Nationalities: {nationalityWanted}</li>
        </ul>
      </div>
      <div className="divBtn">
        <button
          className="infoBtn"
          onClick={() => {
            navigateToDetails();
          }}
        >
          View more info
        </button>
      </div>
    </div>
    /*
    <Card className="profileContainer">
      <div
        className="noticeColor"
        style={{ backgroundColor: `${Color}` }}
      ></div>
      <Card.Img className="imgC" variant="top" src={imgWanted} />
      <Card.Body className="cardText">
        <Card.Title className="cardTitle">
          {forenameWanted} {nameWanted}
        </Card.Title>
        <Card.Text className="text">Date of birth: {birthWanted}</Card.Text>
        <Card.Text className="text">Age: {getAge(birthWanted)}</Card.Text>
        <Card.Text className="text">
          Nationalities: {nationalityWanted}
        </Card.Text>
        <Button
          variant="dark"
          onClick={() => {
            navigateToDetails();
          }}
        >
          View more info
        </Button>
      </Card.Body>
    </Card>
    */
  );
};

export default ProfileCard;
