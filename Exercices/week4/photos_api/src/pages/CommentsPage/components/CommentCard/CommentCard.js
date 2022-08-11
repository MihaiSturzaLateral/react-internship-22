import React from "react";
import "./CommentCard.css";

const CommentCard = ({ name, email, body }) => {
  return (
    <div className="cardsContainer">
      <div className="cards">
        <div className="cardsItem">
          <span>Name: {name}</span>
        </div>
        <div className="cardsItem">
          <span>Email: {email}</span>
        </div>
        <div className="cardsItem">
          <span>Body: {body}</span>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
