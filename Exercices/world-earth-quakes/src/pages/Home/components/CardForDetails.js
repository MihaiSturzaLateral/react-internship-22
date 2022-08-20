import React from "react";

function CardDet({ title, text }) {
  return (
    <div className="card" style={{ marginTop: "5px" }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

export default CardDet;
