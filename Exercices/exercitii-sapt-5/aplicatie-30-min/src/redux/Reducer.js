const initialState = { value: 0 };

export const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case "MODIFY_COUNTER":
			return {
				//...state,
				value: state.value + action.number,
			};
		default:
			return state;
	}
};
