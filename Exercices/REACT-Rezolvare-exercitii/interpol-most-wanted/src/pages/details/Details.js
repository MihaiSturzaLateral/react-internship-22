import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useLocation } from "react-router-dom";
import Image from "./img/icon-back.png";
import Image2 from "./img/exclm.png";
export default function Details() {
  const [data, setData] = useState({});
  const location = useLocation();
  //console.log(location);
  const detail = location.state;
  const str1 = detail.substring(0, 4);
  const str2 = detail.slice(-5);
  const separator = [str1, str2].join("-");
  console.log(separator);
  useEffect(() => {
    axios
      .get(`https://ws-public.interpol.int/notices/v1/red/${separator}`)

      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [separator]);
  console.log(data);
  useEffect(() => {
    axios
      .get(`https://ws-public.interpol.int/notices/v1/yellow/${separator}`)

      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [separator]);
  console.log(data);

  const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

  return (
    <div>
      <div className="buton">
        <NavLink to="/">
          <p
            style={{
              color: "#ff3737",
              fontSize: "18px",
              marginTop: "25px",
              marginLeft: "5%",
            }}
          >
            <img src={Image} style={{ height: "40px" }} alt="."></img>
            <b style={{ textDecorationLine: "underline" }}>BACK</b>
          </p>
        </NavLink>
      </div>
      <p
        style={{
          backgroundColor: "#db2843",
          width: "300px",
          borderRadius: "5px",
          paddingLeft: "2%",
          height: "40px",
          color: "white",
          paddingTop: "10px",
          marginLeft: "20%",
          marginTop: "20px",
        }}
      >
        Red Notice on: {data?.forename}
      </p>
      <div className="tabel-div">
        <table
          style={{
            marginLeft: "20%",
            marginTop: "1%",
          }}
        >
          <tbody>
            <tr>
              <td style={{ fontSize: "19px", border: "1px solid #ececec" }}>
                Eyes color:
              </td>
              <td
                style={{
                  color: "#41464a",
                  backgroundColor: "#e2e3e5",
                  borderRadius: "5px",
                  width: "200px",
                  paddingLeft: "20%",
                  fontSize: "15px",
                }}
              >
                {data?.eyes_colors_id}
              </td>
            </tr>
            <tr>
              <td style={{ fontSize: "19px", border: "1px solid #ececec" }}>
                Weight:
              </td>
              <td
                style={{
                  color: "#41464a",
                  backgroundColor: "#e2e3e5",
                  borderRadius: "5px",
                  width: "200px",
                  paddingLeft: "20%",
                  fontSize: "15px",
                }}
              >
                {data?.weight} kg
              </td>
            </tr>
            <tr>
              <td style={{ fontSize: "19px", border: "1px solid #ececec" }}>
                Height:
              </td>
              <td
                style={{
                  color: "#41464a",
                  backgroundColor: "#e2e3e5",
                  borderRadius: "5px",
                  width: "200px",
                  paddingLeft: "20%",
                  fontSize: "15px",
                }}
              >
                {data?.height}cm
              </td>
            </tr>
            <tr>
              <td style={{ fontSize: "19px", border: "1px solid #ececec" }}>
                Date of birth:
              </td>
              <td
                style={{
                  color: "#41464a",
                  backgroundColor: "#e2e3e5",
                  borderRadius: "5px",
                  width: "200px",
                  paddingLeft: "20%",
                  fontSize: "15px",
                }}
              >
                {data?.date_of_birth}
              </td>
            </tr>
            <tr>
              <td style={{ fontSize: "19px", border: "1px solid #ececec" }}>
                Country of birth:
              </td>
              <td
                style={{
                  color: "#41464a",
                  backgroundColor: "#e2e3e5",
                  borderRadius: "5px",
                  width: "200px",
                  paddingLeft: "20%",
                  fontSize: "15px",
                }}
              >
                {data?.country_of_birth_id}
              </td>
            </tr>
            <tr>
              <td style={{ fontSize: "19px", border: "1px solid #ececec" }}>
                Sex:
              </td>
              <td
                style={{
                  color: "#41464a",
                  backgroundColor: "#e2e3e5",
                  borderRadius: "5px",
                  width: "200px",
                  paddingLeft: "20%",
                  fontSize: "15px",
                }}
              >
                {data?.sex_id}
              </td>
            </tr>
            <tr>
              <td style={{ fontSize: "19px", border: "1px solid #ececec" }}>
                Place of birth:
              </td>
              <td
                style={{
                  color: "#41464a",
                  backgroundColor: "#e2e3e5",
                  borderRadius: "5px",
                  width: "200px",
                  paddingLeft: "20%",
                  fontSize: "15px",
                }}
              >
                {data?.place_of_birth}
              </td>
            </tr>
            <tr>
              <td style={{ fontSize: "19px", border: "1px solid #ececec" }}>
                Nationalities:
              </td>
              <td
                style={{
                  color: "#41464a",
                  backgroundColor: "#e2e3e5",
                  borderRadius: "5px",
                  width: "200px",
                  paddingLeft: "20%",
                  fontSize: "15px",
                }}
              >
                {data?.nationalities}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <p
          style={{
            backgroundColor: "#db2843",
            width: "160px",
            borderRadius: "5px",
            paddingLeft: "2%",
            height: "40px",
            color: "white",
            paddingTop: "10px",
            marginLeft: "20%",
          }}
        >
          <img
            src={Image2}
            style={{
              position: "absolute",
              backgroundColor: "transparent",
              marginLeft: "-100px",
              marginTop: "-20px",
            }}
            alt="."
          ></img>
          Arrest warants:
        </p>
      </div>
      <div
        className="warrant"
        style={{
          width: "500px",
          borderRadius: "5px",
          paddingLeft: "2%",
          height: "40px",
          paddingTop: "10px",
          marginLeft: "18%",
          marginTop: "10px",
        }}
      >
        {data.arrest_warrants?.map((el) => {
          return (
            <div
              style={{
                border: "1px solid #db2843",
                borderRadius: "5px",
                padding: "10px",
              }}
            >
              {" "}
              <p
                style={{
                  color: "#6c767d",
                  textDecoration: "underline 1px #db2843",
                }}
              >
                Issuing country:
                <img
                  className="flag-country"
                  src={`https://flagcdn.com/48x36/${el.issuing_country_id.toLowerCase()}.png`}
                  alt="..."
                />
                <br></br>
              </p>
              <p style={{ color: "#db2843" }}>
                <b style={{ fontSize: "20px" }}>CHARGE WITH: </b>
                {el.charge}
              </p>
            </div>
          );
        })}
      </div>
      <img
        style={{
          position: "absolute",
          marginLeft: "800px",
          marginTop: "-19%",
          height: "200px",
        }}
        src={data?._links?.thumbnail.href}
      ></img>
    </div>
  );
}

/* {regionNames.of(data?.country_of_birth_id)} */
