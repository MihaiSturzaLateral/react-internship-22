import React from "react";
function CommentCard(props) {
  return (
    <>
      <div className="card  ms-2" style={{ width: 18 + "rem" }}>
        <div className="card-body">
          <h5 className="card-title ">{props.name}</h5>
          <h6 className="card-subtitle mb-2 text-primary ">{props.email}</h6>
          <p className="card-text">{props.body}</p>
        </div>
      </div>
    </>
  );
}

export default CommentCard;
