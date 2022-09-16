import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

const Home = () => {
  const [notices, setNotices] = useState([]);
  const [color, setColor] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [numPages, setNumPages] = useState(0);

  useEffect(() => {
    const red = axios.get(`https://ws-public.interpol.int/notices/v1/red`, {
      params: {
        page: currentPage,
      },
    });
    const yellow = axios.get(
      `https://ws-public.interpol.int/notices/v1/yellow`,
      {
        params: {
          page: currentPage,
        },
      }
    );
    axios
      .all([red, yellow])
      .then((...notices) => {
        const arr = [
          ...notices[0][0].data._embedded.notices,
          ...notices[0][1].data._embedded.notices,
        ];
        setNotices(arr);
        setTotal(
          notices[0].reduce((acc, notice) => notice?.data?.total + acc, 0)
        );
        pages();
      })
      .catch((error) => console.log(error));
  }, [currentPage]);

  useEffect(() => {
    axios
      .get(`https://ws-public.interpol.int/notices/v1/${color}`)
      .then((response) => {
        setNotices(response?.data?._embedded?.notices);
        console.log(response?.data?._embedded?.notices);
        console.log(response?.data);
        setTotal(response?.data?.total);
        pages();
      })
      .catch((error) => console.log(error));
  }, [color]);

  console.log(notices);
  console.log(total);

  const pages = () => {
    const pages = total / 40;
    const pagess = Math.ceil(pages);

    setNumPages(pagess);
    console.log(numPages);
  };

  return (
    <div>
      <div className="buttons">
        <button className="btn btn-danger" onClick={() => setColor("red")}>
          Red
        </button>
        <button className="btn btn-warning" onClick={() => setColor("yellow")}>
          Yellow
        </button>
        <div
          className="btn btn-warning"
          style={{ color: "white", fontSize: "1rem", fontWeight: "bold" }}
        >
          Total: {total}
        </div>
      </div>
      <div className="homePage">
        {notices.map((notice, i) => (
          <Card key={i} info={notice} />
        ))}
      </div>
      <div className="pagination p-2">
        <button
          className="btn btn-primary"
          onClick={() => {
            setCurrentPage((prev) => prev - 1);
            console.log(currentPage);
          }}
        >
          backwards
        </button>
        <div className="badge bg-secondary d-grid align-items-center p-3 m-1">
          {currentPage}
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            setCurrentPage((prev) => prev + 1);
            console.log(currentPage);
          }}
        >
          forward
        </button>
      </div>
    </div>
  );
};

export default Home;
