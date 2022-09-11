const initialState = {
	redReports: [],
	yellowReports: [],
	filteredRedReports: [],
	filteredYellowReports: [],
	singleReport: {},
	images: {},
};
export const reportsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_RED_REPORTS":
			return {
				...state,
				redReports: action.payload,
			};
		case "GET_YELLOW_REPORTS":
			return {
				...state,
				yellowReports: action.payload,
			};
		case "GET_RED_REPORTS_FILTERED":
			return {
				...state,
				filteredRedReports: action.payload,
			};
		case "GET_YELLOW_REPORTS_FILTERED":
			return {
				...state,
				filteredYellowReports: action.payload,
			};
		case "GET_REPORT":
			return {
				...state,
				singleReport: action.payload,
			};
		case "GET_IMAGES":
			return {
				...state,
				images: action.payload,
			};
		default:
			return state;
	}
};
