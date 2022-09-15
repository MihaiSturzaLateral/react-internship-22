import React, { useEffect, useState } from "react";
import "./Home.css";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import {
  getAllNoticeFromApi,
  getRedNoticeFromApi,
  getYellowNoticeFromApi,
} from "../../redux/actions/noticeActions";
import { useDispatch, useSelector } from "react-redux";
import { shuffle } from "lodash";

const Home = () => {
  const dispatch = useDispatch();
  const [color, setColor] = useState("");
  const [warning, setWarning] = useState("");
  const dataFromStore = useSelector((state) => state);
  console.log(dataFromStore);
  let colour = "";
  let noticeWarning = "";

  const getColor = (key) => {
    key <= 19 ? (colour = "#ff9900") : (colour = "#ff0000");
    key <= 19 ? (noticeWarning = "yellow") : (noticeWarning = "red");
    return colour, noticeWarning;
  };

  const getRed = () => {
    getRedNoticeFromApi()(dispatch);
    setColor("#ff0000");
    setWarning("red");
  };

  const getYellow = () => {
    getYellowNoticeFromApi()(dispatch);
    setColor("#ff9900");
    setWarning("yellow");
  };

  const getAll = () => {
    getAllNoticeFromApi()(dispatch);
  };

  useEffect(() => {
    getAllNoticeFromApi()(dispatch);
  }, []);

  return (
    <div className="containerHome">
      <div className="btnsDiv">
        <div className="threeBtnsDiv">
          <button className="red" onClick={getRed}>
            Red Notices
          </button>
          <button className="yellow" onClick={getYellow}>
            Yellow Notices
          </button>
          <button className="all" onClick={getAll}>
            All Notices
          </button>
        </div>
        <div className="labelDiv">
          <label>Total Wanted: {dataFromStore.totalResults}</label>
        </div>
      </div>
      <div className="cardsDiv">
        {shuffle(
          dataFromStore.noticeFromApi.map((notice, key) => {
            if (dataFromStore.noticeFromApi.length > 20) {
              getColor(key);
              return (
                <ProfileCard
                  key={key}
                  imgWanted={notice?._links?.thumbnail?.href}
                  forenameWanted={notice?.forename}
                  nameWanted={notice?.name}
                  birthWanted={notice?.date_of_birth}
                  nationalityWanted={notice?.nationalities}
                  url={notice?._links?.self?.href}
                  Color={colour}
                  Warning={noticeWarning}
                  imgDetails={notice?._links?.images?.href}
                />
              );
            } else {
              return (
                <ProfileCard
                  key={key}
                  imgWanted={notice._links.thumbnail.href}
                  forenameWanted={notice.forename}
                  nameWanted={notice.name}
                  birthWanted={notice.date_of_birth}
                  nationalityWanted={notice.nationalities}
                  url={notice?._links?.self?.href}
                  Color={color}
                  Warning={warning}
                  imgDetails={notice?._links?.images?.href}
                />
              );
            }
          })
        )}
      </div>
    </div>
  );
};

export default Home;
