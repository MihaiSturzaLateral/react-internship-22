import React from "react";
import "./LabelValue.css";

const LabelValue = ({label, value}) => {
    return (
      <div className="label-value">
        <div className="label">{label}</div>
        <div className="value">{value}</div>
      </div>
    );
}

export default LabelValue;
