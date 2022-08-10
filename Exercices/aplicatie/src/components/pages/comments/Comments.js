import React, { useEffect, useState } from "react";
import CardComments from "./CardComments";

const url = "https://jsonplaceholder.typicode.com/comments";

const Comments = () => {
  const [data, setData] = useState([]);

  const fetchComments = async () => {
    const response = await fetch(url);
    const dates = await response.json();
    setData(dates);
  };
  useEffect(() => {
    fetchComments();
  }, []);
  console.log(data);
  return (
    <>
      <h1>Comments</h1>
      <div>
        {data.map((element) => {
          const { id, name, email } = element;
          return <CardComments id={id} name={name} email={email} />;
        })}
      </div>
    </>
  );
};

export default Comments;
