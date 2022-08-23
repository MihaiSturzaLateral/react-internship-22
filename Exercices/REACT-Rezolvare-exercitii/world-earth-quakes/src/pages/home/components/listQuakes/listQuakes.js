import React from "react";
import "./listQuakes.css";
import { NavLink } from "react-router-dom";

const ListQuakes = ({ id, mag, title, detail }) => {
  let color = " ";
  if ((mag <= 1.0 || mag >= 1.0) && mag < 2.5) color = "#00cc66";
  else if (mag >= 2.5 && mag < 4.5) color = "#ffb570";
  else if (mag >= 4.5) color = "#ff1717";
  return (
    <div className="containerList">
      <div className="item-magnitude" style={{ backgroundColor: `${color}` }}>
        {mag}
      </div>
      <div className="item-title">
        {title}
        <NavLink to="/WorldEarthQuakes" state={detail}>
          <button
            className="Button-details"
            style={{ backgroundColor: `${color}` }}
          >
            <span style={{ color: "#000000" }}> View details </span>
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default ListQuakes;
