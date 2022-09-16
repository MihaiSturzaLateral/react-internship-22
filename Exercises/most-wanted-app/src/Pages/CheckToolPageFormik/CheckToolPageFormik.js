import React, { useState } from "react";
import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { sortCountries } from "../../Components/countriesArray";
import Slider from "@mui/material/Slider";
import Button from "react-bootstrap/Button";
import "./CheckToolPageFormik.css";
import Cards from "../../Components/Cards";
import Badge from "react-bootstrap/Badge";

const CheckToolPageFormik = () => {
  const [itemRed, setItemRed] = useState(null);
  const [itemYellow, setItemYellow] = useState(null);

  return (
    <div className="checkDiv">
      <Formik
        initialValues={{
          fname: undefined,
          lname: undefined,
          nat: undefined,
          minAge: undefined,
          maxAge: undefined,
          sex: undefined,
        }}
        // validate={(values) => {
        //   const errors = {};
        //   if (!values.fname) {
        //     errors.fname = "Required";
        //   }
        //   if (!values.lname) {
        //     errors.lname = "Required";
        //   }
        //   return errors;
        // }}
        onSubmit={async (values) => {
          const params = {
            forename: values.fname,
            name: values.lname,
            nationality: values.nat,
            ageMax: values.maxAge,
            ageMin: values.minAge,
            sexId: values.sex,
          };
          const redItem = axios.get(
            "https://ws-public.interpol.int/notices/v1/red?",
            { params }
          );
          const yellowItem = axios.get(
            "https://ws-public.interpol.int/notices/v1/yellow?",
            { params }
          );
          await axios
            .all([redItem, yellowItem])
            .then(
              axios.spread(function (res1, res2) {
                setItemRed(res1.data._embedded.notices);
                setItemYellow(res2.data._embedded.notices);
              })
            )
            .catch((errors) => {
              console.log(errors);
            });
        }}
      >
        {({ values }) => (
          <Form className="form">
            <h2 style={{ color: "red" }}>Check tool</h2>
            <hr></hr>
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
              <option value={""}>{}</option>
              {sortCountries.map((item, index) => {
                return (
                  <>
                    key={index}
                    <option value={item}>{item}</option>
                  </>
                );
              })}
            </Field>
            <div
              style={{
                paddingTop: "10px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "45%" }}>
                <label type="text" for="minAge">
                  Min age: {values.minAge}
                </label>
                <Field as={Slider} name="minAge" className="inputForm" />
              </div>
              <div style={{ width: "45%" }}>
                <label type="text" for="maxAge">
                  Max age: {values.maxAge}
                </label>
                <Field as={Slider} name="maxAge" className="inputForm" />
              </div>
            </div>
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
            <div className="searchBtn">
              <Button variant="danger" type="submit">
                Search
              </Button>
            </div>
          </Form>
        )}
      </Formik>
      <div className="headerList">
        <div>
          <Badge bg="danger" style={{ marginLeft: "10px", padding: "12px" }}>
            Total results:
            {itemRed && itemYellow ? itemRed?.length + itemYellow?.length : 0}
          </Badge>
        </div>
        <div className="scrollable">
          {itemRed?.map((item, index) => {
            return (
              <>
                <Cards
                  key={index}
                  fname={item?.forename}
                  lname={item?.name}
                  dateOfBirth={item?.date_of_birth}
                  nationalities={item?.nationalities}
                  imag={item?._links?.thumbnail?.href}
                  badgeColor="danger"
                  linkDetails={item?._links?.self?.href}
                  linkImages={item?._links?.images?.href}
                />
              </>
            );
          })}
          {itemYellow?.map((item, index) => {
            return (
              <>
                <Cards
                  key={index}
                  fname={item?.forename}
                  lname={item?.name}
                  dateOfBirth={item?.date_of_birth}
                  nationalities={item?.nationalities}
                  imag={item?._links?.thumbnail?.href}
                  badgeColor="warning"
                  linkDetails={item?._links?.self?.href}
                  linkImages={item?._links?.images?.href}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CheckToolPageFormik;
