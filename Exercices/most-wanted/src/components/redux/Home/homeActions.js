import axios from "axios";
import { GET_NOTICES } from "./homeTypes";

export const getNotices = (notices) => {
  return {
    type: GET_NOTICES,
    payload: notices,
  };
};

export const actionGetNotices = () => {
  let one = " https://ws-public.interpol.int/notices/v1/red ";
  let two = " https://ws-public.interpol.int/notices/v1/yellow ";
  const requestOne = axios.get(one);
  const requestTwo = axios.get(two);

  return (dispatch) => {
    axios
      .all([requestOne, requestTwo])
      .then(
        axios.spread((...responses) => {
          const responseOne = responses[0].data;
          const responseTwo = responses[1].data;
          dispatch({
            type: GET_NOTICES,
            payload: { responseOne, responseTwo },
          });
        })
      )
      .catch((errors) => {
        console.log("Eroors", errors);
      });
  };
};
