import React from "react";
import Moment from "react-moment";
import "./Label.css";

function Label({
  eyesColorsId,
  weight,
  height,
  dateOfBirth,
  sexId,
  place,
  nationalities,
}) {
  return (
    <>
      <div className="Label">
        <label className="labelText" for="eyesColorsId">
          {`${"Eyes color"}:`} {eyesColorsId}
        </label>
        <br></br>
        <label className="labelText" for="weight">
          {`${"Weight"}:`} {weight}
        </label>
        <br></br>
        <label className="labelText" for="height">
          {`${"Height"}:`} {height}
        </label>
        <br></br>
        <label className="labelText" for="dateOfBirth">
          {`${"Date of birth"}: `}{" "}
          <Moment format="DD/MM/YYYY">{dateOfBirth}</Moment>
        </label>
        <br></br>
        <label className="labelText" for="sexId">
          {`${"Sex"}:`} {sexId}
        </label>
        <br></br>
        <label className="labelText" for="place">
          {`${"Place of birth"}:`} {place}
        </label>
        <br></br>
        <label className="labelText" for="nationalities">
          {`${"Nationalities"}:`} {nationalities}
        </label>
      </div>
    </>
  );
}
export default Label;
