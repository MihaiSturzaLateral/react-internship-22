import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionGetReports } from "../../redux/Reports/reportsActions";
import CardReports from "./cardReports";

const MyReports = () => {
  let dispatch = useDispatch();
  const { reports } = useSelector((state) => state);

  useEffect(() => {
    dispatch(actionGetReports());
  }, []);

  return (
    <>
      <div className="container">
        <h5 style={{ marginTop: "20px" }} className="title-reports">
          My Reports:
        </h5>
        <div>
          {reports?.map((item, index) => {
            return (
              <CardReports
                key={index}
                firstName={item?.firstName}
                lastName={item?.lastName}
                nationality={item?.nationality}
                dateOfBirth={item?.dateOfBirth}
                sex={item?.sex}
                image={item?.href}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MyReports;
