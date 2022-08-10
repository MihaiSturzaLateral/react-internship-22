import React from "react";

function Card(props) {
  return (
    <>
      <div className="cardDiv">
        <img src={props.url} alt="pictures"></img>
        <div className="cardBox">
          <p>
            {"Title: "}
            <span>{props.title}</span>
          </p>
          <p>
            {"Id: "}
            <span>{props.id}</span>
          </p>
        </div>
      </div>
    </>
  );
}
export default Card;
