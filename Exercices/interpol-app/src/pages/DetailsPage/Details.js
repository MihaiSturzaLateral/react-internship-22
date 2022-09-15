import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import LabelType from "./components/LabelType";
import LabelValue from "./components/LabelValue";
import ImageSlider from "./components/ImageSlider";
import "./Details.css";
import { getDetailsFromApi } from "../../redux/actions/noticeActions";
import { useDispatch, useSelector } from "react-redux";
import FlagDetails from "./components/FlagDetails";
import FlagWarrant from "./components/FlagWarrant";
import { cName } from "countries-name";
import LangDet from "./components/LangDet";

const Details = () => {
  const dispatch = useDispatch();
  const dataFromStore = useSelector((state) => state);
  // console.log("redux:", dataFromStore);
  const location = useLocation();
  const { url, Warning } = location.state;

  useEffect(() => {
    getDetailsFromApi(url)(dispatch);
  }, []);

  console.log(dataFromStore?.details);

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
                  Red Notice on: {dataFromStore?.details?.forename}{" "}
                  {dataFromStore?.details?.name}
                </label>
              ) : (
                <label
                  className="nameLabel"
                  style={{ backgroundColor: "#ff9900" }}
                >
                  Yellow Notice on: {dataFromStore?.details?.forename}{" "}
                  {dataFromStore?.details?.name}
                </label>
              )}
            </div>
            <div className="lists">
              <div className="listType">
                <LabelType title="Eyes color: " />

                <LabelType title="Hair color: " />

                <LabelType title="Weight: " />
                <LabelType title="Height: " />
                <LabelType title="Date of birth: " />
                <LabelType title="Country of birth: " />
                <LabelType title="Sex: " />
                <LabelType title="Place of birth: " />
                <LabelType title="Nationalities: " />

                <LabelType title="Languages Spoken: " />
                <LabelType title="Distinguishing Marks: " />
                <LabelType title="Place of event: " />
                <LabelType title="Date of event: " />
              </div>
              <div className="listValues">
                <LabelValue
                  content={
                    dataFromStore?.details?.eyes_colors_id === "BRO"
                      ? "Brown"
                      : dataFromStore?.details?.eyes_colors_id === "BLA"
                      ? "Black"
                      : dataFromStore?.details?.eyes_colors_id === "GRE"
                      ? "Green"
                      : dataFromStore?.details?.eyes_colors_id === "BLU"
                      ? "Blue"
                      : "unknown"
                  }
                />

                <LabelValue
                  content={
                    dataFromStore?.details?.hairs_id === "BRO"
                      ? "Brown"
                      : dataFromStore?.details?.hairs_id === "BLA"
                      ? "Black"
                      : dataFromStore?.details?.hairs_id === "BLO"
                      ? "Blonde"
                      : dataFromStore?.details?.hairs_id === "RED"
                      ? "Red"
                      : "unknown"
                  }
                />

                <LabelValue
                  content={
                    dataFromStore?.details?.weight === null
                      ? "unknown"
                      : `${dataFromStore?.details?.weight} kg`
                  }
                />
                <LabelValue
                  content={
                    dataFromStore?.details?.height === null
                      ? "unknown"
                      : `${dataFromStore?.details?.height} m`
                  }
                />
                <LabelValue content={dataFromStore?.details?.date_of_birth} />
                <LabelValue
                  content={cName(dataFromStore?.details?.country_of_birth_id)}
                />
                <LabelValue
                  content={
                    dataFromStore?.details?.sex_id === "M"
                      ? "Male"
                      : dataFromStore?.details?.sex_id === "F"
                      ? "Female"
                      : "unknown"
                  }
                />
                <LabelValue content={dataFromStore?.details?.place_of_birth} />
                <FlagDetails content={dataFromStore?.details?.nationalities} />

                <LangDet
                  content={dataFromStore?.details?.languages_spoken_ids}
                />
                <LabelValue
                  content={dataFromStore?.details?.distinguishing_marks}
                />
                <LabelValue content={dataFromStore?.details?.place} />
                <LabelValue content={dataFromStore?.details?.date_of_event} />
              </div>
            </div>
          </div>
          <div className="divRight">
            <ImageSlider />
          </div>
        </div>
      </div>
      {Warning === "red" ? (
        <div className="divBot">
          <div className="warrantAlert">
            <label className="warrantLabel">Arrest warants: </label>
          </div>

          {dataFromStore?.details?.arrest_warrants?.map((warrant, key) => {
            return (
              <div className="warrantDetail" id={key}>
                <div className="warrantTop">
                  <label className="warrantCountryTitle">
                    Issuing Country:
                  </label>
                  <FlagWarrant warrantDet={warrant?.issuing_country_id} />
                </div>
                <div className="warrantCharge">
                  <h2 className="warrantChargeTitle">CHARGED WITH: </h2>
                  <p className="warrantChargeText">{warrant?.charge}</p>
                </div>
              </div>
            );
          })}
          <div className="redNoticeDiv">
            <img className="redNoticeImg" src="RedNotice.jpg" alt="" />
            <label className="redNoticeText">
              Red Notices are issued for fugitives wanted either for prosecution
              or to serve a sentence. A Red Notice is a request to law
              enforcement worldwide to locate and provisionally arrest a person
              pending extradition, surrender, or similar legal action.
            </label>
          </div>
        </div>
      ) : (
        <div className="yellowNoticeDiv">
          <img className="yellowNoticeImg" src="YellowNotice.jpg" alt="" />
          <label className="yellowNoticeText">
            Yellow notices are issued to help locate missing persons, often
            minors, or to help identify persons who are unable to identify
            themselves.
          </label>
        </div>
      )}
    </div>
  );
};

export default Details;
