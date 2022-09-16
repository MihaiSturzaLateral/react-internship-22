import {
    get_contact,
    add_contact,
    delete_contact,
    update_contact,
  } from "./contactActions";
  import axios from "axios";
  
  export const add_contactAction = (contact) => (dispatch) => {
    const addContactPromise = axios
      .post("https://6300d36c9a1035c7f8f8c61a.mockapi.io/CrudContact", contact)
      .then((response) => {
        dispatch(add_contact(response.data));
      })
      .catch((error) => {
        console.log("Eroare la adaugare ", error);
      });
    return addContactPromise;
  };
  
  export const get_contactAction = () => {
    return (dispatch) => {
      axios
        .get("https://6300d36c9a1035c7f8f8c61a.mockapi.io/CrudContact")
        .then((response) => {
          dispatch(get_contact(response.data));
        })
        .catch((error) => {
          console.log("Eroare la afisare ", error);
        });
    };
  };
  
  export const update_contactAction =
    (id, { email, name, message }) =>
    (dispatch) => {
      const updateContactPromise = axios
        .put(`https://6300d36c9a1035c7f8f8c61a.mockapi.io/CrudContact/${id}`, {
          email,
          name,
          message,
        })
        .then((response) => {
          dispatch(update_contact({ id, email, name, message }));
        })
        .catch((error) => {
          console.log("Eroare la update", error);
        });
      return updateContactPromise;
    };
  
  export const delete_contactAction = (id) => (dispatch) => {
    const deleteContactPromise = axios
      .delete(`https://6300d36c9a1035c7f8f8c61a.mockapi.io/CrudContact/${id}`)
      .then((response) => {
        dispatch(delete_contact(id));
      })
      .catch((error) => {
        console.log("Eroare la delete", error);
      });
    return deleteContactPromise;
  };