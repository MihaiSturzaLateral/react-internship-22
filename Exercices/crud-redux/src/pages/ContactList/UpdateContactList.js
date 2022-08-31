import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

import NavBar from "../../components/NavBar";
import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import { updateContactAction } from "../../components/redux/actions/creators";
import { useDispatch } from "react-redux";
function UpdateContactList() {
  const [display, setDisplay] = useState("false");
  let dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    id: Yup.string().required(),
    email: Yup.string().email().required(),
    name: Yup.string().required(),
    message: Yup.string().required(),
  });
  const location = useLocation();
  const data = location.state;
  const formik = useFormik({
    initialValues: {
      id: data.id,
      email: data.email,
      name: data.name,
      message: data.message,
    },
    onSubmit: (values) => {
      updateContactAction(
        {
          email: values.email,
          name: values.name,
          message: values.message,
        },
        values.id
      )(dispatch);
      setDisplay("true");
    },
    validationSchema: validationSchema,
  });
  return (
    <>
      <NavBar
        title="Update Contact List"
        btn="Go Back"
        classN="btn btn-warning"
        path="/pages/ContactList/ContactList"
      />
      <div className="container-sm">
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              id="email"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email ? (
              <div className="color-form">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.errors.name ? (
              <div className="color-form">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              className="form-control"
              id="message"
              rows="3"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.message}
            ></textarea>
            {formik.errors.message ? (
              <div className="color-form">{formik.errors.message}</div>
            ) : null}
          </div>
          <button type="submit" className="btn btn-success">
            Update
          </button>
          {display === "true" ? (
            <Link
              to="/pages/ContactList/ContactList"
              className="btn btn-warning ms-3"
              type="button"
            >
              Go back
            </Link>
          ) : null}
        </form>
      </div>
    </>
  );
}

export default UpdateContactList;