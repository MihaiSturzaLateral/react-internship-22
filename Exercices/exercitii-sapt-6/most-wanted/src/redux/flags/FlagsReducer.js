const initialState = {
	flags: {},
};
export const flagsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_FLAGS":
			return {
				...state,
				flags: action.payload,
			};
		default:
			return state;
	}
};
