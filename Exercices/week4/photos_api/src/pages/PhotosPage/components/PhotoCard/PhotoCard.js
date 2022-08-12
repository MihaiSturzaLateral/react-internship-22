import React from "react";
import "./PhotoCard.css";

const PhotoCard = ({ title, url }) => {
  return (
    <div className="cardContainer">
      <div className="card">
        <img className="photo" src={url} alt="" />
        <div className="cardItem">
          <span>Title: {title}</span>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
