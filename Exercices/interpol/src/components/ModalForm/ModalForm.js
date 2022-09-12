import Modal from "react-modal";

import { useNavigate } from "react-router-dom";
import { FormikProvider, useFormik } from "formik";
import { useDispatch } from "react-redux";
import { React, useEffect, useState } from "react";
import Select from "react-select";
import "./ModalForm.css";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { add_reportAction } from "../redux/actions/creator";
import SelectFileButton from "../SelectFileButton";

const ModalForm = ({ getModalState, modalIsOpen }) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const options = [
    { value: "Red", label: "RED" },
    { value: "Yellow", label: "YELLOW" },
  ];
  const urlImage =
    "https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg";
  const sendDatatoAPI = (
    firstName,
    lastName,
    nationality,
    notice,
    sex,
    birthDate
  ) => {
    add_reportAction(
      { firstName, lastName, nationality, notice, sex, birthDate, urlImage },
      notice
    )(dispatch)
      .then(navigate("../myReports"))
      .catch((e) => console.log(e));
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      nationality: "",
      notice: "",
      sex: "",
      birthDate: "",
      fileImg:""
    },
    onSubmit: (values) => {
      console.log("VAlues->>>", values);
      sendDatatoAPI(
        values.firstName,
        values.lastName,
        values.nationality,
        values.notice.value,
        values.sex,
        values.birthDate
      );
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
    <Modal isOpen={modalIsOpen}>
      <div>
        <div className="send-us">
          <h2>Create</h2>
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
                Birth date:
              </label>
              <input
                type="text"
                placeholder="Birth date"
                onFocus={(e) => (e.target.placeholder = "")}
                id="birthDate"
                name="birthDate"
                onChange={formik.handleChange}
                value={formik.values.birthDate}
              />
            </div>
            {/* <div className="form-control">
              <label className="inf" htmlFor="birthDate">
                Image:
              </label>
              <input
                type="file"
                placeholder="Birth date"
                onFocus={(e) => (e.target.placeholder = "")}
                id="fileImg"
                name="fileImg"
                onChange={formik.handleChange}
                value={formik.values.fileImg}
              />
              {console.log("fileee-->",formik.values.fileImg)}
            </div>
             */}

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
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </div>

            <div className="buts-form">
              <button
                className="btn-cls"
                onClick={() => {
                  getModalState(!modalIsOpen);
                }}
              >
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
                Save Changes
              </button>
              <SelectFileButton />
            </div>
          </form>
        </FormikProvider>
      </div>
    </Modal>
  );
};

export default ModalForm;
