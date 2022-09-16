import axios from "axios";
import {
  GET_REPORTS,
  ADD_REPORTS,
  DELETE_REPORTS,
  UPDATE_REPORTS,
} from "./reportsTypes";

export const getReports = (reports) => {
  return {
    type: GET_REPORTS,
    payload: reports,
  };
};

export const addReport = (report) => {
  return {
    type: ADD_REPORTS,
    payload: report,
  };
};

export const deleteReport = (id) => {
  return {
    type: DELETE_REPORTS,
    payload: id,
  };
};

export const updateReport = ({
  id,
  firstName,
  lastName,
  nationality,
  dateOfBirth,
  sex,
}) => {
  return {
    type: UPDATE_REPORTS,
    payload: {
      id,
      firstName,
      lastName,
      nationality,
      dateOfBirth,
      sex,
    },
  };
};

export const actionGetReports = () => {
  return (dispatch) => {
    axios
      .get("https://6306153fdde73c0f84527f22.mockapi.io/my-reports/reports")
      .then((response) => {
        dispatch(getReports(response.data));
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
};

export const actionAddReport = (report) => (dispatch) => {
  const addReportPromise = axios
    .post(
      "https://6306153fdde73c0f84527f22.mockapi.io/my-reports/reports",
      report
    )
    .then((response) => {
      dispatch(addReport(response.data));
    })
    .catch((error) => {
      console.log("Error", error);
    });
  return addReportPromise;
};

export const actionDeleteReport = (id) => (dispatch) => {
  const deleteReportPromise = axios
    .delete(
      `https://6306153fdde73c0f84527f22.mockapi.io/my-reports/reports/${id}`
    )
    .then((response) => {
      dispatch(deleteReport(id));
    })
    .catch((error) => {
      console.log("Error", error);
    });
  return deleteReportPromise;
};

export const actionUpdateReport =
  ({ firstName, lastName, nationality, dateOfBirth, sex }, id) =>
  (dispatch) => {
    const updateReportPromise = axios
      .put(
        `https://6306153fdde73c0f84527f22.mockapi.io/my-reports/reports/${id}`,
        { firstName, lastName, nationality, dateOfBirth, sex }
      )
      .then((response) => {
        dispatch(
          updateReport({
            firstName,
            lastName,
            nationality,
            dateOfBirth,
            sex,
            id,
          })
        );
      })
      .catch((error) => {
        console.log("Error", error);
      });
    return updateReportPromise;
  };
