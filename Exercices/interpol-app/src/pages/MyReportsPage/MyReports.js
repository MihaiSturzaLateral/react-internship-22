import React, { useEffect, useState } from "react";
import "./MyReports.css";
import ReportCard from "./components/ReportCard";
import { _fetchMyReports } from "../../redux/actions/noticeActions";
import { useDispatch, useSelector } from "react-redux";
import { shuffle } from "lodash";

const MyReports = () => {
  const dispatch = useDispatch();
  const dataFromStore = useSelector((state) => state);
  console.log(dataFromStore);

  useEffect(() => {
    _fetchMyReports("https://6304bfbc761a3bce77eebfc9.mockapi.io/interpol")(
      dispatch
    );
  }, []);

  return (
    <div className="containerReports">
      <div className="reportsDiv">
        <label>My Reports: {dataFromStore?.myReportsList?.length}</label>
      </div>
      <div className="reportsCardsDiv">
        {shuffle(
          dataFromStore?.myReportsList?.map((notice, key) => {
            return (
              <ReportCard
                key={key}
                id={notice?.id}
                firstName={notice?.firstName}
                lastName={notice?.lastName}
                nat={notice?.nationality}
                url={notice?.imgUrl}
                sex={notice?.sex}
                date={notice?.date}
                color={notice?.noticeColor}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default MyReports;
