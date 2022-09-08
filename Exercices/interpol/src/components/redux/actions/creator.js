import {
  get_persons,
  get_all,
  add_report,
  get_reports,
  delete_report,
  update_report,
} from "./dataActions";
import axios from "axios";

export const get_personsAction = (button, currentPage) => {
  return (dispatch) => {
    axios
      .get(`https://ws-public.interpol.int/notices/v1/${button}`, {
        params: { page: currentPage },
      })
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
export const get_allAction = (button, currentPage) => {
  let one = "https://ws-public.interpol.int/notices/v1/red";
  let two = "https://ws-public.interpol.int/notices/v1/yellow";
  const requestOne = axios.get(one, { params: { page: currentPage } });
  const requestTwo = axios.get(two, { params: { page: currentPage } });

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

export const add_reportAction = (report, notice) => (dispatch) => {
  const add_reportPromise = axios
    .post(
      `https://6300d36c9a1035c7f8f8c61a.mockapi.io/interpol${notice}`,
      report
    )
    .then((response) => {
      dispatch(add_report(response.data));
    })
    .catch((error) => {
      console.log("Eroare la adaugare raport: ", error);
    });
};
export const get_reportsAction = () => {
  let one = "https://6300d36c9a1035c7f8f8c61a.mockapi.io/interpolRed";
  let two = "https://6300d36c9a1035c7f8f8c61a.mockapi.io/interpolYellow";
  const requestOne = axios.get(one);
  const requestTwo = axios.get(two);

  return (dispatch) => {
    axios
      .all([requestOne, requestTwo])
      .then(
        axios.spread((...response) => {
          const responseOne = response[0];
          const responseTwo = response[1];
          dispatch(get_reports([...responseOne?.data, ...responseTwo?.data]));
        })
      )
      .catch((error) => {
        console.log("ERoare la afisare red");
      });
  };
};
export const delete_reportAction = (id, notice) => (dispatch) => {
  const delete_reportPromise = axios
    .delete(
      `https://6300d36c9a1035c7f8f8c61a.mockapi.io/interpol${notice}/${id}`
    )
    .then((response) => {
      dispatch(delete_report(id, notice));
    })
    .catch((error) => {
      console.log("eraore al delete", error);
    });
  return delete_reportPromise;
};
export const update_reportAction =
  (id, { firstName, lastName, birthDate, nationality, sex }, notice) =>
  (dispatch) => {
    const update_reportPromise = axios
      .put(
        `https://6300d36c9a1035c7f8f8c61a.mockapi.io/interpol${notice}/${id}`,
        { firstName, lastName, birthDate, nationality, sex }
      )
      .then((response) => {
        dispatch(
          update_report({
            id,
            firstName,
            lastName,
            birthDate,
            nationality,
            sex,
          })
        );
      })
      .catch((error) => {
        console.log("Eroarela update", error);
      });
    return update_reportPromise;
  };
