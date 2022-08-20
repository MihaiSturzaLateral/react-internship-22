import React from "react";

function Label(props) {
  return (
    <>
      <div className="Label">
        <label for="title">
          {`${"Title"}:`}
          <div>{props.title}</div>
        </label>
        <br></br>
        <label for="place">
          {`${"Place"}:`}
          <div>{props.place}</div>
        </label>
        <br></br>
        <label for="time">
          {`${"Time"}:`}
          <div>{props.time}</div>
        </label>
        <br></br>
        <label for="status">
          {`${"Status"}:`}
          <div>{props.status}</div>
        </label>
        <br></br>
        <label for="tsunami">
          {`${"Tsunami Risk"}:`}
          <div>{props.tsunami}</div>
        </label>
      </div>
    </>
  );
}
export default Label;
