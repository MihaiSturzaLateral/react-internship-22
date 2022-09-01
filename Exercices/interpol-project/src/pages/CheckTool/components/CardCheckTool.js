import React from "react";
import { Link } from "react-router-dom";
function CardCheck({ forname, name, date, nat, url, detUrl }) {
  return (
    <div className="card mb-3" style={{ width: 540 + "px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={url} className="img-fluid rounded-start" alt="person" />
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
              <li className="list-group-item">Nationalities:{nat}</li>
              <li className="list-group-item">
                <Link
                  to="../../../components/Details"
                  className="btn btn-secondary"
                  state={{ detUrl: detUrl }}
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
