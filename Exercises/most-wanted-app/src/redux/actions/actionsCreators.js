import axios from "axios";
import { addReport, updateReport, deleteReport, getReport } from "./actions";

export const getAllReports = () => {
  return (dispatch) => {
    axios
      .get("https://6317b16cece2736550b94cd7.mockapi.io/report/interpol")
      .then((response) => {
        dispatch(getReport(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addReportAction = (report) => (dispatch) => {
  const addReportPromise = axios
    .post("https://6317b16cece2736550b94cd7.mockapi.io/report/interpol", report)
    .then((response) => {
      dispatch(addReport(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  return addReportPromise;
};

export const deleteReportAction = (id) => (dispatch) => {
  const deleteReportPromise = axios
    .delete(`https://6317b16cece2736550b94cd7.mockapi.io/report/interpol/${id}`)
    .then((response) => {
      dispatch(deleteReport(id));
    })
    .catch((error) => {
      console.log(error);
    });
  return deleteReportPromise;
};

export const updateReportAction =
  ({ fname, lname, nat, not, sex, uploadedfile }, id) =>
  (dispatch) => {
    const updateReportPromise = axios
      .put(
        `https://6317b16cece2736550b94cd7.mockapi.io/report/interpol/${id}`,
        { fname, lname, nat, not, sex, uploadedfile }
      )
      .then((response) => {
        dispatch(
          updateReport({
            fname,
            lname,
            nat,
            not,
            sex,
            uploadedfile,
            id,
          })
        );
        dispatch(getAllReports());
      })
      .catch((error) => {
        console.log(error);
      });
    return updateReportPromise;
  };
