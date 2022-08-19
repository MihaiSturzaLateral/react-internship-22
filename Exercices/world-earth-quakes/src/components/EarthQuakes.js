import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import QuakesDetail from "./QuakesDetail";

const EarthQuakes = ({
  labelEarth,
  paragraphEarth,
  urlEarth,
  magEarth,
  rawData,
}) => {
  const navigate = useNavigate();
  const navigateToDetails = () => {
    navigate("/details", { state: { urlEarth, rawData } });
  };

  const backgroundChange = () => {
    if (magEarth >= "4.5") return "#ff0000";
    else if (magEarth <= "4.5" && magEarth > " 2.5") return "#FFA500";
    else if (magEarth <= "2.5" && magEarth > "0.99") return "#00D100";
  };

  return (
    <div className="earth-view">
      <label style={{ backgroundColor: `${backgroundChange()}` }}>
        {labelEarth}
      </label>
      <p>{paragraphEarth}</p>

      <button
        style={{ backgroundColor: `${backgroundChange()}` }}
        onClick={() => {
          navigateToDetails();
        }}
      >
        View details
      </button>
    </div>
  );
};

export default EarthQuakes;
