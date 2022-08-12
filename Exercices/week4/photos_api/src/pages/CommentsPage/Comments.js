import React, { useEffect, useState } from "react";
import CommentCard from "./components/CommentCard/CommentCard";
import "./Comments.css";

const Comments = () => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      const data = await res.json();
      setComments(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="commentContainer">
      {comments.map((comment) => {
        return (
          <CommentCard
            key={comment.id}
            name={comment.name}
            email={comment.email}
            body={comment.body}
          />
        );
      })}
    </div>
  );
};

export default Comments;
