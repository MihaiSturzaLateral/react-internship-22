import React from "react";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import { _updateMyReports, _fetchMyReports } from "../../../redux/action";
import { useDispatch } from "react-redux";

function MyReportsCard({
  firstName,
  lastName,
  date,
  nat,
  url,
  sex,
  color,
  id,
}) {
  const [modalIsOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const [firstName_, setFirstName_] = useState("");
  const [lastName_, setLastName_] = useState("");
  const [date_, setDate_] = useState("");
  const [nat_, setNat_] = useState("");
  const [url_, setUrl_] = useState("");
  const [color_, setColor_] = useState("");
  const [display, setDisplay] = useState("false");
  const [reload, setReload] = useState("false");
  useEffect(() => {
    dispatch(
      _fetchMyReports("https://630120369a1035c7f8fe63c1.mockapi.io/interpol")
    );
    setReload("false");
  }, [dispatch, reload]);

  //console.log(id);
  function openModal() {
    setIsOpen(true);
  }
  Modal.setAppElement("#root");
  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  let subtitle;
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "500px",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "15px",
    },
  };

  return (
    <div className="card mt-3" style={{ width: 18 + "rem" }}>
      <img src={url} className="card-img-top" alt="person" />
      <div className="photo-box" style={{ backgroundColor: color }}></div>
      <div className="card-body">
        <h5 className="card-title">
          Full Name:{firstName} {lastName}
        </h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Date of Birth:{date}</li>
        <li className="list-group-item">Sex:{sex}</li>
        <li className="list-group-item">Nationalities:{nat}</li>
      </ul>
      <div className="card-body d-flex justify-content-center">
        <div>
          <button
            className="btn btn-secondary ms-4 "
            onClick={() => {
              openModal();
              setFirstName_(firstName);
              setLastName_(lastName);
              setDate_(date);
              setNat_(nat);
              setUrl_(url);
              setColor_(color);
              setDisplay("false");
            }}
          >
            Edit info
          </button>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h5
              className="modal-title text-danger"
              ref={(_subtitle) => (subtitle = _subtitle)}
            >
              Edit
            </h5>
            <hr></hr>
            <form>
              <div className="modal-body">
                <h4>First name</h4>
                <div className="input-group input-group-sm mb-3">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={(e) => {
                      setFirstName_(e.target.value);
                    }}
                    value={firstName_}
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
                      setLastName_(e.target.value);
                    }}
                    value={lastName_}
                  />
                </div>
                <h4>Date of Birth</h4>
                <div className="input-group input-group-sm mb-3">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={(e) => {
                      setDate_(e.target.value);
                    }}
                    value={date_}
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
                        setNat_(e.target.value);
                      }}
                      value={nat_}
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
                        setUrl_(e.target.value);
                      }}
                      value={url_}
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
                      onChange={(e) => {
                        setColor_(e.target.value);
                      }}
                      value={color_}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                {display === "true" ? (
                  <span className="me-5 text-success">Edit done</span>
                ) : null}
                <button
                  type="button"
                  className="btn btn-secondary me-3"
                  onClick={() => {
                    closeModal();
                  }}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    _updateMyReports(
                      {
                        firstName: firstName_,
                        lastName: lastName_,
                        nat: nat_,
                        url: url_,
                        color: color_,
                        date: date_,
                      },
                      id
                    )(dispatch);
                    setDisplay("true");
                    setReload("true");
                  }}
                >
                  Save
                </button>
              </div>
            </form>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default MyReportsCard;
