import { COUNT } from "./typesCount";

export const count = (number) => {
  return {
    type: COUNT,
    payload: number
  };
};
