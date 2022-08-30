import Button from "react-bootstrap/Button";
import { useState } from "react";

function ButtonsGroup({ sendData }) {
  const [active, setActive] = useState();

  return (
    <>
      <Button
        variant="danger"
        onClick={() => {
          setActive("Red Notices");
          sendData("red");
        }}
      >
        Red Notices
      </Button>{" "}
      <Button variant="warning" onClick={() => {
          setActive("Yellow Notices");
          sendData("yellow");
        }}>Yellow Notices</Button>{" "}
        <Button variant="warning" onClick={() => {
          setActive("Yellow");
          sendData("all");
        }}>Yellow</Button>{" "}
    </>
  );
}

export default ButtonsGroup;
