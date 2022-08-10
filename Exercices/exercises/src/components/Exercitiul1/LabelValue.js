import React from "react";
import "./LabelValue.css";

class LabelValue extends React.Component {
  render() {
    return (
      <div className="label-value">
        <div className="label">{this.props.label}</div>
        <div className="value">{this.props.value}</div>
      </div>
    );
  }
}

export default LabelValue;
