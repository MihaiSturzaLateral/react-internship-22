import React from "react";
import { Link } from "react-router-dom";
import "/node_modules/flag-icons/css/flag-icons.min.css";
// import img1 from "../dunder.jpg";

const CheckCard = ({ info }) => {
  // console.log(info);
  return (
    <div className="card check-card">
      <div className="split-card">
        <div className="img-container check-img-container">
          <span
            className="color check-color"
            style={
              String(info?._links?.thumbnail?.href).includes("red")
                ? { backgroundColor: "red" }
                : { backgroundColor: "yellow" }
            }
          >
            Warning
          </span>
          <img
            className="photo"
            src={info?._links?.thumbnail?.href}
            // src={img1}
            alt="headshot of suspect"
          />
        </div>
        <div className="suspect-info">
          <h4 className="full-name">{info?.name}</h4>
          {/* <h4 className="full-name">Full Name</h4> */}
          <p className="b-day">Date of birth: {info?.date_of_birth}</p>
          {/* <p className="b-day">Date of birth: </p> */}
          <p className="age">
            Age: {new Date().getFullYear() - +info.date_of_birth?.slice(0, 4)}
            {/* Age: */}
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
      </div>
      <div className="check-link-container">
        <Link
          state={info}
          className="btn btn-secondary btn-details"
          to="/details"
        >
          View More Details
        </Link>
      </div>
    </div>
  );
};

export default CheckCard;
