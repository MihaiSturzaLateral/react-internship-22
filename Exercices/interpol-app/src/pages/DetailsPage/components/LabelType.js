import React from "react";
import "./LabelType.css";

const LabelType = ({ title }) => {
  return (
    <div className="labelTypeContainer">
      <span className="labelTypeTitle">{title}</span>
    </div>
  );
};

export default LabelType;
