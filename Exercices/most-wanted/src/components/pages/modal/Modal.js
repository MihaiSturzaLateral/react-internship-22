import Modal from "react-modal";
import { useFormik, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionAddReport } from "../../redux/Reports/reportsActions";

const FormikModal = ({ getModalState, modalIsOpen }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const sendData = (firstName, lastName, nationality, dateOfBirth, sex) => {
    actionAddReport({ firstName, lastName, nationality, dateOfBirth, sex })(
      dispatch
    )
      .then(() => {
        navigate("/myReports");
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      nationality: "",
      dateOfBirth: "",
      sex: "",
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
    <Modal isOpen={modalIsOpen}>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <h3 className="title">Reports</h3>
          <div className="form-container">
            <h5 className="mess">Send us a report</h5>
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
            <button
              className="button-modal"
              onClick={() => {
                getModalState(!modalIsOpen);
              }}
            >
              Close{" "}
            </button>
            <button
              className="button button-reset"
              type="reset"
              onClick={(e) => formik.resetForm()}
            >
              Reset form
            </button>
            <button
              className="button button-submit"
              type="submit"
              onClick={sendData}
            >
              Send report
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
export default FormikModal;
