import axios from "axios";
import React from "react";
import { useState } from "react";
import CheckCard from "../components/CheckCard";

const CheckTools = () => {
  const [notices, setNotices] = useState([]);
  const [foreName, setForeName] = useState("");
  const [name, setName] = useState("");
  const [nationality, setNationality] = useState("");
  const [ageMin, setAgeMin] = useState("");
  const [ageMax, setAgeMax] = useState("");
  const [sexId, setSexId] = useState("");

  const onSearch = (foreName, name, nationality, ageMax, ageMin, sexId) => {
    console.log(
      `https://ws-public.interpol.int/notices/v1/red?forename=${foreName}&name=${name}&nationality=${nationality}&ageMax=${ageMax}&ageMin=${ageMin}&sexId=${sexId}`
    );
    const red = axios
      .get(
        `https://ws-public.interpol.int/notices/v1/red?forename=${foreName}&name=${name}&nationality=${nationality}&ageMax=${ageMax}&ageMin=${ageMin}&sexId=${sexId}`
      )
      .then((res) => setNotices([res?.data?._embedded?.notices[0]]));
    const yellow = axios.get(
      `https://ws-public.interpol.int/notices/v1/yellow?forename=${foreName}&name=${name}&nationality=${nationality}&ageMax=${ageMax}&ageMin=${ageMin}&sexId=${sexId}`
    );
    // .then((res) => setNotices([res?.data?._embedded?.notices[0]]));
    // axios
    //   .all([red, yellow])
    //   .then(
    //     axios.spread((...notices) => {
    //       // axios.spread((notices) => {
    //       console.log("this is notices", notices);
    //       const arr = [
    //         ...notices[0].data._embedded.notices,
    //         ...notices[1].data._embedded.notices,
    //       ];
    //       setNotices(arr);
    //       console.log(...notices);
    //     })
    //   )
    //   .catch((error) => console.log(error));
  };

  return (
    <div className="check-tool-mother-container">
      <div className="filters-container">
        <div className="check-tool-title">
          <h4>Check Tool</h4>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
          ></button>
        </div>
        <div className="first-name">
          <label>First name</label>
          <input type="text" onChange={(e) => setForeName(e.target.value)} />
        </div>
        <div className="last-name">
          <label>Last name</label>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="nationality-container">
          <h5>Nationality:</h5>
          <input
            value={nationality}
            placeholder="Enter country code"
            onChange={(e) => setNationality(e.target.value)}
          />
        </div>
        <div className="slide-container">
          <div className="min-age">
            <label htmlFor="min-age">Min age</label>
            <input
              type="range"
              min="1"
              max="100"
              value={ageMin}
              className="slider"
              id="min-age"
              onChange={(e) => setAgeMin(e.target.value)}
            />
          </div>
          <div className="max-age">
            <label htmlFor="max-age">Min age</label>
            <input
              type="range"
              min="1"
              max="100"
              value={ageMax}
              className="slider"
              id="max-age"
              onChange={(e) => setAgeMax(e.target.value)}
            />
          </div>
        </div>
        <div className="sex">
          <h5>Sex:</h5>
          <div className="female">
            <input
              type="radio"
              id="female"
              name="Female"
              value="female"
              onClick={() => setSexId("F")}
            ></input>
            <label htmlFor="female">Female</label>
          </div>
          <div className="male">
            <input
              type="radio"
              id="male"
              name="Male"
              value="male"
              onClick={() => setSexId("M")}
            ></input>
            <label htmlFor="male">Male</label>
          </div>
        </div>
        <div className="search-btn">
          <button
            onClick={() => {
              onSearch(foreName, name, nationality, ageMax, ageMin, sexId);
              console.log(
                "foreName",
                foreName,
                "name",
                name,
                "nationality",
                nationality,
                "ageMax",
                ageMax,
                "ageMin",
                ageMin,
                "sexiD",
                sexId
              );
            }}
            className="btn"
          >
            Search
          </button>
        </div>
      </div>
      <div className="card-container">
        <div className="results">
          <h3>RESULTS: {}</h3>
        </div>
        <div className="check-card-container">
          {notices.map((notices, i) => (
            <CheckCard key={i} info={notices} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckTools;
