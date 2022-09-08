import React, { useRef, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import "./Create.css";
import { useDispatch } from "react-redux";
import { addContactAction } from "../../redux/actions/contactActions";
import ReCAPTCHA from "react-google-recaptcha";

const Create = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const captchaRef = useRef(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const sendDataToApi = () => {
    addContactAction({ email, name, message })(dispatch)
      .then((e) => {
        navigate("/read");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="create">
      <div className="title">
        <h1>Send us a message</h1>
      </div>
      <Form className="create-form">
        <div className="field">
          <Form.Field>
            <label>Email:</label>
            <input
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Field>
        </div>
        <div className="field">
          <Form.Field>
            <label>Name: </label>
            <input
              placeholder="Name"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Field>
        </div>
        <div className="field">
          <Form.Field>
            <label>Message: </label>
            <textarea
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
              rows="3"
              type="text"
            />
          </Form.Field>
        </div>
        <div className="bottomDiv">
          <ReCAPTCHA
            className="recaptcha"
            sitekey="6LexpIAhAAAAACrqjlBMuhko4eNKFeS03kEGYUm1"
            ref={captchaRef}
          />
          <div className="btnsDiv">
            <Button className="btn" type="submit" onClick={sendDataToApi}>
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Create;
