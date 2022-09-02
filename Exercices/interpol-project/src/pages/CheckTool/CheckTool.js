import React from "react";
import NavBar from "../../components/NavBar";
import CardCheck from "./components/CardCheckTool";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { _fetchCheckList } from "../../redux/action";
function CheckTool() {
  const [minAge, setMinAge] = useState(0);
  const [maxAge, setMaxAge] = useState(0);
  const [sex, setSex] = useState("");
  const [forname, setForname] = useState("");
  const [name, setName] = useState("");
  const [nat, setNat] = useState("");
  const { checkList } = useSelector((state) => ({ ...state.data }));
  const dispatch = useDispatch();
  // console.log(sex);
  console.log(checkList);
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
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            <h4>Nationality</h4>
            <div className="input-group input-group-sm mb-3">
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                onChange={(e) => {
                  setNat(e.target.value);
                }}
              />
            </div>
          </div>
          <label htmlFor="customRange1" className="form-label">
            Min Age: {minAge}
          </label>
          <input
            type="range"
            className="form-range"
            id="minAge"
            min={0}
            step={1}
            onChange={(e) => {
              setMinAge(e.target.value);
            }}
          ></input>
          <label htmlFor="customRange1" className="form-label">
            Max Age: {maxAge}
          </label>
          <input
            type="range"
            className="form-range"
            id="maxAge"
            min={0}
            step={1}
            onChange={(e) => {
              setMaxAge(e.target.value);
            }}
          ></input>
          <div>Sex:</div>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="inlineRadio1"
                value="F"
                onClick={(e) => {
                  setSex(e.target.value);
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
                onClick={(e) => {
                  setSex(e.target.value);
                }}
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Male
              </label>
            </div>
          </div>
          <hr></hr>
          <div className="d-flex justify-content-end ">
            <button
              type="button"
              className="btn btn-danger"
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
          <div className="lsit">
            {checkList.map((e) => {
              return (
                <CardCheck
                  key={e.entity_id}
                  forname={e.forename}
                  name={e.name}
                  nat={e.nationalities}
                  date={e.date_of_birth}
                  url={e._links?.thumbnail?.href}
                  detUrl={e.entity_id}
                />
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

export default CheckTool;