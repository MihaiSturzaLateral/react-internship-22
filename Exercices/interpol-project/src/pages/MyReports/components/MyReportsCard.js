import React from "react";
import Popup from "./Popup";
import { useState } from "react";
function MyReportsCard({ fullname, date, nat, url, sex, color }) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="card mt-3" style={{ width: 18 + "rem" }}>
      <img src={url} className="card-img-top" alt="person" />
      <div className="photo-box" style={{ backgroundColor: color }}></div>
      <div className="card-body">
        <h5 className="card-title">Full Name:{fullname}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Date of Birth:{date}</li>
        <li className="list-group-item">Sex:{sex}</li>
        <li className="list-group-item">Nationalities:{nat}</li>
      </ul>
      <div className="card-body d-flex justify-content-center">
        <button className="btn btn-secondary" onClick={() => togglePopup()}>
          Edit info
        </button>
        {isOpen && (
          <Popup
            content={
              <div className="check-tool">
                <h1 className="text-danger">Create/Edit</h1>
                <hr></hr>
                <h4>First name</h4>
                <div className="input-group input-group-sm mb-3">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>

                <h4>Last name</h4>
                <div className="input-group input-group-sm mb-3">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
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
                    />
                  </div>
                </div>
                <div>
                  <h4>Img Url</h4>
                  <div className="input-group input-group-sm mb-3">
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
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
                    />
                  </div>
                </div>
                <div>Sex:</div>
                <div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      nameName="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label className="form-check-label" for="inlineRadio1">
                      Female
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label className="form-check-label" for="inlineRadio2">
                      Male
                    </label>
                  </div>
                </div>
                <hr></hr>
                <div className="d-flex justify-content-end ">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      togglePopup();
                    }}
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-danger">
                    Save
                  </button>
                </div>
              </div>
            }
          />
        )}
      </div>
    </div>
  );
}

export default MyReportsCard;
