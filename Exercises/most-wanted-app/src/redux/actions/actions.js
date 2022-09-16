export const getReport = (report) => {
  return {
    type: "GET_REPORT",
    payload: report,
  };
};

export const addReport = (report) => {
  return {
    type: "ADD_REPORT",
    payload: report,
  };
};

export const deleteReport = (id) => {
  return {
    type: "DELETE_REPORT",
    payload: id,
  };
};

export const updateReport = ({
  forename,
  name,
  nationality,
  date_of_birth,
  notice_color,
  gender,
  img,
  id,
}) => {
  return {
    type: "UPDATE_REPORT",
    payload: {
      forename,
      name,
      nationality,
      date_of_birth,
      notice_color,
      gender,
      img,
      id,
    },
  };
};
