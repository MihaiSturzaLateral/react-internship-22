import Modal from "react-modal";
import "../../../components/Modal/ModalForm.css";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  _addMyReports,
  _updateMyReports,
} from "../../../redux/actions/noticeActions";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";

const ModalUpdate = ({ getModalState, modalIsOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const options = [
    { value: "Red", label: "RED" },
    { value: "Yellow", label: "YELLOW" },
  ];

  const url =
    "https://www.kindpng.com/picc/m/119-1195498_avatar-people-person-business-user-man-character-businessman.png";

  let location = useLocation();
  const {
    updatedId,
    firstNameUpdate,
    lastNameUpdate,
    nationalityUpdate,
    sexUpdate,
    noticeUpdate,
    dateUpdate,
  } = location.state || {};

  const sendFormToApi = (
    id,
    firstName,
    lastName,
    nationality,
    noticeColor,
    sex,
    date
  ) => {
    _updateMyReports(updatedId, {
      firstName,
      lastName,
      nationality,
      noticeColor,
      sex,
      date,
    })(dispatch)
      .then(navigate("../myReports"))
      .catch((err) => console.log(err));
  };

  const Schema = Yup.object().shape({
    firstName: Yup.string().max(20).required("Required"),
    lastName: Yup.string().max(20).required("Required"),
    nationality: Yup.string().max(30).required("Required"),
    noticeColor: Yup.string().required("Required"),
    sex: Yup.string().required("Required"),
    date: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: firstNameUpdate,
      lastName: lastNameUpdate,
      nationality: nationalityUpdate,
      noticeColor: noticeUpdate,
      sex: sexUpdate,
      date: dateUpdate,
    },
    onSubmit: (values) => {
      alert("Form submitted!");
      console.log("Form data -->", values);
      sendFormToApi(
        values.firstName,
        values.lastName,
        values.nationality,
        values.noticeColor,
        values.sex,
        values.date
      );
      formik.resetForm();
    },
    validationSchema: Schema,
  });

  return (
    <Modal isOpen={modalIsOpen}>
      <div>
        <div className="send-us">
          <h2>Create</h2>
        </div>
        <FormikProvider value={formik}>
          <form className="contact-form" onSubmit={formik.handleSubmit}>
            <div className="form-control">
              <label className="inf" htmlFor="firstName">
                First Name:{" "}
              </label>
              <input
                type="text"
                placeholder="First name"
                onFocus={(e) => (e.target.placeholder = "")}
                id="firstName"
                name="firstName"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
              {formik.errors.firstName ? (
                <div className="error">{formik.errors.firstName}</div>
              ) : null}
            </div>
            <div className="form-control">
              <label className="inf" htmlFor="name">
                Last Name:
              </label>
              <input
                type="text"
                placeholder="Last name"
                onFocus={(e) => (e.target.placeholder = "")}
                id="lastName"
                name="lastName"
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />
              {formik.errors.lastName ? (
                <div className="error">{formik.errors.lastName}</div>
              ) : null}
            </div>
            <div className="form-control">
              <label className="inf" htmlFor="date">
                Birth date:
              </label>
              <input
                type="text"
                placeholder="1999/01/15"
                onFocus={(e) => (e.target.placeholder = "")}
                id="date"
                name="date"
                onChange={formik.handleChange}
                value={formik.values.date}
              />
              {formik.errors.date ? (
                <div className="error">{formik.errors.date}</div>
              ) : null}
            </div>
            <div className="form-control">
              <label className="inf" htmlFor="nationality">
                Nationality:
              </label>
              <input
                type="text"
                id="nationality"
                placeholder="ex: RO"
                onFocus={(e) => (e.target.placeholder = "")}
                name="nationality"
                onChange={formik.handleChange}
                value={formik.values.nationality}
              />
              {formik.errors.nationality ? (
                <div className="error">{formik.errors.nationality}</div>
              ) : null}
            </div>
            <div className="form-control">
              <label className="inf" htmlFor="noticeColor">
                Notice color:
              </label>
              <input
                type="text"
                id="noticeColor"
                name="noticeColor"
                placeholder="red/yellow"
                onFocus={(e) => (e.target.placeholder = "")}
                onChange={formik.handleChange}
                value={formik.values.noticeColor}
              />
              {formik.errors.noticeColor ? (
                <div className="error">{formik.errors.noticeColor}</div>
              ) : null}
            </div>
            <div className="form-control">
              <label className="inf" htmlFor="sex">
                Sex:
              </label>
              <input
                type="text"
                id="sex"
                name="sex"
                placeholder="Male/Female"
                onFocus={(e) => (e.target.placeholder = "")}
                onChange={formik.handleChange}
                value={formik.values.sex}
              />
              {formik.errors.sex ? (
                <div className="error">{formik.errors.sex}</div>
              ) : null}
            </div>
            <div>
              <button
                onClick={() => {
                  getModalState(!modalIsOpen);
                }}
              >
                Close
              </button>
              <button
                type="reset"
                onClick={() => {
                  formik.resetForm();
                }}
              >
                Reset Form
              </button>
              <button type="submit">Save Changes</button>
            </div>
          </form>
        </FormikProvider>
      </div>
    </Modal>
  );
};

export default ModalUpdate;
