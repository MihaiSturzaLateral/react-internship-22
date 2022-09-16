import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { Icon } from "@iconify/react";

const ReportDet = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [person, setPerson] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    axios.get(state?._links?.self?.href).then((response) => {
      setPerson(response.data);
    });
  }, []);
  // useEffect(() => {
  //   axios.get(state?._links?.images?.href).then((res) => {
  //     axios.get(res.data._links.thumbnail.href).then((res) => {
  //       setPhoto(res.data);
  //       console.log(res);
  //     });
  //   });
  // }, []);
  // console.log(photo);
  console.log(person);
  return (
    <div className="personContainer">
      <div className="person-details">
        <div className="btn-container">
          <button onClick={() => navigate(-1)} className="btn btn-danger">
            &#8630; Back
          </button>
          {/* <button className="btn btn-danger mt-2"> */}
          <button
            className={`btn mt-2 btn-${
              person?.arrest_warrants ? "danger" : "warning"
            }`}
          >
            Notice: {person?.name}
          </button>
        </div>
        <div className="identification-details">
          <div className="detail">
            <div className="characteristic">
              <p>Eyes color:</p>
              <span>{person?.eyes_colors_id?.map((color) => color)}</span>
            </div>
            <div className="characteristic">
              <p>Weight:</p>
              <span>{person?.weight} kg</span>
            </div>
            <div className="characteristic">
              <p>Height:</p>
              <span>{person?.height * 100} cm</span>
            </div>
            <div className="characteristic">
              <p>Date of birth:</p>
              <span>{person?.date_of_birth}</span>
            </div>
            <div className="characteristic">
              <p>Country of birth:</p>
              <span>{person?.country_of_birth_id}</span>
            </div>
            <div className="characteristic">
              <p>Sex:</p>
              <span>{person?.sex_id}</span>
            </div>
            <div className="characteristic">
              <p>Place of birth:</p>
              <span>{person?.place_of_birth}</span>
            </div>
            <div className="characteristic">
              <p>Nationalities:</p>
              <span
                className={`fi fi-${person?.nationalities?.[0].toLowerCase()} fis`}
              ></span>
            </div>
          </div>
          <div className="img-container">
            <img
              className="photo"
              src={person?._links?.thumbnail?.href}
              alt="mug-shot"
            />
          </div>
        </div>
      </div>
      <div className="warrants">
        <div className="exclamation-title d-flex align-items-centers">
          <Icon
            icon="bi:exclamation-square"
            style={{ fontSize: "2rem", color: "red" }}
          />
          <button className="btn btn-danger">Arrest warrants:</button>
        </div>
        <div className="warant">
          <div className="issuing-country">
            <h4>
              Issuing Country:{" "}
              <span
                className={`fi fi-${person?.nationalities?.[0].toLowerCase()} fis`}
              ></span>{" "}
              <span className="warrant-nationality">
                {person?.nationalities}
              </span>
            </h4>
          </div>
          <div className="container-warrant">
            <h3>Charge with:</h3>
            <p>{person?.arrest_warrants?.map((warrant) => warrant.charge)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportDet;
