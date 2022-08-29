const initialState = { contacts: [], contact: {} };
export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_CONTACTS":
			return { ...state, contacts: action.payload };
		case "DELETE_CONTACT":
			return { ...state };
		case "ADD_CONTACT":
			return { ...state };
		case "UPDATE_CONTACT":
			return { ...state };
		default:
			return state;
	}
};
