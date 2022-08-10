import React from "react";

function SearchBox(props) {
  return (
    <div>
      <input
        type="text"
        className="form-control border border-secondary"
        placeholder="Search by comments"
        aria-label="Search by comments"
        aria-describedby="button-addon2"
        onChange={props.onChange}
      ></input>
    </div>
  );
}

export default SearchBox;
