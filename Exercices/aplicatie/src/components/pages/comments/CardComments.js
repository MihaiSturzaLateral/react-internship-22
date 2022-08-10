import React from "react";

function CardComments(props) {
  return (
    <>
      <div className="comDiv">
        <p>
          {"Id: "}
          <span>{props.id}</span>
        </p>

        <p>
          {"Name: "}
          <span>{props.name}</span>
        </p>
        <p>
          {"Email: "}
          <span>{props.email}</span>
        </p>
      </div>
    </>
  );
}
export default CardComments;
