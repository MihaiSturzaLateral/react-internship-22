import React, { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { useNavigate } from "react-router";
import "./Form.css";

import {useDispatch} from 'react-redux'
import { add_contactAction } from "./redux/actions/creator";

const Form = () => {
  const dispatch=useDispatch();
  let navigate = useNavigate();
  let regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

  const captchaRef = useRef(null);
  const handleSubmit = () => {
    const token = captchaRef.current.getValue();
    captchaRef.current.reset();
  };
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const sendDatatoAPI = (email, name, message) => {
   add_contactAction({email,name,message})(dispatch)
      .then(navigate("../read")).catch((e)=>{console.log(e)})
  };

  const formik = useFormik({
    initialValues: { email: "", name: "", message: "" },
    onSubmit: (values, { resetForm }) => {
      setEmail(email);
      setName(name);
      setMessage(message);
      sendDatatoAPI(values.email, values.name, values.message);
      resetForm();
      handleSubmit();
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

  return (
    <div>
      <div className="send-us">
        <h2>Send us a message</h2>
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
          <ReCAPTCHA
            sitekey={process.env.REACT_APP_SITE_KEY}
            ref={captchaRef}
          />
          <button
            className="btn-res"
            type="reset"
            onClick={() => {
              formik.resetForm();
              captchaRef.current.reset();
            }}
          >
            Reset form
          </button>
          <button className="btn-sub" type="submit">
            Send message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;