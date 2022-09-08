import React from "react";
import "./LabelValue.css";

const LabelValue = ({ content }) => {
  return (
    <div className="labelContainer">
      <span className="labelTitle">{content}</span>
    </div>
  );
};

export default LabelValue;
