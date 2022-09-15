import React from "react";
import "./FlagDetails.css";

const FlagDetails = ({ content }) => {
  return (
    <div className="labelContainer">
      {content?.map((iconFlag, key) => {
        return (
          <img
            key={key}
            className="flagIcon"
            alt="Country Flag"
            src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${iconFlag}.svg`}
          />
        );
      })}
    </div>
  );
};

export default FlagDetails;
