import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import WantedCardR from "./components/wantedCardR";

export default function MyReports() {
  const [redNotices, setRedNotices] = useState([]);
  const [yellowNotices, setYellowNotices] = useState([]);

  const fetchData = () => {
    const redNoticesURL = "https://ws-public.interpol.int/notices/v1/red";
    const yellowNoticesURL = "https://ws-public.interpol.int/notices/v1/yellow";

    const getRedNotices = axios.get(redNoticesURL);
    const getYellowNotices = axios.get(yellowNoticesURL);

    axios.all([getRedNotices, getYellowNotices]).then(
      axios.spread((...allData) => {
        const allDataRedNotices = allData[0].data;
        const allDataYellowNotices = allData[1].data;

        setRedNotices(allDataRedNotices);
        setYellowNotices(allDataYellowNotices);
        console.log(allDataRedNotices);
        console.log(allDataYellowNotices);
      })
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="home-div">
      <h1> This is MY REPORTS page!</h1>
      <p
        style={{
          backgroundColor: "red",
          width: "200px",
          height: "50px",
          marginLeft: "50px",
          textAlign: "center",
          paddingTop: "15px",
          color: "white",
          borderRadius: "8px",
          marginTop: "20px",
        }}
      >
        My reports:{" "}
      </p>
      <div className="card-div">
        {redNotices._embedded?.notices.map((item, index) => {
          const { forename, date_of_birth, nationalities, entity_id } = item;
          return (
            <WantedCardR
              key={index}
              forename={forename}
              date_of_birth={date_of_birth}
              images={item._links.thumbnail.href}
              nationalities={nationalities}
              detail={entity_id}
            />
          );
        })}
        {yellowNotices._embedded?.notices.map((item, index) => {
          const { forename, date_of_birth, nationalities, entity_id } = item;
          return (
            <WantedCardR
              key={index}
              forename={forename}
              date_of_birth={date_of_birth}
              images={item._links.thumbnail.href}
              nationalities={nationalities}
              detail={entity_id}
            />
          );
        })}
      </div>
    </div>
  );
}
