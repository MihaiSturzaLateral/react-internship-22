import React from "react";
import { useNavigate } from "react-router-dom";
import "./CardCheckTool.css";
import CardCheckToolFlag from "./CardCheckToolFlag";

const CardCheckTool = ({
  imgWanted,
  forenameWanted,
  nameWanted,
  birthWanted,
  nationalityWanted,
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
    <div className="cardContainer">
      <div className="cardWrapper">
        <div className="imgWrapper">
          <div className="noticeClr" style={{ backgroundColor: Color }}>
            <span className="noticeTxt">{`${Warning} notice`}</span>
          </div>
          <img src={`${imgWanted}`} className="imgCard" alt="person" />
        </div>
        <div className="cardContent">
          <div className="cardBody">
            <div className="cardNameDiv">
              <h5 className="cardName">
                {forenameWanted} {nameWanted}
              </h5>
            </div>
            <div className="listWrapper">
              <span className="listText">Date of Birth: {birthWanted}</span>
              <span className="listText">Age: {getAge(birthWanted)}</span>
              <CardCheckToolFlag flag={nationalityWanted} />
            </div>
          </div>
          <div className="cardBtnDiv">
            <button
              className="cardButton"
              onClick={() => {
                navigateToDetails();
              }}
            >
              View details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCheckTool;
