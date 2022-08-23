import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Contact.css";
import ReCAPTCHA from "react-google-recaptcha";
import Header from "../../components/Header/Header";
import axios from "axios";

const Contact = () => {
  const Schema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Required"),
    name: Yup.string().required("Required"),
    message: Yup.string().min(1).required("Required"),
  });

  const handleSubmit = () => {
    captchaRef.current.reset();
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
    onSubmit: (values, { resetForm }) => {
      alert("Form submitted!");
      console.log("Form data -->", values);
      axios.post("https://6304bfbc761a3bce77eebfc9.mockapi.io/fakeData", {
        email: values.email,
        name: values.name,
        message: values.message,
      });
      handleSubmit();
      formik.resetForm();
    },
    validationSchema: Schema,
  });

  console.log("Form errors --> ", formik.errors);

  const captchaRef = useRef(null);

  return (
    <>
      <Header />
      <div className="containerContact">
        <div className="contact">
          <h1 className="ct">Contact</h1>
        </div>
        <div className="wrapperContact">
          <div className="title">
            <h3>Send us a message</h3>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="formControl">
              <label className="label" htmlFor="email">
                Your email:
              </label>
              <input
                className="input"
                type="text"
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="name@emailprovider.com"
              />
              {formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="formControl">
              <label className="label" htmlFor="name">
                Name:
              </label>
              <input
                className="input"
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
            <div className="formControl">
              <label className="label" htmlFor="message">
                Message:
              </label>
              <textarea
                className="input"
                type="text"
                id="message"
                name="message"
                onChange={formik.handleChange}
                value={formik.values.message}
              />
              {formik.errors.message ? (
                <div className="error">{formik.errors.message}</div>
              ) : null}
            </div>
            <div className="buttons">
              <ReCAPTCHA
                className="recaptcha"
                sitekey="6LexpIAhAAAAACrqjlBMuhko4eNKFeS03kEGYUm1"
                ref={captchaRef}
              />
              <button
                className="reset"
                onClick={() => {
                  formik.resetForm();
                  captchaRef.current.reset();
                }}
              >
                Reset form
              </button>
              <button className="submit" type="submit">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
