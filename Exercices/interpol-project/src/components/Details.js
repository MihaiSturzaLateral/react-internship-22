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
  // console.log(personDet);
  return (
    <>
      <NavBar />
      <div className="container-sm">
        <div className="details-head">
          <Link type="button" to="/" className="btn btn-danger">
            Back
          </Link>
          <div
            className="details-notice"
            style={{ backgroundColor: data.color }}
          >
            Red Notice:{personDet.forename}
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
              className="img-fluid dt-img"
              alt="person"
            ></img>
          </div>
        </div>
        <div className="container-sm dt-bottom">
          <div className="btn btn-danger mb-3">Arrest warants:</div>
          <div className="dt-bottom-det">
            {personDet.arrest_warrants?.map((e) => {
              return (
                <>
                  <span>Issuing country:{e.issuing_country_id}</span>
                  <hr></hr>
                  <h3 className="text-danger">CHARGE WITH:</h3>
                  <p className="text-danger">{e.charge}</p>
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
