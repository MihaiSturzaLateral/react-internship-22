import React from "react";
import { Link } from "react-router-dom";

const CardCheck = ({ forname, name, date, nat, url, detUrl }) => {
  return (
    <div className="cardContainer">
      <div className="cardWrapper">
        <div className="imgWrapper">
          <img src={url} className="imgCard" alt="person" />
        </div>
        <div className="cardContent">
          <div className="cardBody">
            <h5 className="cardName">
              Full Name:{forname} {name}
            </h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Date of Birth:{date}</li>
              <li className="list-group-item">
                Age:{new Date().getFullYear() - new Date(date).getFullYear()}
              </li>
              <li className="list-group-item">Nationalities:{nat}</li>
              <li className="list-group-item">
                <Link
                  to="../../../components/Details"
                  className="btn btn-secondary"
                  state={{ detUrl: detUrl }}
                >
                  View details
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCheck;
