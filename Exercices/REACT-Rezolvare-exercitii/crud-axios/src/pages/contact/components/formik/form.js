import React, { useEffect } from "react";
import { useFormik } from "formik";
import "./form.css";
import axios from "axios";

const Form = () => {
  let regex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);

  const sendDataToAPI = (name, email, message) => {
    axios.post(`https://62fe9f5a41165d66bfc33c26.mockapi.io/Crud`, {
      name,
      email,
      message,
    });
  };

  const formik = useFormik({
    initialValues: {
      name: " ",
      email: "@mdo",
      message: " ",
    },
    onSubmit: (values) => {
      alert("Form submitted!");
      console.log("Form data --> ", values);
      sendDataToAPI(values.name, values.email, values.message);
    },
    validate: (values) => {
      let errors = {};

      if (!values.name) {
        errors.name = "Required";
      }
      if (!values.email) {
        errors.email = "Required";
      } else if (!values.email.match(regex)) {
        errors.email = "Invalid email format";
      }
      if (!values.message) {
        errors.message = "Required";
      }
      return errors; // must return an object with errors
    },
  });

  useEffect(() => {
    console.log("Form values --> ", formik.values);
  });

  console.log("Form errors --> ", formik.errors);

  return (
    <div className="form-body">
      <div className="container">
        <h3>Send us a message</h3>
        <form onSubmit={formik.handleSubmit}>
          <div className="wrapper">
            <div className="box">
              <label htmlFor="email">Your email</label>
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
          </div>

          <div className="wrapper">
            <div className="box">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {/* conditional rendering */}
              {formik.errors.name ? (
                <div className="error">{formik.errors.name}</div>
              ) : null}
            </div>
          </div>

          <div className="wrapper">
            <div className="box">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                onChange={formik.handleChange}
                value={formik.values.message}
              />
              {formik.errors.message ? (
                <div className="error">{formik.errors.message}</div>
              ) : null}
            </div>
          </div>

          <button type="submit" onClick={sendDataToAPI}>
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
