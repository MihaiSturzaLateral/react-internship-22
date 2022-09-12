import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { _addMyReports } from "../redux/action";
function NavBar() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nat, setNat] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [noticeColor, setNoticeColor] = useState("");
  const [sex, setSex] = useState("");
  const [date, setDate] = useState("");

  let dispatch = useDispatch();

  return (
    <nav className="navbar bg-dark  ">
      <div className="d-flex justify-content-start align-items-center mobile ">
        <div className="navbar-brand text-danger mobile-title">MostWANTED</div>
        <Link to="/" className="nav-link text-light ms-4">
          Home
        </Link>
        <Link
          to="../pages/CheckTool/CheckTool"
          className="nav-link text-light ms-4"
        >
          Check Tool
        </Link>
      </div>
      <div className="d-flex align-items-center mobile-title">
        <Link
          className="text-light nav-link  "
          to="../pages/MyReports/MyReports"
        >
          My reports
        </Link>
        <button
          type="button"
          className="btn btn-danger ms-4"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Submit Report
        </button>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-danger" id="exampleModalLabel">
                Create
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h4>First name</h4>
              <div className="input-group input-group-sm mb-3">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  value={firstName}
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
                    setLastName(e.target.value);
                  }}
                  value={lastName}
                />
              </div>
              <h4>Date of Birth</h4>
              <div className="input-group input-group-sm mb-3">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="2002/11/09"
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                  value={date}
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
                    placeholder="Example: RO"
                    onChange={(e) => {
                      setNat(e.target.value);
                    }}
                    value={nat}
                  />
                </div>
              </div>
              <div>
                <h4>Img url</h4>
                <div className="input-group input-group-sm mb-3">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={(e) => {
                      setImgUrl(e.target.value);
                    }}
                    value={imgUrl}
                  />
                </div>
              </div>
              <div>
                <h4>Notice color</h4>
                <div className="input-group input-group-sm mb-3">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="red/yellow"
                    onChange={(e) => {
                      setNoticeColor(e.target.value);
                    }}
                    value={noticeColor}
                  />
                </div>
              </div>
              <div>Sex:</div>
              <div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="F"
                    onClick={(e) => {
                      setSex(e.target.value);
                    }}
                    value="F"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    Female
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="M"
                    onClick={(e) => {
                      setSex(e.target.value);
                    }}
                    value="M"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    Male
                  </label>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  _addMyReports({
                    firstName: firstName,
                    lastName: lastName,
                    nationality: nat,
                    imgUrl: imgUrl,
                    noticeColor: noticeColor,
                    date: date,
                    sex: sex,
                  })(dispatch);
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
