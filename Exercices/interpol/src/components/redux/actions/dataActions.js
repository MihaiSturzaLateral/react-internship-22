import { types } from "./dataTypes";

export const get_persons = (persons,button) => {
  return {
    type: types.GET_PERSONS,
    payload: persons,
    button_val:button
  };
};
export const get_all = (persons,button) => {
    return {
      type: types.GET_ALL,
      payload: persons,
      button_val:button
    };
  };
  
