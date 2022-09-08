import React from "react";
import { Link } from "react-router-dom";

function Card({ fullname, date, nat, url, age, color, detUrl }) {
  return (
    <div className="card mt-3" style={{ width: 18 + "rem" }}>
      <img
        src={url}
        width="300"
        height="300"
        className="card-img-top"
        alt="person"
      />
      <div className="photo-box" style={{ backgroundColor: color }}></div>
      <div className="card-body">
        <h5 className="card-title">Full Name:{fullname}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Date of Birth:{date}</li>
        <li className="list-group-item">Age:{age}</li>
        <li className="list-group-item">Nationalities:{nat}</li>
      </ul>
      <div className="card-body d-flex justify-content-center">
        <Link
          to="../../../components/Details"
          className="btn btn-secondary"
          state={{ color: color, detUrl: detUrl }}
        >
          View more info
        </Link>
      </div>
    </div>
  );
}

export default Card;
