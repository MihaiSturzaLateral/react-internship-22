import { types } from "./dataTypes";

export const get_persons = (persons, button, total) => {
  return {
    type: types.GET_PERSONS,
    payload: persons,
    button_val: button,
    totalNum: total,
  };
};
export const get_all = (persons, button, total) => {
  return {
    type: types.GET_ALL,
    payload: persons,
    button_val: button,
    totalNum: total,
  };
};

export const add_report = (report) => {
  return {
    type: types.ADD_REPORT,
    payload: report,
  };
};
