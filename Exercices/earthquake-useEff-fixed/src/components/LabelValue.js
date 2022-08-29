import React from "react";

export default function LabelValue(props) {
  return (
    <div className="label-value">
      <h5>{props.title}</h5>
      <p>{props.info}</p>
    </div>
  );
}
