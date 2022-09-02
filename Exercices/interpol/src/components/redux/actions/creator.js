import { get_persons, get_all } from "./dataActions";
import axios from "axios";

export const get_personsAction = (button) => {
  return (dispatch) => {
    axios
      .get(`https://ws-public.interpol.int/notices/v1/${button}`)
      .then((response) => {
        dispatch(
          get_persons(
            response.data._embedded.notices,
            button,
            response.data.total
          )
        );
      })
      .catch((error) => {
        console.log("ERoare la afisare persons");
      });
  };
};
export const get_allAction = (button) => {
  let one = "https://ws-public.interpol.int/notices/v1/red";
  let two = "https://ws-public.interpol.int/notices/v1/yellow";
  const requestOne = axios.get(one);
  const requestTwo = axios.get(two);

  return (dispatch) => {
    axios
      .all([requestOne, requestTwo])
      .then(
        axios.spread((...response) => {
          const responseOne = response[0];
          const responseTwo = response[1];
          dispatch(
            get_all(
              [
                ...responseOne?.data?._embedded?.notices,
                ...responseTwo?.data?._embedded?.notices,
              ],
              button,
              responseOne?.data?.total + responseTwo?.data?.total
            )
          );
        })
      )
      .catch((error) => {
        console.log("ERoare la afisare red");
      });
  };
};
