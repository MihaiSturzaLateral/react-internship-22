import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { addContactAction } from "../Actions/creators";

const Form = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  let regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },

    onSubmit: (values) => {
      alert("Form submitted!");
      addContactAction({
        id: values.id,
        email: values.email,
        name: values.name,
        message: values.channel,
      })(dispatch);
      navigate("/read");
      console.log("Form data --> ", values);
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
      if (!values.channel) {
        errors.channel = "Required";
      }
      return errors; // must return an object with errors
    },
  });

  // useEffect(() => {
  //     console.log("Form values --> ", formik.values);
  // })

  console.log("Form errors --> ", formik.errors);

  return (
    <div className="formContainer">
      <h2 className="contact-title">Create</h2>

      <form className="form" onSubmit={formik.handleSubmit}>
        <h3>Send us a message</h3>
        <div className="mb-3">
          <div className="form-control " style={{ border: "none" }}>
            <label htmlFor="name">Name</label>
            <br />
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

        <div className="mb-3 ">
          <div className="form-control" style={{ border: "none" }}>
            <label htmlFor="email">E-mail</label>
            <br />
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
        <div className=" mb-3 textAreaCont">
          <div className="form-control" style={{ border: "none" }}>
            <label htmlFor="channel">Message</label>
            <br />
            <textarea
              id="channel"
              rows="7"
              name="channel"
              onChange={formik.handleChange}
              value={formik.values.channel}
            />
            {formik.errors.channel ? (
              <div className="error">{formik.errors.channel}</div>
            ) : null}
          </div>
        </div>
        <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
