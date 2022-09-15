import React from "react";
import "./ReportCard.css";
import { Link, useNavigate } from "react-router-dom";
import FlagReportCard from "./FlagReportCard";

const ReportCard = ({
  id,
  firstName,
  lastName,
  nat,
  url,
  sex,
  date,
  color,
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
  const navigateToUpdate = () => {
    navigate("/update", {
      state: {
        updatedId: id,
        firstNameUpdate: firstName,
        lastNameUpdate: lastName,
        dateUpdate: date,
        natUpdate: nat,
        sexUpdate: sex,
        noticeUpdate: color,
      },
    });
  };

  return (
    <div className="profileContainer">
      <div className="imgContainer">
        <div className="noticeColor" style={{ backgroundColor: color }}>
          <span className="noticeText">{`${color} notice`}</span>
        </div>
        <img className="imageCard" src={url} alt="" />
      </div>
      <div className="cardText">
        <div className="cardHeader">
          <h5 className="cardTitle">
            {firstName} {lastName}
          </h5>
        </div>
        <div className="cardList">
          <span className="text">Date of birth: {date}</span>
          <span className="text">Age: {getAge(date)}</span>
          <FlagReportCard flag={nat} />
        </div>
      </div>
      <div className="divBtn">
        <button
          className="infoBtn"
          onClick={() => {
            navigateToUpdate();
          }}
        >
          Edit info
        </button>
      </div>
    </div>
  );
};

export default ReportCard;
