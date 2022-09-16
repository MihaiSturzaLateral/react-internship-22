import React from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import img1 from "../dunder.jpg";
import { useState } from "react";

const ReportsCard = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="card reports-card">
      <div className="img-container">
        <span className="color reports-color">Warning</span>
        <img className="photo" src={img1} alt="headshot of suspect" />
      </div>
      <div className="suspect-info">
        <h4 className="full-name">{}</h4>
        <p className="b-day">Date of birth: {}</p>
        <p className="age">Age:</p>
        <p className="nationalities">Nationalities: {<span></span>}</p>
      </div>
      <button
        onClick={() => setModal(true)}
        className="btn btn-secondary btn-details"
      >
        Edit Info
      </button>
    </div>
  );
};

export default ReportsCard;
