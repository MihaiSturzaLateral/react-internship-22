import React from "react";
import { NavLink } from "react-router-dom";
import "./checkCard.css";

const CheckCard = ({
  forename,
  images,
  nationalities,
  date_of_birth,
  detail,
}) => {
  function formatDate(input) {
    var datePart = input.match(/\d+/g),
      year = datePart[0],
      month = datePart[1],
      day = datePart[2];

    return day + "-" + month + "-" + year;
  }

  const getAge = (birthDate) =>
    Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);

  const lower = nationalities?.map((element) => {
    return element.toLowerCase();
  });
  //console.log(lower);
  return (
    <div className="Card">
      <div className="Image">
        <img src={images} alt=" " />
      </div>
      <div className="Title">
        <h1>{forename}</h1>
      </div>
      <div className="Des">
        <p>
          <b style={{ fontSize: "17px", paddingRight: "10px" }}>
            Date of birth:
          </b>
          {formatDate(date_of_birth)} <br />
          <b style={{ fontSize: "17px", paddingRight: "10px" }}>
            Nationalities:
          </b>
          <img
            className="flag-img"
            src={`https://flagcdn.com/48x36/${lower}.png`}
            alt="..."
          />
          <br />
          <b style={{ fontSize: "17px", paddingRight: "10px" }}>Age:</b>
          {getAge(date_of_birth)}
        </p>
        <button className="Button-cards">
          <NavLink to="/details" state={detail}>
            View details
          </NavLink>
        </button>
      </div>
    </div>
  );
};
export default CheckCard;
