import React from "react";
import FormModel from "../../components/Form";
import NavBar from "../../components/NavBar";

function Contact() {
  return (
    <>
      <NavBar
        title="Contact"
        btn="Update/Delete"
        classN="btn btn-outline-success"
        path="../pages/ContactList/ContactList"
      />

      <div className="container-sm">
        <FormModel />
      </div>
    </>
  );
}

export default Contact;
