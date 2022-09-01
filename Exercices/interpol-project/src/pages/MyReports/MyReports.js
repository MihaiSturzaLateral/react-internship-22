import React from "react";
import NavBar from "../../components/NavBar";
import MyReportsCard from "./components/MyReportsCard";
import { _fetchMyReports } from "../../redux/action";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
function MyReports() {
  const { myReportsList } = useSelector((state) => ({ ...state.data }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      _fetchMyReports("https://630120369a1035c7f8fe63c1.mockapi.io/interpol")
    );
  }, [dispatch]);
  console.log(myReportsList);
  return (
    <>
      <NavBar />
      <div className="container-sm">
        <div className="btn btn-danger mt-5">My Reports:</div>
        <main className="d-flex flex-wrap justify-content-between ">
          {myReportsList.map((e) => {
            return (
              <MyReportsCard
                key={e?.id}
                fullname={e?.firstName}
                nat={e?.nationality}
                url={e?.imgUrl}
                sex={e?.sex}
                color={e?.noticeColor}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default MyReports;
