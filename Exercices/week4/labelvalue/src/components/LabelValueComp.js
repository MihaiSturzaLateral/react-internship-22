import React from "react";
import "./LabelValueComp.css";
/*
class LabelValueComp extends React.Component {
  render() {
    return (
      <div className="labelValue">
        <div className="label">{this.props.text}</div>
        <div className="value">{this.props.count}</div>
      </div>
    );
  }
}
*/

const LabelValueComp = ({ text, count }) => {
  return (
    <div className="labelValue">
      <div className="label">{text}</div>
      <div className="value">{count}</div>
    </div>
  );
};

export default LabelValueComp;
