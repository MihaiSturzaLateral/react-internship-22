const initialState = { weather: [] };

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "LOAD_DATA_BY_LAT_LONG":
			return {
				weather: action.payload,
			};
		case "LOAD_DATA_BY_CITY":
			return {
				weather: action.payload,
			};
		default:
			return state;
	}
};
