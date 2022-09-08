import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import "./CheckForm.css";

const CheckForm = ({ sendCheck }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nationality, setNationality] = useState("");
  const [valMin, setValMin] = useState(0);
  const [valMax, setValMax] = useState(0);
  const [sex, setSex] = useState("");
  const updateFirstName = (e) => {
    setFirstName(e);
  };
  const updateLastName = (e) => {
    setLastName(e);
  };
  const updateNationality = (e) => {
    setNationality(e);
  };
  const updateSex = (e) => {
    setSex(e);
  };
  const updateValMin = (e) => {
    setValMin(e);
  };
  const updateValMax = (e) => {
    setValMax(e);
  };

  return (
    <>
      <Form className="formm" style={{ padding: "10px" }}>
        <div className="title"> Check tool</div>
        <Form.Group className="mb-3">
          <Form.Label className="type-check">First Name</Form.Label>
          <Form.Control
            type="input"
            placeholder="Enter First name"
            onChange={(e) => updateFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="type-check">Last Name</Form.Label>
          <Form.Control
            type="input"
            placeholder="Enter Last name"
            onChange={(e) => updateLastName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="type-check">Nationality</Form.Label>
          <Form.Control
            type="input"
            placeholder="Enter nationality"
            onChange={(e) => updateNationality(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <label className="type-check">Min age: {valMin}</label>
          <input
            className="min-age"
            type="range"
            max={100}
            min={0}
            step={1}
            value={valMin}
            onChange={(e) => updateValMin(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <label className="type-check">Max age: {valMax}</label>
          <input
            className="max-age"
            type="range"
            max={100}
            min={0}
            step={1}
            value={valMax}
            onChange={(e) => updateValMax(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <label className="type-check">Sex: </label>
          <div className="form-check">
            <input
              onChange={(e) => updateSex(e.target.value)}
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              value="F"
            />
            <label className="form-check-label" for="flexRadioDefault1">
              Female
            </label>
          </div>
          <div className="form-check">
            <input
              onChange={(e) => updateSex(e.target.value)}
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              value="M"
            />
            <label className="form-check-label" for="flexRadioDefault2">
              Male
            </label>
          </div>
        </Form.Group>
        <div className="but">
          <Button
            variant="danger"
            onClick={() =>
              sendCheck([firstName, lastName, nationality, valMin, valMax, sex])
            }
          >
            Search
          </Button>
        </div>
      </Form>
    </>
  );
};

export default CheckForm;
