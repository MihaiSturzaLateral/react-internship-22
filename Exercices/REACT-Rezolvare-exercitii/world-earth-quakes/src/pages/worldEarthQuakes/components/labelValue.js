import React from "react";
import "./labelValue.css";
import moment from "moment";
export default function Label(props) {
  const time = moment(props.time).format("DD.MM.yyyy hh:mm:ss");
  const tsunami = props.tsunamiRisk === 1 ? "risk" : "no risk";

  return (
    <div className="Container-label">
      <label>Title: {props.title}</label>
      <label>Place: {props.place}</label>
      <label>Time: {time}</label>
      <label>Status: {props.status}</label>
      <label>Tsunami Risk: {tsunami}</label>
    </div>
  );
}
