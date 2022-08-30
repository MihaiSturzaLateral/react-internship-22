import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../Create/Create.css";
import { actionAddContact } from "../Redux/Contact/contactActions";

const Create = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const sendData = () => {
    actionAddContact({ email, name, message })(dispatch)
      .then(() => {
        navigate("/Read");
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

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
        <h1 className="title">Contact</h1>
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
              onChange={(e) => setEmail(e.target.value)}
              value={formik.email}
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
              onChange={(e) => setName(e.target.value)}
              value={formik.name}
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
              onChange={(e) => setMessage(e.target.value)}
              value={formik.message}
            />
          </div>
          <br></br>
          <button
            className="button button-reset"
            type="reset"
            onClick={(e) => formik.resetForm()}
          >
            Reset form
          </button>
          <button
            className="button button-submit"
            type="submit"
            onClick={sendData}
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  );
};
export default Create;
