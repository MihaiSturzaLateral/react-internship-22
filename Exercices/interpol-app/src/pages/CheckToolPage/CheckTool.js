import { shuffle } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllNoticeFromApi,
  _fetchCheckList,
} from "../../redux/actions/noticeActions";
import "./CheckTool.css";
import CardCheckTool from "./components/CardCheckTool";

const CheckTool = () => {
  const [minAge, setMinAge] = useState(0);
  const [maxAge, setMaxAge] = useState(100);
  const [sex, setSex] = useState("");
  const [forename, setForname] = useState("");
  const [name, setName] = useState("");
  const [nat, setNat] = useState("");
  const [checkedF, setCheckedF] = useState(false);
  const [checkedM, setCheckedM] = useState(false);
  const dataFromStore = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(dataFromStore);

  let colour = "";
  let noticeWarning = "";

  const getColor = (key) => {
    key > 19 ? (colour = "#ff9900") : (colour = "#ff0000");
    key > 19 ? (noticeWarning = "yellow") : (noticeWarning = "red");
    return colour, noticeWarning;
  };

  useEffect(() => {
    getAllNoticeFromApi()(dispatch);
  }, []);

  return (
    <>
      <main className="pageContainer">
        <div className="checkContainer">
          <div className="checkTitleDiv">
            <h1 className="checkTitle">Check Tool</h1>
          </div>
          <div className="inputDiv">
            <h4>First name</h4>
            <div className="detInput">
              <input
                type="text"
                className="formInput"
                onChange={(e) => {
                  setForname(e.target.value);
                }}
              />
            </div>

            <h4>Last name</h4>
            <div className="detInput">
              <input
                type="text"
                className="formInput"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <h4>Nationality</h4>
            <div className="detInput">
              <input
                type="text"
                className="formInput"
                onChange={(e) => {
                  setNat(e.target.value);
                }}
              />
            </div>

            <label htmlFor="customRange1" className="formLabel">
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
            <label htmlFor="customRange1" className="formLabel">
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
            <label className="formLabel">Sex:</label>
            <div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="inlineRadio1"
                  value="F"
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
          </div>
          <div className="searchDiv">
            <button
              className="resetBtn"
              type="button"
              onClick={() => {
                setForname("");
                setName("");
                setNat("");
                setMaxAge(100);
                setMinAge(0);
                setSex("");
                setCheckedF(false);
                setCheckedM(false);
              }}
            >
              Reset
            </button>
            <button
              type="button"
              className="searchBtn"
              onClick={() => {
                dispatch(
                  _fetchCheckList(forename, name, nat, minAge, maxAge, sex)
                );
              }}
            >
              Search
            </button>
          </div>
        </div>
        <div className="searchList">
          <h1 className="resultsTitle">
            RESULTS: {dataFromStore.checkList.length}
          </h1>
          <div className="resultsList">
            {dataFromStore.checkList.map((notice, key) => {
              getColor(key);
              return (
                <CardCheckTool
                  key={key}
                  imgWanted={notice?._links?.thumbnail?.href}
                  forenameWanted={notice?.forename}
                  nameWanted={notice?.name}
                  birthWanted={notice?.date_of_birth}
                  nationalityWanted={notice?.nationalities}
                  url={notice?._links?.self?.href}
                  Color={colour}
                  Warning={noticeWarning}
                  imgDetails={notice?._links?.images?.href}
                />
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default CheckTool;
