import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPersonDetails } from "../redux/action";
function Details() {
  const location = useLocation();
  const data = location.state;
  const id = data.detUrl.replace("/", "-");
  // console.log(data.color);
  // console.log(id);
  const { personDet } = useSelector((state) => ({ ...state.data }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchPersonDetails(
        `https://ws-public.interpol.int/notices/v1/${data.color}/${id}`
      )
    );
  }, [dispatch, data.color, id]);
  //console.log(personDet);
  return (
    <>
      <NavBar />
      <div className="container-sm">
        <div className="details-head">
          <Link
            type="button"
            to="/"
            className="btn"
            style={{ backgroundColor: data.color }}
          >
            Back
          </Link>
          <div
            className="details-notice"
            style={{ backgroundColor: data.color }}
          >
            {data.color.toUpperCase()} Notice:{personDet.forename}
          </div>
        </div>
        <div className="table-img d-flex ">
          <div className="details-table">
            <span className="dt">Eyes color:</span>
            <span className="dt-det">{personDet.eyes_colors_id}</span>
            <hr></hr>
            <span className="dt">Weight:</span>
            <span className="dt-det">{personDet.weight}</span>
            <hr></hr>
            <span className="dt">Height:</span>
            <span className="dt-det">{personDet.height}</span>
            <hr></hr>
            <span className="dt">Date of birth:</span>
            <span className="dt-det">{personDet.date_of_birth}</span>
            <hr></hr>
            <span className="dt">Country of birth:</span>
            <span className="dt-det">{personDet.country_of_birth_id}</span>
            <hr></hr>
            <span className="dt">Sex:</span>
            <span className="dt-det">{personDet.sex_id}</span>
            <hr></hr>
            <span className="dt">Place of birth:</span>
            <span className="dt-det">{personDet.place_of_birth}</span>
            <hr></hr>
            <span className="dt">Nationalities:</span>
            <span className="dt-det">{personDet.nationalities}</span>
          </div>
          <div>
            <img
              src={personDet._links?.thumbnail?.href}
              className=" dt-img img"
              alt="person"
              width="400"
              height="500"
            ></img>
          </div>
        </div>
        <div className="container-sm dt-bottom">
          <div className="btn mb-3" style={{ backgroundColor: data.color }}>
            Arrest warants:
          </div>
          <div className="dt-bottom-det" style={{ borderColor: data.color }}>
            {personDet.arrest_warrants?.map((e) => {
              return (
                <>
                  <span>
                    <span className="fw-bold"> Issuing country: </span>
                    {e.issuing_country_id}
                  </span>
                  <hr></hr>
                  <h3 className="text" style={{ color: data.color }}>
                    CHARGE WITH:
                  </h3>
                  <p className="text" style={{ color: data.color }}>
                    {e.charge}
                  </p>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
