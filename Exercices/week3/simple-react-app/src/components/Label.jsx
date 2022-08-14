import React from "react";
import "./label.css"

const Label =  ({ value, label }) => {
    return (
        <div className="label-value">
            <div className="label">{label}</div>
            <div className ="value">{value}</div>
        </div>
    )
}

export default Label