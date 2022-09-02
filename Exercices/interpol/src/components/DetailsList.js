import axios from "axios";
import React, { useEffect, useState } from "react";
import "./DetailsList.css";
import { HiShieldExclamation } from "react-icons/hi";

const DetailsList = ({ urlDetails }) => {
  const [details, setDetails] = useState({});

  useEffect(() => {
    getAllDetails(`${urlDetails}`);
  }, []);

  const getAllDetails = (urlDetails) => {
    try {
      axios.get(`${urlDetails}`).then((response) => {
        let allDetails = response.data;
        console.log("this is all details:", allDetails);
        setDetails(allDetails);
        return allDetails;
      });
    } catch (error) {
      console.log("Eroare afisare detalii", error);
    }
  };
  const backgroundChange = () => {
    if (urlDetails.indexOf("red") !== -1) return "red";
    else if (urlDetails.indexOf("yellow") !== -1) return "yellow";
  };
  return (
    <div className="container">
      <div className="info">
        <label
          className="notice"
          style={{ backgroundColor: `${backgroundChange()}`, color: "black" }}
        >
          Notice on: {details?.forename} {details?.name}
        </label>
        <div className="details-image">
          <div className="details">
            <div className="detail">
              <label>Eyes color:</label>
              {details?.eyes_colors_id}
            </div>
            <div className="detail">
              <label>Weight:</label>
              {details?.weigth}
            </div>
            <div className="detail">
              <label>Height:</label>
              {details?.height}
            </div>
            <div className="detail">
              <label>Date of birth:</label>
              {details?.date_of_birth}
            </div>
            <div className="detail">
              <label>Country of birth:</label>
              {details?.country_of_birth_id}
            </div>
            <div className="detail">
              <label>Sex:</label>
              {details.sex_id}
            </div>
            <div className="detail">
              <label>Place of birth:</label>
              {details?.place_of_birth}
            </div>
            <div className="detail">
              <label>Nationalities:</label>
              {details.nationalities}
            </div>
          </div>
          <div className="image">
            <img id="img-detail"src={details?._links?.thumbnail?.href} alt="imagine"></img>
          </div>
        </div>
      </div>
      <HiShieldExclamation
        style={{
          color: "red",
          fontSize: "6em",
          marginLeft: "1em",
          marginTop: "-0.25em",
        }}
      />
      <label
        className="warants"
        style={{ backgroundColor: `${backgroundChange()}`, color: "black" }}
      >
        Arrest Warants:
      </label>
      <div className="warants_info">
        {Array.isArray(details.arrest_warrants)
          ? details.arrest_warrants.map((obj, key) => (
              <div key={key}>
                <div className="issuing">
                  Issuing country: {obj.issuing_country_id}
                </div>
                <div className="charge">
                  <label>CHARGE WITH:</label>
                  <br /> {obj.charge}
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default DetailsList;
