import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  delete_reportAction,
  get_reportsAction,
} from "../components/redux/actions/creator";
import ReportCard from "../components/ReportCard";
import "./MyReports.css";
const MyReports = () => {
  let dispatch = useDispatch();
  const reports = useSelector((state) => state.persons);
  console.log("reportssss", reports);
  useEffect(() => {
    dispatch(get_reportsAction());
  }, []);

  const [button, setButton] = useState("");
  const sendData = (active) => {
    if (active) {
      setButton(active);

      console.log("From home js: ", active);

      return active;
    }
  };

  return (
    <>
      <div className="container">
        <div className="title-reports">My Reports:</div>
        <div className="all_reports">
          <div className="cards-reports">
            {Array.isArray(reports)
              ? reports.map((obj, key) => (
                  <ReportCard
                    key={key}
                    id={obj.id}
                    notice={obj?.notice}
                    firstName={obj?.firstName}
                    lastName={obj?.lastName}
                    birthDate={obj?.birthDate}
                    nationalities={obj?.nationality}
                    sex={obj?.sex}
                    urlImage={obj?.urlImage}
                  />
                ))
              : null}
          </div>
          </div>
        </div>
      
    </>
  );
};

export default MyReports;
