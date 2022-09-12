import React from "react";
import { Link } from "react-router-dom";
import countryFlagEmoji from "country-flag-emoji";
function CardCheck({ forname, name, date, nat, url, detUrl, color }) {
  return (
    <div className="card mb-3 card-style">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={url}
            width="400"
            height="500"
            className="img-fluid rounded-start"
            alt="person"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              Full Name:{forname} {name}
            </h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Date of Birth:{date}</li>
              <li className="list-group-item">
                Age:{new Date().getFullYear() - new Date(date).getFullYear()}
              </li>
              <li className="list-group-item">
                Nationalities:{nat ? countryFlagEmoji.get(nat[0]).emoji : null}
              </li>
              <li className="list-group-item">
                <Link
                  to="../../../components/Details"
                  className="btn btn-secondary"
                  style={{ backgroundColor: color, color: "black" }}
                  state={{ color: color, detUrl: detUrl }}
                >
                  View more info
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCheck;
