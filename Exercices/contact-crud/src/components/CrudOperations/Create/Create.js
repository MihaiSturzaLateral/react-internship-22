import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Create/Create.css";

const Create = () => {
  const navigate = useNavigate();
  const regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";

  const sendData = (e) => {
    axios.post("https://62fe9f5a41165d66bfc33c26.mockapi.io/Crud").then(() => {
      navigate("/Read");
    });
  };

  const formik = useFormik({
    initialValues: {
      email: " ",
      name: " ",
      message: " ",
    },
    onSubmit: (values) => {
      sendData(values);
    },
    validate: (values) => {
      let errors = {};

      if (!values.email) {
        errors.email = "Required";
      } else if (!values.email.match(regex)) {
        errors.email = "Invalid email format";
      }
      if (!values.name) {
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
              onChange={formik.handleChange}
              value={formik.values.email}
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
              onChange={formik.handleChange}
              value={formik.values.name}
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
              onChange={formik.handleChange}
              value={formik.values.message}
            />
          </div>
          <br></br>
          <button
            className="button button-reset"
            type="reset"
            onClick={(values) => formik.resetForm()}
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
