import React, { useState } from "react";
import axios from "axios";
import { Formik, Field, Form } from "formik";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Cards from "../card/Card";
import "./checkTool.css";

const CheckTool = () => {
  const [itemRed, setItemRed] = useState(null);
  const [itemYellow, setItemYellow] = useState(null);

  return (
    <div className="checkTool">
      <Formik
        initialValues={{
          firstName: undefined,
          lastName: undefined,
          nat: undefined,
          minAge: undefined,
          maxAge: undefined,
          sex: undefined,
        }}
        onSubmit={async (values) => {
          const params = {
            forename: values.firstName,
            name: values.lastName,
            nationality: values.nat,
            ageMin: values.minAge,
            ageMax: values.maxAge,
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
              axios.spread(function (result1, result2) {
                setItemRed(result1.data._embedded.notices);
                setItemYellow(result2.data._embedded.notices);
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
            <label type="text" for="firstName">
              First name:
            </label>
            <Field type="text" name="firstName" className="input" />

            <label type="text" for="lastName">
              Last name:
            </label>
            <Field type="text" name="lastName" className="input" />

            <label type="text" for="nat">
              Nationality:
            </label>
            <Field as="select" name="nat" className="nationality">
              <option value={""}>{}</option>
            </Field>
            <div
              style={{
                paddingTop: "10px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "30%" }}>
                <label class="form-label" for="minAge">
                  {" "}
                  Min age: {values.minAge}
                  <div class="range">
                    <input type="range" class="form-range" id="minAge" />
                  </div>
                </label>
              </div>
              <div style={{ width: "30%", margin: "0 20px 0 0" }}>
                <label class="form-label" for="minAge">
                  {" "}
                  Max age: {values.maxAge}
                  <div class="range">
                    <input type="range" class="form-range" id="maxAge" />
                  </div>
                </label>
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
            <div className="searchButton">
              <Button
                variant="danger"
                type="submit"
                style={{ float: "right", margin: "20px" }}
              >
                Search
              </Button>
            </div>
          </Form>
        )}
      </Formik>
      <aside>
        <div>
          <Badge bg="danger" style={{ marginLeft: "10px", padding: "12px" }}>
            Total results:
            {itemRed && itemYellow ? itemRed?.length + itemYellow?.length : 0}
          </Badge>
        </div>
        <div className="scroll">
          {itemRed?.map((item, index) => {
            return (
              <>
                <Cards
                  key={index}
                  forename={item?.forename}
                  name={item?.name}
                  dateOfBirth={item?.date_of_birth}
                  nationalities={item?.nationalities}
                  image={item?._links?.thumbnail?.href}
                  badgeColor="danger"
                  detail={item?._links?.self?.href}
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
                  forename={item?.forename}
                  name={item?.name}
                  dateOfBirth={item?.date_of_birth}
                  nationalities={item?.nationalities}
                  image={item?._links?.thumbnail?.href}
                  badgeColor="warning"
                  detail={item?._links?.self?.href}
                  linkImages={item?._links?.images?.href}
                />
              </>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default CheckTool;
