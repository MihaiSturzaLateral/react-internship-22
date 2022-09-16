import React from "react";
import { useFormik, Field, FormikProvider } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionUpdateReport } from "../../redux/Reports/reportsActions";

const UpdateModal = ({ Open }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let location = useLocation();

  const {
    updatedFirstName,
    updatedLastName,
    updatedNationality,
    updatedDateOfBirth,
    updatedSex,
    updatedId,
  } = location.state || {};

  const sendData = (firstName, lastName, nationality, dateOfBirth, sex) => {
    actionUpdateReport(
      { firstName, lastName, nationality, dateOfBirth, sex },
      updatedId
    )(dispatch)
      .then(() => {
        navigate("/myReports");
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const formik = useFormik({
    initialValues: {
      firstName: updatedFirstName,
      lastName: updatedLastName,
      nationality: updatedNationality,
      dateOfBirth: updatedDateOfBirth,
      sex: updatedSex,
    },
    onSubmit: (firstName, lastName, nationality, dateOfBirth, sex) => {
      sendData(firstName, lastName, nationality, dateOfBirth, sex);
    },
    validate: (firstName, lastName, nationality) => {
      let errors = {};

      if (!firstName) {
        errors.firstName = "Required";
      }
      if (!lastName) {
        errors.lastName = "Required";
      }
      if (!nationality) {
        errors.nationality = "Required";
      }
      return errors;
    },
  });

  console.log("Form errors --> ", formik.errors);

  return (
    <>
      <div>
        <FormikProvider value={formik}>
          <form
            style={{
              width: "500px",
              height: "700px",
              marginLeft: "auto",
              marginRight: "auto",
              paddind: "10px",
              boxShadow: "2px 2px 15px #ffaa6b inset",
              marginTop: "10px",
            }}
            onSubmit={formik.handleSubmit}
          >
            <h3 className="title">Edit</h3>
            <div className="form-container">
              <h5 className="mess">Edit a report</h5>
              <br></br>
              <div className="form-control">
                <label htmlFor="firstName">First Name: </label>
                <br></br>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  onChange={formik.handleChange}
                  value={formik.firstName}
                />
                {formik.errors.firstName ? (
                  <div className="error">{formik.errors.firstName}</div>
                ) : null}
              </div>
              <br></br>

              <div className="form-control">
                <label htmlFor="lastName">Last Name: </label>
                <br></br>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  onChange={formik.handleChange}
                  value={formik.lastName}
                />
                {formik.errors.lastName ? (
                  <div className="error">{formik.errors.lastName}</div>
                ) : null}
              </div>
              <br></br>

              <div className="form-control">
                <label htmlFor="nationality">Nationality: </label>
                <br></br>
                <input
                  type="text"
                  id="nationality"
                  name="nationality"
                  onChange={formik.handleChange}
                  value={formik.nationality}
                />
                {formik.errors.nationality ? (
                  <div className="error">{formik.errors.nationality}</div>
                ) : null}
              </div>
              <br></br>

              <div className="form-control">
                <label htmlFor="dateOfBirth">Date of birth: </label>
                <br></br>
                <input
                  type="text"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  onChange={formik.handleChange}
                  value={formik.dateOfBirth}
                />
              </div>
              <br></br>

              <div className="form-control">
                <label htmlFor="sex">Sex: </label>
                <br></br>
                <div>
                  <label>
                    <Field type="radio" name="sex" value="F" />
                    Female
                  </label>
                </div>
                <div>
                  <label>
                    <Field type="radio" name="sex" value="M" />
                    Male
                  </label>
                </div>
              </div>
              <button className="button-close" onClick={() => {}}>
                Close{" "}
              </button>
              <button
                className="button button-reset"
                type="reset"
                onClick={(e) => formik.resetForm()}
              >
                Reset form
              </button>
              <button className="button-update" type="submit">
                Update
              </button>
            </div>
          </form>
        </FormikProvider>
      </div>
    </>
  );
};
export default UpdateModal;
