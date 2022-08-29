import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Card({ magnitude, location, detail }) {
  const navigate = useNavigate();
  const navigateToDetailPage = () => {
    navigate("/details");
  };
  let color;
  const changeColorArr = () => {
    if (magnitude < 2.5) {
      return (color = { background: "green" });
    }
    if (magnitude > 2.5 && magnitude < 4.5) {
      return (color = { background: "orange" });
    }
    if (magnitude >= 4.5) {
      return (color = { background: "red" });
    }
  };

  return (
    <div className="individualCard">
      <div className="cardInformation">
        <div className="magStyling" style={changeColorArr()}>
          {magnitude.toFixed(2)}
        </div>
        <div className="locationQuake">{location}</div>
      </div>
      <p>
        <Link
          style={color}
          onClick={() => navigateToDetailPage()}
          to="/details"
          state={{ detail: detail }}
        >
          View Details
        </Link>
      </p>
    </div>
  );
}
