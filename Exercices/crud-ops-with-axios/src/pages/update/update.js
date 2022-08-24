import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [ID, setID] = useState(null);

  console.log(ID);
  /*
  let location = useLocation();
  const {
    updatedId,
    emailUpdated,
    nameUpdated,
    messageUpdated,
    checkboxUpdated,
  } = location.state || {};
*/
  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setEmail(localStorage.getItem("Email"));
    setName(localStorage.getItem("Name"));
    setMessage(localStorage.getItem("Message"));
    setCheckbox(localStorage.getItem("Checkbox Value"));
    //setID(updatedId);
    //setEmail(emailUpdated);
    //setName(nameUpdated);
    //setMessage(messageUpdated);
    //setCheckbox(checkboxUpdated);
  }, []);

  const updateApiData = () => {
    axios
      .put(`https://6304bfbc761a3bce77eebfc9.mockapi.io/fakeData/${ID}`, {
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
    <Form className="create-form">
      <Form.Field>
        <label>Email</label>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Name</label>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Message</label>
        <input
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          label="I agree to the Terms and Conditions"
          checked={checkbox}
          onChange={(e) => setCheckbox(!checkbox)}
        />
      </Form.Field>
      <Button className="btn" onClick={updateApiData} type="submit">
        Update
      </Button>
    </Form>
  );
};

export default Update;
