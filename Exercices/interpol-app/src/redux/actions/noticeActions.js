import axios from "axios";
import {
  LOAD_YELLOW_NOTICE,
  LOAD_RED_NOTICE,
  LOAD_ALL_NOTICE,
  FETCH_PERSON,
  FETCH_CHECK_LIST,
  FETCH_DETAILS,
  FETCH_DETAILS_PHOTO,
} from "./actionTypes";

export const loadYellowNotice = (payload) => {
  return { type: LOAD_YELLOW_NOTICE, payload };
};
export const loadRedNotice = (payload) => {
  return { type: LOAD_RED_NOTICE, payload };
};
export const loadAllNotice = (payload) => {
  return { type: LOAD_ALL_NOTICE, payload };
};

export const fetchPerson = (payload) => {
  return { type: FETCH_PERSON, payload };
};

export const fetchDetails = (payload) => {
  return { type: FETCH_DETAILS, payload };
};

export const fetchDetailsPhoto = (payload) => {
  return { type: FETCH_DETAILS_PHOTO, payload };
};

export const fetchCheckList = (persons) => ({
  type: FETCH_CHECK_LIST,
  payload: persons,
});

export const getYellowNoticeFromApi = () => (dispatch) => {
  const getYellowNoticePromise = axios.get(
    "https://ws-public.interpol.int/notices/v1/yellow"
  );
  getYellowNoticePromise.then((res) => {
    dispatch(loadYellowNotice(res.data));
  });
  return getYellowNoticePromise;
};

export const getRedNoticeFromApi = () => (dispatch) => {
  const getRedNoticePromise = axios.get(
    "https://ws-public.interpol.int/notices/v1/red"
  );
  getRedNoticePromise.then((res) => {
    dispatch(loadRedNotice(res.data));
  });
  return getRedNoticePromise;
};

export const getAllNoticeFromApi = () => async (dispatch) => {
  const YellowNotices = await axios.get(
    "https://ws-public.interpol.int/notices/v1/yellow"
  );
  const RedNotices = await axios.get(
    "https://ws-public.interpol.int/notices/v1/red"
  );
  const payload = {
    total: YellowNotices.data.total + RedNotices.data.total,
    notices: [
      ...YellowNotices.data._embedded.notices,
      ...RedNotices.data._embedded.notices,
    ],
  };
  console.log(payload.notices);
  dispatch(loadAllNotice(payload));
};

export const getDetailsFromApi = (id) => (dispatch) => {
  const getDetailsPromise = axios.get(`${id}`);
  getDetailsPromise.then((res) => {
    dispatch(fetchDetails(res.data));
  });
  getDetailsPromise.catch((err) => {
    console.log(err);
  });
  return getDetailsPromise;
};

export const getDetailPhoto = (id) => (dispatch) => {
  const getDetailPhotoPromise = axios.get(`${id}`);
  getDetailPhotoPromise.then((res) => {
    dispatch(fetchDetailsPhoto(res.data));
  });
  getDetailPhotoPromise.catch((err) => {
    console.log(err);
  });
  return getDetailPhotoPromise;
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
            fetchCheckList([
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
