import { COUNTER } from "./actionTypes";

export const counter = (number) => {
  return {
    type: COUNTER,
    payload: number,
  };
};
