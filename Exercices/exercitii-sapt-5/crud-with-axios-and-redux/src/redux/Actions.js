import axios from "axios";

const contactsLoad = (contacts) => {
	return {
		type: "GET_CONTACTS",
		payload: contacts,
	};
};
export const loadContacts = () => {
	return (dispatch) => {
		axios
			.get(`https://63034c269eb72a839d7d1f7e.mockapi.io/CrudWithAxios`)
			.then((res) => {
				dispatch(contactsLoad(res.data));
			})
			.catch((err) => {
				console.log(err);
			});
	};
};
const contactDelete = () => {
	return {
		type: "DELETE_CONTACT",
	};
};
export const deleteContact = (id) => {
	return (dispatch) => {
		axios
			.delete(`https://63034c269eb72a839d7d1f7e.mockapi.io/CrudWithAxios/${id}`)
			.then((res) => {
				dispatch(contactDelete());
				dispatch(loadContacts());
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

const contactAdd = () => {
	return {
		type: "ADD_CONTACT",
	};
};

export const addContact = (contact) => {
	return (dispatch) => {
		axios.post(
			`https://63034c269eb72a839d7d1f7e.mockapi.io/CrudWithAxios`,
			contact
		);
		dispatch(contactAdd());
	};
};

const contactUpdate = () => {
	return {
		type: "UPDATE_CONTACT",
	};
};
export const updateContact = (contact, id) => {
	return (dispatch) => {
		axios.put(
			`https://63034c269eb72a839d7d1f7e.mockapi.io/CrudWithAxios/${id}`,
			contact
		);
		dispatch(contactUpdate());
	};
};
