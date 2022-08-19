import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ mag, title, color, link }) => {
  return (
    <div className="cardContainer">
      <div className="cardLeft" style={{ backgroundColor: `${color}` }}>
        <span className="circleText">{mag}</span>
      </div>
      <div className="cardRight">
        <span className="cardText">{title}</span>
        <Link to={`/details/${link}`}>
          <button
            className="cardButton"
            style={{ backgroundColor: `${color}` }}
          >
            View details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
