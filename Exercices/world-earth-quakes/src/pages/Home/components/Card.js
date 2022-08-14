import React from "react";
function Card(props) {
  return (
    <>
      <div className="card-size">
        <div
          className="card-circle"
          style={{ backgroundColor: `${props.color}` }}
        >
          <span className="card-circle-text">{props.mag}</span>
        </div>
        <p className="card-text">{props.title}</p>
        <div
          className="card-link-box"
          style={{ backgroundColor: `${props.color}` }}
        >
          <a href="/" className="card-link">
            View details
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
