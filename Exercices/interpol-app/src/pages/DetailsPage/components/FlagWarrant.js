import React from "react";
import "./FlagWarrant.css";
import { cName } from "countries-name";

const FlagWarrant = ({ warrantDet }) => {
  return (
    <div className="warrantDet">
      <img
        className="warrantFlagIcon"
        alt="Country Flag"
        src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${warrantDet}.svg`}
      />
      <label className="warrantCountry">
        {cName(warrantDet)?.toUpperCase()}
      </label>
    </div>
  );
};

export default FlagWarrant;
