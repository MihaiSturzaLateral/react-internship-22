import React from "react";
function Card(props) {
  return (
    <>
      <div className="card-size">
        <div className="card-flex">
          <div
            className="card-circle"
            style={{ backgroundColor: `${props.color}` }}
          >
            <span className="card-circle-text">{props.mag}</span>
          </div>
          <span className="card_text">{props.title}</span>
        </div>
        <div className="card-link-flex">
          <div
            className="card-link-box"
            style={{ backgroundColor: `${props.color}` }}
          >
            <a href="/" className="card-link">
              View details
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
