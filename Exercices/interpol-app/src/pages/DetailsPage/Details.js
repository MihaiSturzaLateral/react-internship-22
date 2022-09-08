import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import LabelType from "./components/LabelType";
import LabelValue from "./components/LabelValue";
import ImageSlider from "./components/ImageSlider";
import "./Details.css";
import { getDetailsFromApi } from "../../redux/actions/noticeActions";
import { useDispatch, useSelector } from "react-redux";

const Details = () => {
  const dispatch = useDispatch();
  const dataFromStore = useSelector((state) => state);
  console.log("redux:", dataFromStore);
  const location = useLocation();
  const { url, Warning } = location.state;

  useEffect(() => {
    getDetailsFromApi(url)(dispatch);
  }, []);

  return (
    <div className="detailsContainer">
      <div className="divTop">
        <div className="backDiv">
          <Link to="/">
            {Warning === "red" ? (
              <button
                className="backBtn"
                style={{ backgroundColor: "#ff0000", borderColor: "#ff0000" }}
              >
                Back
              </button>
            ) : (
              <button
                className="backBtn"
                style={{ backgroundColor: "#ff9900" }}
              >
                Back
              </button>
            )}
          </Link>
        </div>
        <div className="detailsDiv">
          <div className="divLeft">
            <div className="name">
              {Warning === "red" ? (
                <label
                  className="nameLabel"
                  style={{ backgroundColor: "#ff0000" }}
                >
                  {dataFromStore?.details?.forename}{" "}
                  {dataFromStore?.details?.name}
                </label>
              ) : (
                <label
                  className="nameLabel"
                  style={{ backgroundColor: "#ff9900" }}
                >
                  {dataFromStore?.details?.forename}{" "}
                  {dataFromStore?.details?.name}
                </label>
              )}
            </div>
            <div className="lists">
              <div className="listType">
                <LabelType title="Eyes color: " />
                <LabelType title="Weight: " />
                <LabelType title="Height: " />
                <LabelType title="Date of birth: " />
                <LabelType title="Country of birth: " />
                <LabelType title="Sex: " />
                <LabelType title="Place of birth: " />
                <LabelType title="Nationalities: " />
              </div>
              <div className="listValues">
                <LabelValue content={dataFromStore?.details?.eyes_colors_id} />
                <LabelValue content={dataFromStore?.details?.weight} />
                <LabelValue content={dataFromStore?.details?.height} />
                <LabelValue content={dataFromStore?.details?.date_of_birth} />
                <LabelValue
                  content={dataFromStore?.details?.country_of_birth_id}
                />
                <LabelValue content={dataFromStore?.details?.sex_id} />
                <LabelValue content={dataFromStore?.details?.place_of_birth} />
                <LabelValue content={dataFromStore?.details?.nationalities} />
              </div>
            </div>
          </div>
          <div className="divRight">
            <ImageSlider />
            {/*
            pasez url cu poza catre componenta si il afisez acolo
            */}
          </div>
        </div>
      </div>
      {Warning === "red" ? (
        <div className="divBot">
          <div className="warrantAlert">
            <label className="warrantLabel">Arrest warants: </label>
          </div>
          <div className="warrantDetail">
            {dataFromStore?.details?.arrest_warrants?.map((warrant, key) => {
              return (
                <div id={key}>
                  <div className="warrantCountry">
                    <label>
                      Issuing country: {warrant?.issuing_country_id}
                    </label>
                  </div>
                  <div className="warrantCharge">
                    <h3>CHARGE WITH: </h3>
                    <p>{warrant?.charge}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="spaceDiv"></div>
      )}
    </div>
  );
};

export default Details;
