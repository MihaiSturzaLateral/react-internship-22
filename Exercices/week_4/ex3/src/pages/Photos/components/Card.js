import React from "react";

function Card(props) {
  return (
    <>
      <div className="card" style={{ width: 18 + "rem" }}>
        <img src={props.url} className="card-img-top" alt="from api" />
        <div className="card-body">
          <p className="card-text">{props.title}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
