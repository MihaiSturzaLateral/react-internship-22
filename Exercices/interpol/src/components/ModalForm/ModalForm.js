import Modal from "react-modal";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { React } from "react";
import Select from "react-select";
import "./ModalForm.css";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { add_reportAction } from "../redux/actions/creator";

const ModalForm = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nationality, setNationality] = useState("");
  const [notice, setNotice] = useState("");
  const [sex, setSex] = useState("");

  const options = [
    { value: "Red", label: "RED" },
    { value: "Yellow", label: "YELLOW" },
  ];

  const sendDatatoAPI = (firstName, lastName, nationality, notice, sex) => {
    add_reportAction({ firstName, lastName, nationality, notice, sex })(
      dispatch
    )
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
    },
    onSubmit: (values) => {
      setFirstName(values.firstName);
      setLastName(values.lastName);
      setNationality(nationality);
      setNotice(notice);
      setSex(sex);
      console.log("VAlues->>>", values);
      sendDatatoAPI(
        values.firstName,
        values.lastName,
        values.nationality,
        values.notice,
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
        <h2>Create</h2>
      </div>
      <form className="contact-form" onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">First Name:</label>
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
          <label htmlFor="name">Last Name:</label>
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
          <label htmlFor="nationality">Nationality:</label>
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
        {/* <div className="form-control">
          <label htmlFor="Notice">Notice color:</label>
          <Select
            options={options}
            value={options.value}
            onChange={formik.handleChange}
          />
          {formik.errors.notice ? (
            <div className="error">{formik.errors.notice}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label>Sex: </label>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={formik.values.sex}
            //onChange={formik.handleChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </div> */}
        <div className="buts-form">
          <button
            className="btn-res"
            type="reset"
            onClick={() => {
              formik.resetForm();
            }}
          >
            Reset form
          </button>
          <button
            className="btn-sub"
            type="submit"
            // onClick={() => {
            //   console.log(
            //     "data --> ",
            //     firstName,
            //     lastName,
            //     sex,
            //     notice,
            //     nationality
            //   );
            // }}
            onSubmit={formik.handleSubmit}
            // onClick={() => {
            //   console.log("CLICKED");
            //   formik.handleSubmit()
            // }}
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModalForm;
