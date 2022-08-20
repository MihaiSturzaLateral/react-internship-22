import React from "react";
import { useNavigate, Link } from "react-router-dom";

const ListComponent = ({ id, mag, title, detail }) => {
  const navigate = useNavigate();

  if (mag >= 1.0 && mag < 2.5) {
    return (
      <>
        <ul className="ulListComponent">
          <li className="liListComponent" key={id}>
            <span
              style={{
                width: "auto",
                height: "auto",
                borderRadius: "60%",
                textAlign: "center",
                backgroundColor: "green",
                padding: "8px",
                margin: "10px 10px 10px 0px",
              }}
            >
              {mag}
            </span>
            <span>{title}</span>
            <button
              style={{
                backgroundColor: "green",
                textAlign: "center",
                padding: "5px",
                borderRadius: "8px",
                border: "none",
                float: "right",
                marginTop: "10px",
              }}
              onClick={() => navigate("/DetailsPage", { state: detail })}
            >
              View Details
            </button>
          </li>
        </ul>
      </>
    );
  } else if (mag >= 2.5 && mag < 4.5)
    return (
      <>
        <ul className="ulListComponent">
          <li className="liListComponent" key={id}>
            <span
              style={{
                width: "auto",
                height: "auto",
                borderRadius: "60%",
                textAlign: "center",
                backgroundColor: "orange",
                padding: "8px",
                margin: "10px 10px 10px 0px",
              }}
            >
              {mag}
            </span>
            <span>{title}</span>
            <button
              style={{
                backgroundColor: "orange",
                textAlign: "center",
                padding: "5px",
                borderRadius: "8px",
                border: "none",
                float: "right",
                marginTop: "10px",
              }}
              onClick={() => navigate("/DetailsPage", { state: detail })}
            >
              View Details
            </button>
          </li>
        </ul>
      </>
    );
  else if (mag >= 4.5)
    return (
      <>
        <ul className="ulListComponent">
          <li className="liListComponent" key={id}>
            <span
              style={{
                width: "auto",
                height: "auto",
                borderRadius: "60%",
                textAlign: "center",
                backgroundColor: "red",
                padding: "10px",
                margin: "10px 10px 10px 0px",
              }}
            >
              {mag}
            </span>
            <span>{title}</span>
            <button
              style={{
                backgroundColor: "red",
                textAlign: "center",
                padding: "5px",
                borderRadius: "8px",
                border: "none",
                float: "right",
                marginTop: "10px",
              }}
              onClick={() => navigate("/DetailsPage", { state: detail })}
            >
              View Details
            </button>
          </li>
        </ul>
      </>
    );
};
export default ListComponent;
