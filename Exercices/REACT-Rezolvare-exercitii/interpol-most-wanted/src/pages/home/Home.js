import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import WantedCard from "./components/wantedCard";
import "./home.css";

export default function Home() {
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
      <div className="buttons">
        <button
          className="redB"
          onClick={() =>
            setRedNotices(
              <div>
                {redNotices._embedded?.notices.map((item, index) => {
                  const { forename, date_of_birth, nationalities, entity_id } =
                    item;
                  return (
                    <WantedCard
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
            )
          }
        >
          Red Notices
        </button>
        <button
          className="yellowB"
          onClick={() =>
            setYellowNotices(
              <div>
                {yellowNotices._embedded?.notices.map((item, index) => {
                  const { forename, date_of_birth, nationalities, entity_id } =
                    item;
                  return (
                    <WantedCard
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
            )
          }
        >
          Yellow Notices
        </button>
      </div>
      <p className="total-wanted">
        Total Wanted:{" "}
        <b style={{ color: "#6c757d", fontSize: "20px" }}>
          {redNotices._embedded?.notices.length +
            yellowNotices._embedded?.notices.length}
        </b>
      </p>
      <div className="card-div">
        {redNotices._embedded?.notices.map((item, index) => {
          const { forename, date_of_birth, nationalities, entity_id } = item;
          return (
            <WantedCard
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
            <WantedCard
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
