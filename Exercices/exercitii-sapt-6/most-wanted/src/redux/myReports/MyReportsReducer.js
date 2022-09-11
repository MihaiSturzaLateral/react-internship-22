const initialState = { myReports: [], myReport: {} };
export const myReportsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_REPORTS":
			return { ...state, myReports: action.payload };
		case "GET_SINGLE_REPORT":
			return { ...state, myReport: action.payload };
		case "DELETE_REPORT":
			return { ...state };
		case "ADD_REPORT":
			return { ...state };
		case "UPDATE_REPORT":
			return { ...state };
		default:
			return state;
	}
};
