import React, { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate, useLocation } from "react-router";

const Update = () => {
  let navigate = useNavigate();

  let regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [ID, setID] = useState("");

  let location = useLocation();
  const { updatedId, EmailUpdated, NameUpdated, MessageUpdated } =
    location.state || {};

  //console.log("updateurileee  ", updatedId,EmailUpdated);
  // console.log("Location State: ",location.state);
  const sendDatatoAPI = (email, name, message) => {
    axios
      .put(`https://6300d36c9a1035c7f8f8c61a.mockapi.io/CrudContact/${ID}`, {
        email,
        name,
        message,
      })
      .then(navigate("../read"));
  };

  const formik = useFormik({
    initialValues: {
      email: EmailUpdated,
      name: NameUpdated,
      message: MessageUpdated,
    },
    onSubmit: (values, { resetForm }) => {
      sendDatatoAPI(values.email, values.name, values.message);
      resetForm();
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
    setEmail(EmailUpdated);
    setName(NameUpdated);
    setMessage(MessageUpdated);
    setID(updatedId);
    //console.log("Valorileee   ", ID, email, name, message);
  }, []);

  return (
    <div>
      <div className="send-us">
        <h2>Update information</h2>
      </div>
      <form className="contact-form" onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Your Email:</label>
          <input
            type="text"
            placeholder="Your Email"
            onFocus={(e) => (e.target.placeholder = "")}
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Your Name"
            onFocus={(e) => (e.target.placeholder = "")}
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

        <div className="form-control">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            placeholder="Your Message"
            onFocus={(e) => (e.target.placeholder = "")}
            name="message"
            onChange={formik.handleChange}
            value={formik.values.message}
          />
          {formik.errors.message ? (
            <div className="error">{formik.errors.message}</div>
          ) : null}
        </div>
        <div className="buts-form">
          <button className="btn-sub" type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
