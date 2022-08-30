import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { actionUpdateContact } from "../Redux/Contact/contactActions";
import { useDispatch } from "react-redux";

const Update = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [id, setId] = useState(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";

  const { updatedId, updatedEmail, updatedName, updatedMessage } =
    location.state || {};

  const sendData = () => {
    actionUpdateContact(
      { email, name, message },
      id
    )(dispatch)
      .then(() => {
        navigate("/Read");
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  useEffect(() => {
    setId(updatedId);
    setEmail(updatedEmail);
    setName(updatedName);
    setMessage(updatedMessage);
  }, []);

  const formik = useFormik({
    onSubmit: (email, name, message) => {
      sendData(email, name, message);
    },
    validate: (email, name) => {
      let errors = {};

      if (!email) {
        errors.email = "Required";
      } else if (!email.match(regex)) {
        errors.email = "Invalid email format";
      }
      if (!name) {
        errors.name = "Required";
      }
      return errors;
    },
  });

  console.log("Form errors --> ", formik.errors);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h1 className="title">Update</h1>
        <div className="form-container">
          <h3 className="mess">Send us a message</h3>
          <br></br>
          <div className="form-control">
            <label htmlFor="email">Your email:</label>
            <br></br>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>
          <br></br>

          <div className="form-control">
            <label htmlFor="name">Name:</label>
            <br></br>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {formik.errors.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}
          </div>
          <br></br>

          <div className="form-control">
            <label htmlFor="message">Message:</label>
            <br></br>
            <input
              className="message-container"
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <br></br>
          <button
            className="button button-submit"
            type="submit"
            onClick={sendData}
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};
export default Update;
