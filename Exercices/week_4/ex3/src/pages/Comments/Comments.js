import React from "react";
import CommentCard from "./components/CommentCard";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchBox from "./components/SearchBox";
function Comments() {
  const [comment, setComment] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredComment, setFilteredComments] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        setComment(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    setFilteredComments(
      comment.filter((comment) => {
        return comment.email.toLowerCase().includes(search.toLocaleLowerCase());
      })
    );
  }, [search, comment]);
  // const filteredComments = comment.filter((comment) => {
  //   return comment.email.toLowerCase().includes(search.toLocaleLowerCase());
  // });
  return (
    <>
      <h1 className="text-warning d-flex justify-content-center ">Comments</h1>
      <SearchBox onChange={(e) => setSearch(e.target.value)} />
      <div className="container-sm mt-4 d-flex flex-wrap justify-content-between">
        {filteredComment.map((comment) => {
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
    </>
  );
}

export default Comments;
