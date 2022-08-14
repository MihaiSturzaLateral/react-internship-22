import React from "react";

import "./LabelValue.css";

const LabelValue = (props) => {
    return (
        <div className="label-value">
            <div className="label">{props.label}</div>
            <div className="value">{props.value}</div>
        </div>
    )
}


export default LabelValue;