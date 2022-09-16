import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import CheckCard from "./components/checkCard";
import "./checkTool.css";
import Form from "./components/form";

export default function CheckTool() {
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
    <div>
      <h1> This is CHECK TOOL page!</h1>
      <Form />
      <div className="cardsList">
        {redNotices._embedded?.notices.map((item, index) => {
          const { forename, date_of_birth, nationalities, entity_id } = item;
          return (
            <CheckCard
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
            <CheckCard
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
