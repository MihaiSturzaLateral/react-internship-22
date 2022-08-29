import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addContactAction } from "./redux/actions/creators";
function FormModel() {
  let dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    id: Yup.string().required(),
    email: Yup.string().email().required(),
    name: Yup.string().required(),
    message: Yup.string().required(),
  });
  const formik = useFormik({
    initialValues: {
      id: "",
      email: "",
      name: "",
      message: "",
    },
    onSubmit: (values) => {
      addContactAction({
        id: values.id,
        email: values.email,
        name: values.name,
        message: values.message,
      })(dispatch);

      formik.resetForm();
    },
    validationSchema: validationSchema,
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Id</label>
        <input
          type="number"
          id="id"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.id}
        />
        {formik.errors.id ? (
          <div className="color-form">{formik.errors.id}</div>
        ) : null}
      </div>
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
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default FormModel;
