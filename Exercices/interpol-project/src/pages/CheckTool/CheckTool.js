import React from "react";
import NavBar from "../../components/NavBar";
import CardCheck from "./components/CardCheckTool";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { _fetchCheckList } from "../../redux/action";
import Footer from "../../components/Footer";
function CheckTool() {
  const [minAge, setMinAge] = useState(0);
  const [maxAge, setMaxAge] = useState(0);
  const [sex, setSex] = useState("");
  const [forname, setForname] = useState("");
  const [name, setName] = useState("");
  const [nat, setNat] = useState("");
  const [checkedF, setCheckedF] = useState(false);
  const [checkedM, setCheckedM] = useState(false);
  const { checkList, arrLen } = useSelector((state) => ({ ...state.data }));
  const dispatch = useDispatch();
  // console.log(sex);
  // console.log("ArrLen", arrLen);
  // console.log(checkList);
  let color;
  let i = 0;
  return (
    <>
      <NavBar />
      <main className="container-sm d-flex justify-content-between mt-5">
        <div className="check-tool">
          <h1 className="text-danger">Check Tool</h1>
          <hr></hr>
          <h4>First name</h4>
          <div className="input-group input-group-sm mb-3">
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              value={forname}
              onChange={(e) => {
                setForname(e.target.value);
              }}
            />
          </div>

          <h4>Last name</h4>
          <div className="input-group input-group-sm mb-3">
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="d-flex">
            <h4>Nationality: </h4>
            <div className=" input-group-sm mb-3 ms-3">
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="Example input: RO"
                value={nat}
                onChange={(e) => {
                  setNat(e.target.value);
                }}
                style={{ width: "150px" }}
              />
            </div>
          </div>
          <div className="d-flex">
            <div className="ms-3">
              <label htmlFor="customRange1" className="form-label">
                Min Age: {minAge}
              </label>
              <input
                type="range"
                className="form-range"
                id="minAge"
                style={{ width: "150px" }}
                min={0}
                step={1}
                value={minAge}
                onChange={(e) => {
                  setMinAge(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <label htmlFor="customRange1" className="form-label">
                Max Age: {maxAge}
              </label>
              <input
                type="range"
                className="form-range"
                id="maxAge"
                style={{ width: "150px" }}
                min={0}
                step={1}
                value={maxAge}
                onChange={(e) => {
                  setMaxAge(e.target.value);
                }}
              ></input>
            </div>
          </div>
          <h4>Sex:</h4>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="inlineRadio1"
                value="F"
                checked={checkedF}
                onClick={(e) => {
                  setSex(e.target.value);
                  setCheckedF(!checkedF);
                }}
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Female
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="inlineRadio2"
                value="M"
                checked={checkedM}
                onClick={(e) => {
                  setSex(e.target.value);
                  setCheckedM(!checkedM);
                }}
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Male
              </label>
            </div>
          </div>
          <hr></hr>
          <div className="d-flex ">
            <button
              type="button"
              className="btn btn-warning ms-3"
              onClick={() => {
                setForname("");
                setName("");
                setMaxAge(0);
                setMinAge(0);
                setSex("");
                setNat("");
                setCheckedF(false);
                setCheckedM(false);
              }}
            >
              Reset
            </button>
            <button
              type="button"
              className="btn btn-danger ms-3"
              onClick={() => {
                dispatch(
                  _fetchCheckList(forname, name, nat, minAge, maxAge, sex)
                );
              }}
            >
              Search
            </button>
          </div>
        </div>
        <div className="person-list">
          <h1 className="mb-5 bg-danger text-light">
            RESULTS:{checkList.length}
          </h1>
          <div className="list">
            {checkList.map((e) => {
              i <= arrLen ? (color = "red") : (color = "yellow");
              i++;
              return (
                <CardCheck
                  key={e.entity_id}
                  forname={e.forename}
                  name={e.name}
                  nat={e.nationalities}
                  date={e.date_of_birth}
                  url={e._links?.thumbnail?.href}
                  detUrl={e.entity_id}
                  color={color}
                />
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default CheckTool;
