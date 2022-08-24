import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Create.css";

const Create = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const postData = () => {
    axios
      .post(`https://6304bfbc761a3bce77eebfc9.mockapi.io/fakeData`, {
        email,
        name,
        message,
        checkbox,
      })
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <div className="create">
      <Form className="create-form">
        <div className="field">
          <Form.Field>
            <label>Email</label>
            <input
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Field>
        </div>
        <div className="field">
          <Form.Field>
            <label>Name</label>
            <input
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Field>
        </div>
        <div className="field">
          <Form.Field>
            <label>Message</label>
            <input
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Field>
        </div>
        <div className="field">
          <Form.Field>
            <Checkbox
              label="I agree to the Terms and Conditions"
              onChange={(e) => setCheckbox(!checkbox)}
            />
          </Form.Field>
        </div>
        <Button className="btn" onClick={postData} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Create;
