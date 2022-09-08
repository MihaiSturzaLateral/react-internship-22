import * as types from "./actionType";

const initialState = {
  persons: [],
  personsAll: [],
  myReports: [],
  myReportsList: [],
  personDet: [],
  checkList: [],
  arrLen: 0,
};

const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PERSON_START:
      return {
        ...state,
      };
    case types.FETCH_PERSON_SUCCESS:
      return {
        ...state,
        persons: action.payload,
      };
    case types.FETCH_PERSON_FAIL:
      return {
        ...state,
      };
    case types.FETCH_ALL_PERSON:
      return {
        ...state,
        personsAll: action.payload,
      };
    case types.ADD_MY_REPORTS:
      return {
        ...state,
        myReports: action.payload,
      };
    case types.FETCH_PERSON_DETAILS:
      return {
        ...state,
        personDet: action.payload,
      };
    case types.FETCH_CHECK_LIST:
      return {
        ...state,
        checkList: action.payload,
        arrLen: action.len,
      };
    case types.FETCH_MY_REPORTS:
      return {
        ...state,
        myReportsList: action.payload,
      };
    case types.UPDATE_MY_REPORTS:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
export default personReducer;
