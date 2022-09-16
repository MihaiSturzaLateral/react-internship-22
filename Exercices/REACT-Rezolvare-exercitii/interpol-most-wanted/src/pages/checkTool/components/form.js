import React from "react";
import "./form.css";

function Form() {
  return (
    <div className="form-div">
      <h1>Check Tool</h1>
      <label>
        First Name <input></input>
      </label>
      <label>
        Last Name <input></input>
      </label>
      <button>Search</button>
    </div>
  );
}

export default Form;
