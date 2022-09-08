import * as types from "./actionType";
import axios from "axios";
const fetchPersonStart = () => ({
  type: types.FETCH_PERSON_START,
});
const fetchPersonSuccess = (persons) => ({
  type: types.FETCH_PERSON_SUCCESS,
  payload: persons,
});
const fetchPersonFail = (err) => ({
  type: types.FETCH_PERSON_FAIL,
  payload: err,
});
const fetchAllPerson = (persons) => ({
  type: types.FETCH_ALL_PERSON,
  payload: persons,
});
const addMyReports = (report) => ({
  type: types.ADD_MY_REPORTS,
  payload: report,
});
const fetchPersonDet = (person) => ({
  type: types.FETCH_PERSON_DETAILS,
  payload: person,
});
const fetchCheckList = (persons, len) => ({
  type: types.FETCH_CHECK_LIST,
  payload: persons,
  len: len,
});
const fetchMyReports = (persons) => ({
  type: types.FETCH_MY_REPORTS,
  payload: persons,
});
const updateMyReports = (
  { firstName, lastName, nat, url, color, date },
  id
) => ({
  type: types.UPDATE_MY_REPORTS,
  payload: {
    firstName,
    lastName,
    nat,
    url,
    color,
    date,
    id,
  },
});
export const _updateMyReports = (
  { firstName, lastName, nat, url, color, date },
  id
) => {
  return (dispatch) => {
    axios
      .put(`https://630120369a1035c7f8fe63c1.mockapi.io/interpol/${id}`, {
        firstName: firstName,
        lastName: lastName,
        nationality: nat,
        imgUrl: url,
        noticeColor: color,
        date: date,
      })
      .then(() => {
        dispatch(
          updateMyReports({
            firstName,
            lastName,
            nat,
            url,
            color,
            date,

            id,
          })
        );
      })
      .catch((error) => {
        console.log("ERR ", error);
      });
  };
};

export const _fetchMyReports = (url) => {
  return (dispatch) => {
    axios
      .get(url)
      .then((res) => {
        dispatch(fetchMyReports(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const _fetchCheckList = (forename, name, nat, minAge, maxAge, sex) => {
  const requestOne = axios.get(
    `https://ws-public.interpol.int/notices/v1/red?forename=${forename}&name=${name}&nationality=${nat}&ageMax=${maxAge}&ageMin=${minAge}&sexId=${sex}`
  );
  const requestTwo = axios.get(
    `https://ws-public.interpol.int/notices/v1/yellow?forename=${forename}&name=${name}&nationality=${nat}&ageMax=${maxAge}&ageMin=${minAge}&sexId=${sex}`
  );
  return (dispatch) => {
    axios
      .all([requestOne, requestTwo])
      .then(
        axios.spread((...res) => {
          dispatch(
            fetchCheckList(
              [
                ...res[0].data._embedded.notices,
                ...res[1].data._embedded.notices,
              ],
              res[0].data._embedded.notices.length
            )
          );
        })
      )
      .catch((err) => {
        console.log(err);
      });
  };
};
export const fetchPersonDetails = (url) => {
  return (dispatch) => {
    axios
      .get(url)
      .then((res) => {
        dispatch(fetchPersonDet(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const _addMyReports = (report) => {
  return (dispatch) => {
    axios
      .post("https://630120369a1035c7f8fe63c1.mockapi.io/interpol", report)
      .then((res) => {
        dispatch(addMyReports(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const fetchPerson = (url) => {
  return (dispatch) => {
    dispatch(fetchPersonStart());
    axios
      .get(url)
      .then((res) => {
        dispatch(fetchPersonSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchPersonFail(err));
      });
  };
};
export const _fetchAllPerson = () => {
  const one = "https://ws-public.interpol.int/notices/v1/red";
  const two = "https://ws-public.interpol.int/notices/v1/yellow";
  const requestOne = axios.get(one);
  const requestTwo = axios.get(two);
  return (dispatch) => {
    axios
      .all([requestOne, requestTwo])
      .then(
        axios.spread((...res) => {
          dispatch(
            fetchAllPerson([
              ...res[0].data._embedded.notices,
              ...res[1].data._embedded.notices,
            ])
          );
        })
      )
      .catch((err) => {
        console.log(err);
      });
  };
};
