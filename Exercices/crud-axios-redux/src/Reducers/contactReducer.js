export const contactReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "GET_CONTACTS":
      return payload;

    case "ADD_CONTACT":
      return [...state, payload];

    case "DELETE_CONTACT":
      return state.filter(({ id }) => id !== payload);

    case "UPDATE_CONTACT":
      return state.map((contact) => {
        if (contact.id === payload.id) {
          return { ...contact, ...payload };
        } else {
          return contact;
        }
      });

    default:
      return state;
  }
};
