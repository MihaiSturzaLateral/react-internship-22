import React from "react";
import "./CardCheckToolFlag.css";

const CardCheckToolFlag = ({ flag }) => {
  return (
    <span className="listText">
      Nationalities:
      {flag?.map((icon, key) => {
        return (
          <img
            key={key}
            className="flagCheck"
            alt="Country Flag"
            src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${icon}.svg`}
          />
        );
      })}
    </span>
  );
};

export default CardCheckToolFlag;
