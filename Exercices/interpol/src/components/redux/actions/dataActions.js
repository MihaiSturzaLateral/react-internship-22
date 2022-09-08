import { types } from "./dataTypes";

export const get_persons = (persons, button, total, currentPage) => {
  return {
    type: types.GET_PERSONS,
    payload: persons,
    button_val: button,
    totalNum: total,
    currentPage: currentPage,
  };
};
export const get_all = (persons, button, total, currentPage) => {
  return {
    type: types.GET_ALL,
    payload: persons,
    button_val: button,
    totalNum: total,
    currentPage: currentPage,
  };
};

export const add_report = (report, notice) => {
  return {
    type: types.ADD_REPORT,
    payload: report,
    notice: notice,
  };
};

export const get_reports = (report) => {
  return {
    type: types.GET_REPORTS,
    payload: report,
  };
};
export const delete_report = (id, notice) => {
  return {
    type: types.DELETE_REPORT,
    payload: id,
    notice: notice,
  };
};
export const update_report = (
  { id, firstName, lastName, birthDate, nationality, sex },
  notice
) => {
  return {
    type: types.UPDATE_REPORT,
    payload: {
      id,
      firstName,
      lastName,
      birthDate,
      nationality,
      sex,
    },
  };
};
