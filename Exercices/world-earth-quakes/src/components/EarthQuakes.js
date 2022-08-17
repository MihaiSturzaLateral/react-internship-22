import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import QuakesDetail from "./QuakesDetail";

const EarthQuakes = ({ labelEarth, paragraphEarth, urlEarth }) => {
 
  const navigate = useNavigate();
  const navigateToDetails = () => {
    navigate("/details",{state:{urlEarth}});
  };
  

  return (
    <div className="earth-view">
      <label>{labelEarth}</label>
      <p>{paragraphEarth}</p>
      
     

      <button
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
