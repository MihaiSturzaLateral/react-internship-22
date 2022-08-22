import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";

const Update = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [id, setId] = useState(null);
  const regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";

  const sendData = (values) => {
    axios
      .put(`https://62fe9f5a41165d66bfc33c26.mockapi.io/Crud/${id}`, values)
      .then(() => {
        navigate("/Read");
      });
  };
  useEffect(() => {
    setId(location.state.id);
  }, []);

  const formik = useFormik({
    initialValues: {
      email: location.state.email,
      name: location.state.name,
      message: location.state.message,
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
