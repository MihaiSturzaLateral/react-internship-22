import axios from "axios";
import {
  LOAD_YELLOW_NOTICE,
  LOAD_RED_NOTICE,
  LOAD_ALL_NOTICE,
  FETCH_CHECK_LIST,
  FETCH_DETAILS,
  FETCH_DETAILS_PHOTO,
  FETCH_MY_REPORTS,
  ADD_MY_REPORTS,
  UPDATE_MY_REPORTS,
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

export const fetchDetails = (payload) => {
  return { type: FETCH_DETAILS, payload };
};

export const fetchDetailsPhoto = (payload) => {
  return { type: FETCH_DETAILS_PHOTO, payload };
};

export const fetchCheckList = (payload) => {
  return { type: FETCH_CHECK_LIST, payload };
};

export const fetchMyReports = (payload) => {
  return { type: FETCH_MY_REPORTS, payload };
};

export const addMyReports = (payload) => {
  return { type: ADD_MY_REPORTS, payload };
};

export const updateMyReports = (payload) => {
  return { type: UPDATE_MY_REPORTS, payload };
};

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
    `https://ws-public.interpol.int/notices/v1/red`,
    {
      params: {
        forename: forename,
        name: name,
        nationality: nat,
        ageMax: maxAge,
        ageMin: minAge,
        sexId: sex,
      },
    }
  );
  const requestTwo = axios.get(
    `https://ws-public.interpol.int/notices/v1/yellow`,
    {
      params: {
        forename: forename,
        name: name,
        nationality: nat,
        ageMax: maxAge,
        ageMin: minAge,
        sexId: sex,
      },
    }
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

export const _fetchMyReports = (url) => (dispatch) => {
  const fetchMyReportsPromise = axios.get(url);
  fetchMyReportsPromise.then((res) => {
    dispatch(fetchMyReports(res.data));
  });
  fetchMyReportsPromise.catch((err) => {
    console.log(err);
  });
  return fetchMyReportsPromise;
};

export const _addMyReports = (report) => (dispatch) => {
  const addMyReportsPromise = axios.post(
    "https://6304bfbc761a3bce77eebfc9.mockapi.io/interpol",
    report
  );
  addMyReportsPromise.then((res) => {
    dispatch(addMyReports(res.data));
  });
  addMyReportsPromise.catch((err) => {
    console.log(err);
  });
  return addMyReportsPromise;
};

export const _updateMyReports =
  (id, { firstName, lastName, nat, color, date, sex }) =>
  (dispatch) => {
    const updateMyReportsPromise = axios.put(
      `https://6304bfbc761a3bce77eebfc9.mockapi.io/interpol/${id}`,
      {
        firstName: firstName,
        lastName: lastName,
        nationality: nat,
        noticeColor: color,
        date: date,
        sex: sex,
      }
    );
    updateMyReportsPromise.then((res) => {
      dispatch(updateMyReports({ firstName, lastName, nat, color, date, id }));
    });
    updateMyReportsPromise.catch((err) => {
      console.log(err);
    });
    return updateMyReportsPromise;
  };
