import {
  LOAD_ALL_NOTICE,
  LOAD_RED_NOTICE,
  LOAD_YELLOW_NOTICE,
  FETCH_CHECK_LIST,
  FETCH_DETAILS,
  FETCH_DETAILS_PHOTO,
  FETCH_MY_REPORTS,
  ADD_MY_REPORTS,
  UPDATE_MY_REPORTS,
} from "../actions/actionTypes";

const initialState = {
  noticeFromApi: [],
  totalResults: 0,
  details: {},
  photoDet: {},
  checkList: [],
  myReportsList: [],
};

export const noticesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_YELLOW_NOTICE:
      return {
        ...state,
        noticeFromApi: action.payload._embedded.notices,
        totalResults: action.payload.total,
      };
    case LOAD_RED_NOTICE:
      return {
        ...state,
        noticeFromApi: action.payload._embedded.notices,
        totalResults: action.payload.total,
      };
    case LOAD_ALL_NOTICE:
      return {
        ...state,
        noticeFromApi: action.payload.notices,
        totalResults: action.payload.total,
      };
    case FETCH_CHECK_LIST:
      return {
        ...state,
        checkList: action.payload,
      };
    case FETCH_DETAILS:
      return {
        ...state,
        details: action.payload,
      };
    case FETCH_DETAILS_PHOTO:
      return {
        ...state,
        photoDet: action.payload,
      };
    case FETCH_MY_REPORTS:
      return {
        ...state,
        myReportsList: action.payload,
      };
    case ADD_MY_REPORTS:
      return {
        ...state,
        myReports: action.payload,
      };
    case UPDATE_MY_REPORTS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
