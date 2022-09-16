import React from "react";
import Modal from "react-bootstrap/Modal";
import { sortCountries } from "../../Components/countriesArray";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "./ModalPageFormik.css";
import Button from "react-bootstrap/Button";
import { addReportAction,updateReportAction,getAllReports } from "../../redux/actions/actionsCreators";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ModalPageFormik = ({ closeModal,fname='',lname='',nat='AD',not='danger',sex='F',uploadedfile='',id,update }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Modal.Dialog className="modalDialog">
      <Modal.Header closeButton onClick={() => closeModal(false)}>
        <Modal.Title
          style={{ color: "red", padding: "10px", marginLeft: "30%" }}
        >
          Create/Edit
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalBody">
        <Formik
          initialValues={{
            fname:fname,
            lname: lname,
            nat: nat,
            not: not,
            sex: sex,
            uploadedfile:'',
          }}
          validate={(values) => {
            const errors = {};
            if (!values.fname) {
              errors.fname = "Required";
            }
            if (!values.lname) {
              errors.lname = "Required";
            }
            return errors;
          }}
          onSubmit={(values) => {
            (update?
              dispatch(updateReportAction(values,id)).then(()=>{
              closeModal(false);
              navigate('/myreportspage');
            }):dispatch(addReportAction(values)).then(() => {
              closeModal(false);
            }))
          }}
        >
          {({ values }) => (
            <Form className="form2">
              <label type="text" for="fname">
                First name:
              </label>
              <Field type="text" name="fname" className="inputForm" />
              <ErrorMessage className="error" name="fname" component="div" />

              <label type="text" for="lname">
                Last name:
              </label>
              <Field type="text" name="lname" className="inputForm" />
              <ErrorMessage className="error" name="lname" component="div" />

              <label type="text" for="nat">
                Nationality:
              </label>
              <Field as="select" name="nat" className="nationality">
                {sortCountries.map((item, index) => {
                  return (
                    <>
                      key={index}
                      <option value={item}>{item}</option>
                    </>
                  );
                })}
              </Field>
              <div className="notice">
                <label for="notice">Notice color: </label>
                <Field as="select" name="not" className="nationality" >
                  <option value="danger">Red</option>
                  <option value="warning">Yellow</option>
                </Field>
              </div>
              <div className="genderDiv">
                <label for="sex">Sex: </label>
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
              <div className="form-group" style={{ marginTop: "10px" }}>
                <label for="image">Image: </label>
                <div className="custom-file">
                  <Field
                    type="file"
                    name="uploadedfile"
                    className="custom-file-input"
                    id="customFile"
                  />
                </div>
              </div>
              <hr></hr>
              <Modal.Footer style={{ margin: "0px 10px 10px 0px" }}>
                <Button
                  variant="secondary"
                  onClick={() => closeModal(false)}
                  style={{ marginRight: "20px" }}
                >
                  Close
                </Button>
                <Button variant="danger" type="submit">
                  Save changes
                </Button>
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal.Dialog>
  );
};

export default ModalPageFormik;
