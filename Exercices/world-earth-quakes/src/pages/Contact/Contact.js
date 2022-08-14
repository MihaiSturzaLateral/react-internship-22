import React from "react";
// import { ReactDOM } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/GenericNavbar";
import { useFormik } from "formik";
function Contact() {
  let regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
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
      if (!values.message) {
        errors.message = "Required";
      }
      return errors;
    },
  });
  return (
    <>
      <Navbar />
      <div className="container-sm">
        <form onSubmit={formik.handleSubmit}>
          <h1 className="general-h1">Contact</h1>
          <div className="mb-3">
            <label className="form-label">Your email:</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email ? (
              <div className="invalid-feedback" style={{ display: "inline" }}>
                Please write a valid email.
              </div>
            ) : null}
          </div>
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.errors.name ? (
              <div className="invalid-feedback" style={{ display: "inline" }}>
                Required!
              </div>
            ) : null}
          </div>
          <div className="mb-3">
            <label className="form-label">Message:</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
            ></textarea>
            {formik.errors.message ? (
              <div className="invalid-feedback" style={{ display: "inline" }}>
                Required!
              </div>
            ) : null}
          </div>
          <div className="btn-contact">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={formik.resetForm}
            >
              Reset form
            </button>
            <button type="submit" className="btn btn-primary">
              Send message
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
