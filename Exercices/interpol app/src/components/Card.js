import React from "react";
import { Link } from "react-router-dom";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const Card = ({ info }) => {
  return (
    <div className="card">
      <div className="img-container">
        <span
          className="color"
          style={
            String(info?._links.thumbnail?.href).includes("red")
              ? { backgroundColor: "red" }
              : { backgroundColor: "yellow" }
          }
        >
          Warning
        </span>
        <img
          className="photo"
          src={info?._links.thumbnail?.href}
          alt="headshot of suspect"
        />
      </div>
      <div className="suspect-info">
        <h4 className="full-name">{info?.name}</h4>
        <p className="b-day">Date of birth: {info?.date_of_birth}</p>
        <p className="age">
          Age: {new Date().getFullYear() - +info.date_of_birth?.slice(0, 4)}
        </p>
        <p className="nationalities">
          Nationalities:{" "}
          {
            <span
              className={`fi fi-${info?.nationalities?.[0].toLowerCase()} fis`}
            ></span>
          }
        </p>
      </div>
      <Link
        state={info}
        className="btn btn-secondary btn-details"
        to="/details"
      >
        View More Details
      </Link>
    </div>
  );
};

export default Card;
