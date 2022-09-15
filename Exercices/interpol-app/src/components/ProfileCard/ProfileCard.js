import React from "react";
import "./ProfileCard.css";
import { useNavigate } from "react-router-dom";
import FlagProfileCard from "./components/FlagProfileCard";

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
        <div className="noticeColor" style={{ backgroundColor: Color }}>
          <span className="noticeText">{`${Warning} notice`}</span>
        </div>
        <img className="imageCard" src={imgWanted} alt="" />
      </div>
      <div className="cardText">
        <div className="cardHeader">
          <h5 className="cardTitle">
            {forenameWanted} {nameWanted}
          </h5>
        </div>
        <div className="cardList">
          <span className="text">Date of birth: {birthWanted}</span>
          <span className="text">Age: {getAge(birthWanted)}</span>
          <FlagProfileCard flag={nationalityWanted} />
        </div>
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
  );
};

export default ProfileCard;
