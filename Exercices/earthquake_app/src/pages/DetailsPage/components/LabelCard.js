import React from "react";
import "./LabelCard.css";

const LabelCard = ({ title, content }) => {
  return (
    <div className="labelContainer">
      <h3 className="labelTitle">{title}</h3>
      <span className="labelText">{content}</span>
    </div>
  );
};

export default LabelCard;
