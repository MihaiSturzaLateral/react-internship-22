import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useNavigate, useLocation } from "react-router-dom";
import { updateContactAction } from "../../redux/actions/contactActions";
import { useDispatch } from "react-redux";

const Update = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const { idUpdated, emailUpdated, nameUpdated, messageUpdated } =
    location.state || {};
  const [email, setEmail] = useState(emailUpdated || "");
  const [name, setName] = useState(nameUpdated || "");
  const [message, setMessage] = useState(messageUpdated || "");
  const [ID, setID] = useState(idUpdated || "");

  const updateApiData = () => {
    updateContactAction(
      { email, name, message },
      ID
    )(dispatch)
      .then(() => navigate("/read"))
      .catch((error) => console.log("error", error));
  };

  return (
    <Form className="create-form">
      <Form.Field>
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Message</label>
        <textarea
          placeholder="Message"
          rows="3"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </Form.Field>
      <div className="btnsDiv">
        <Button className="btn" onClick={updateApiData} type="submit">
          Update
        </Button>
      </div>
    </Form>
  );
};

export default Update;
