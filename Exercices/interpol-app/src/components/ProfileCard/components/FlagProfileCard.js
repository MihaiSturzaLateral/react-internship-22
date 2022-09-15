import React from "react";
import "./FlagProfileCard.css";

const FlagProfileCard = ({ flag }) => {
  return (
    <span className="text">
      Nationalities:
      {flag?.map((icon, key) => {
        return (
          <img
            key={key}
            className="iconFlag"
            alt="Country Flag"
            src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${icon}.svg`}
          />
        );
      })}
    </span>
  );
};

export default FlagProfileCard;
