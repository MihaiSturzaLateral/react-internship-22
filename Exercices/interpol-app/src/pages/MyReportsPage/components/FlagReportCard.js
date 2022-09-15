import React from "react";
import "./FlagReportCard.css";

const FlagReportCard = ({ flag }) => {
  return (
    <span className="text">
      Nationalities:
      <img
        className="iconFlag"
        alt="Country Flag"
        src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${flag}.svg`}
      />
    </span>
  );
};

export default FlagReportCard;
