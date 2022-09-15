import React from "react";
import "./LabelValue.css";

const LabelValue = ({ content }) => {
  return (
    <div className="labelValueContainer">
      <span className="labelValueTitle">{content}</span>
    </div>
  );
};

export default LabelValue;
