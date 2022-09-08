import Modal from "react-modal";
import { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FormikProvider, useFormik } from "formik";
import { useDispatch } from "react-redux";
import { React } from "react";
import Select from "react-select";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { update_reportAction } from "./redux/actions/creator";

const ModalUpdate = ({ Open }) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const options = [
    { value: "Red", label: "RED" },
    { value: "Yellow", label: "YELLOW" },
  ];

  let location = useLocation();
  const {
    updatedId,
    firstNameUp,
    lastNameUp,
    nationalityUp,
    sexUp,
    notice,
    birthDate,
  } = location.state || {};

  const sendDatatoAPI = (
    firstName,
    lastName,
    birthDate,
    nationality,
    notice,
    sex
  ) => {
    update_reportAction(
      updatedId,
      { firstName, lastName, birthDate, nationality, sex },
      notice
    )(dispatch)
      .then(navigate("../myReports"))
      .catch((e) => console.log(e));
  };

  const formik = useFormik({
    initialValues: {
      firstName: firstNameUp,
      lastName: lastNameUp,
      birthDate: birthDate,
      nationality: nationalityUp,
      notice: notice,
      sex: sexUp,
    },
    onSubmit: (values) => {
      console.log("VAlues->>>", values);
      sendDatatoAPI(
        values.firstName,
        values.lastName,
        values.birthDate,
        values.nationality,
        values.notice.value,
        values.sex
      );

      //resetForm();
    },
    validate: (values) => {
      let errors = {};

      if (!values.firstName) {
        errors.firstName = "Required";
      }
      if (!values.lastName) {
        errors.lastName = "Required";
      }
      if (!values.nationality) {
        errors.nationality = "Required";
      }
      if (!values.notice) {
        errors.notice = "Required";
      }
      return errors; // must return an object with errors
    },
  });

  return (
    <div>
      <div className="send-us">
        <h2>Edit</h2>
      </div>

      <FormikProvider value={formik}>
        <form className="contact-form" onSubmit={formik.handleSubmit}>
          <div className="form-control">
            <label className="inf" htmlFor="firstName">
              First Name:
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
            <label className="inf" htmlFor="birthDate">
              Birth Date:
            </label>
            <input
              type="text"
              placeholder="Birth Date"
              onFocus={(e) => (e.target.placeholder = "")}
              id="birthDate"
              name="birthDate"
              onChange={formik.handleChange}
              value={formik.values.birthDate}
            />
          </div>

          <div className="form-control">
            <label className="inf" htmlFor="nationality">
              Nationality:
            </label>
            <input
              type="text"
              id="nationality"
              placeholder="Nationality"
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
            <label className="inf" htmlFor="Notice">
              Notice color:
            </label>
            <Select
              name="notice"
              options={options}
              onChange={(v) => formik.setFieldValue("notice", v)}
            />
            {formik.errors.notice ? (
              <div className="error">{formik.errors.notice}</div>
            ) : null}
          </div>
          <div className="form-control">
            <label className="inf">Sex: </label>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="sex"
              value={formik.values.sex}
              onChange={(event) => {
                formik.setFieldValue("sex", event.currentTarget.value);
              }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </div>
          <div className="buts-form">
            <button className="btn-cls" onClick={() => {}}>
              Close{" "}
            </button>
            <button
              className="btn-res"
              type="reset"
              onClick={() => {
                formik.resetForm();
              }}
            >
              Reset form
            </button>
            <button className="btn-sub" type="submit">
              Update
            </button>
          </div>
        </form>
      </FormikProvider>
    </div>
  );
};

export default ModalUpdate;
